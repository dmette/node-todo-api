const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'first todo'
}, {
  text: 'second todo'
}];


beforeEach((done) => {
  Todo.remove({}).then(() => {
Todo.insertMany(todos);
}).then(() => done());

});

describe('POST /todos', () => {
  it('sould create new todo', (done) => {
    var text = 'test todo';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) =>{
      expect(res.body.text).toBe(text);
    })
    .end((err, res) =>{
      if (err) {
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(3);
        expect(todos[2].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });
  it('should not create on bad info', (done) =>{
    //var text = 'test todo';
    request(app)
    .post('/todos')
    .send('  ')
    .expect(400)
    .end((err, res) =>{
      if (err) {
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);

        done();
      }).catch((e) => done(e));
    });
  });
});

describe('Get /TODOS', () => {
  it('should get all', (done) =>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  });
});
