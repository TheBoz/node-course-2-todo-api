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
  console.log('Connected to MongoDB server');

  // "_id": "59b7e7245e8ad994ac8207cb"
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));

  // })

  // Insert new doc into Users (name, age, location)
  // "_id": "59b7e7e8a43731428cc227d1"
  // db.collection('Users').insertOne({
  //   name: 'Kevin Boswell',
  //   age: 54,
  //   location: 'New Tazewell, TN  37825'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
