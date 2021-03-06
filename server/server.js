require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req,res) =>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
  res.status(400).send(err);

});
});

app.get('/todos', (req,res) =>{
  Todo.find().then((todos)=>{
    res.send({todos})
  }, (e) => {
      res.status(400).send(e);
  });
});

app.get('/todos/:id', (req,res) =>{
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
      res.status(400).send();
  })
});

app.delete('/todos/:id', (req,res) =>{
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
      res.status(400).send();
  })
});

app.post('/users', (req,res) =>{
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((err) => {
  res.status(400).send(err);

})
});

app.get('/users/me', authenticate, (req,res) =>{
    res.send(req.user);
});




app.listen(port, () => {
  console.log(`started on ${port}`);
});

module.exports = {app};
