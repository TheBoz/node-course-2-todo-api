// const MongoClient = require('mongodb').MongoClient;
// Now using ES6 object destructuring
// var user = {name: 'kevin', age: 55}
// var {name} = user;
const {MongoClient, ObjectID} = require('mongodb');

// Mongo lets me create my own Object ID's if so desired
// var obj = new ObjectID();
// console.log(obj);

const mongodbServerIP = '192.168.209.128';

MongoClient.connect(`mongodb://${mongodbServerIP}:27017/TodoApp`, (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB serever');
  }

  // findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59b81ad759050fd46695a7f8')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
    }
  ). then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b81c1d59050fd46695a89f')
  }, {
    $set: {
      name: 'Dawn Boswell'
    },
    $inc: {
      age: -5
    }
  }, {
    returnOriginal: false
    }
  ). then((result) => {
    console.log(result);
  });

  // db.close();
});
