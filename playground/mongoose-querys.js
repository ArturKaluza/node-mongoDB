const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo.js');
const {User} = require('../server/models/user');

const id = '5ae1664cdc738e14a0135c1d';

// check id before start query 
if (!ObjectId.isValid(id)) {
    console.log('Id is not valid');
}


// return array of object
Todo.find({
    _id: id
}).then(todos => {
    console.log('Todos: ', todos);
});

//return object
Todo.findOne({
    _id: id
}).then(todo => {
    console.log('Todo: ', todo);
});


Todo.findById(id).then(todo => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo find by id: ', todo);
}).catch(e => console.log(e));

const userId = '5ade0a3737bb8520cc29861e';

User.findById(userId).then(user => {
    if (!user) {
        return console.log('Invalid  user id');
    }
    
    console.log('User: ', user);
}).catch(e => console.log(e));