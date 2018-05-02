var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'address emails'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved doc:', doc);
// }, (err) => {
//
// console.log('Unable to save');
// });
//
// var otherTodo = new Todo({
//   text: '     become a millionaire    ',
//   completed: false,
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//
// console.log('Unable to save');
// });

module.exports = {Todo};
