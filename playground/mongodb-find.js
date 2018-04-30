// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to server');

//   db.collection('Todos').find({
//     _id:new ObjectID('5ae63caaea6e4a4eeccb8fc0')
//   }).toArray().then((docs) =>{
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) =>{
//     console.log('Unable', err);
//   }
// );

// db.collection('Users').find({
// }).count().then((count) =>{
//   console.log(`${count}`);
// }, (err) =>{
//   console.log('Unable', err);
// }
// );

db.collection('Users').find({name: 'dave'
}).toArray().then((docs) =>{
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) =>{
  console.log('Unable', err);
}
);

  // db.close();
});
