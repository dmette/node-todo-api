var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newUser = new User({
//   email: '     steve@gmail.com    '
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved doc:', doc);
// }, (err) => {
//
// console.log('Unable to save', err);
// });

module.exports = {User};
