const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Create our API routes
app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  // Save the todo
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    // Send list back as an object instead of an array
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send('Id not valid');
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send('Id not found');
    }
    res.send({todo});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.patch('/todos:/id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});

// POST /users
app.post('/users', (req, res) => {
  console.log(req.body);
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);


  // Model methods
  // User.findByToken()
  // Instance methods
  // user.generateAuthToken()

  // Save the user
  user.save().then(() => {
     return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((err) => {
     res.status(400).send(err);
  });
});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
