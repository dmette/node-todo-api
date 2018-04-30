// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to server');

// db.collection('Todos').deleteMany({text:'something to do'}).then((result) => {
//   console.log(result)
// });

// db.collection('Todos').deleteOne({text:'lunch'}).then((result) => {
//   console.log(result);
// });

db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
  console.log(result);
});

  // db.close();
});
