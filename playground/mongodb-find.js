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

  // db.collection('Todos').find({
  //   _id: new ObjectID('59b7e7245e8ad994ac8207cb')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
