const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '59b97ad535f54c620827823a';
var userId = '59b8645e53c15f513c0ea4a8';

if (!ObjectID.isValid(todoId)) {
  console.log('Todo ID is not valid');
}

// Todo.find({
//   _id: todoId
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: todoId
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo Find One', todo);
// });

// Todo.findById(todoId).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
