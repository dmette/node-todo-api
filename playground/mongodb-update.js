// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to server');



db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5ae676167c6c9f88f9b7ccd6')
},{
$inc: {age: 10}
},{
    returnOriginal:false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
