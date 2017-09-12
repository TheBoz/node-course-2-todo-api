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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'})
  // .then((result) => {
  //   console.log(result);
  // });

  // deleteOne - deletes the first match it finds
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  // .then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete - finds the first match and returns it
  db.collection('Todos').findOneAndDelete({completed: false})
  .then((result) => {
    console.log(result);
  });

  // db.close();
});
