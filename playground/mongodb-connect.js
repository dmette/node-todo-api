// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err,result) => {
  //   if (err) {
  //     return console.log('unable to insert', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2))
  // });
  //
  // db.collection('Users').insertOne({
  //   name: 'Dave',
  //   age: 25,
  //   location:'Cincinnati'
  // }, (err,result) => {
  //   if (err) {
  //     return console.log('unable to insert', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp())
  // });

  db.close();
});
