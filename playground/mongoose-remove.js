const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo.js');
const {User} = require('../server/models/user');

const id = '5ae1664cdc738e14a0135c1d';

// Remove many item
/*
Todo.remove({}).then((result) => {
    console.log(result);
});
*/

// remove one item, return item

Todo.findOneAndRemove({ text: "Second test todo"}).then((item) => {
    console.log(item);
});


// remove item by id
/*
Todo.findByIdAndRemove("5ae17ddf8410e32318ec4377").then((todo) => {
    console.log(todo);
});
*/