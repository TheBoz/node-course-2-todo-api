// Require Mongoose library
var mongoose = require('mongoose');

// Tell Mongoose which Promise library to use
mongoose.Promise = global.Promise;
// Connect Mongoose to the MongoDB
const mongodbServerIP = '192.168.209.128';
const options = {
  useMongoClient: true,
  promiseLibrary: global.Promise
}
mongoose.connect(`mongodb://${mongodbServerIP}:27017/TodoApp`, options);

module.exports = {mongoose}
