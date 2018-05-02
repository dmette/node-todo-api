const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userid = '5ae71c8382cc11956f3aa9f6';

var id = '55ae911cc6bef41ae4b73766e';

// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('todo by ID', todo);
// }).catch(()=> console.log());

if (!ObjectID.isValid(userid)){
  console.log('userID not valid');
}
// User.find({
//   _id: userid
// }).then((users) => {
//   console.log('users', users);
// });
//
// User.findOne({
//   _id: userid
// }).then((user) => {
//   console.log('user', user);
// });

User.findById(userid).then((user) => {
  if (!user) {
    return console.log('userID not found');
  }
  console.log(JSON.stringify(user,undefined, 2));
}).catch(()=> console.log());
