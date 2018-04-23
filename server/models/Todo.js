const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// example of creating new Todo and saving
// const newTodo = new Todo({
//     text: 'cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Save success');
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save');
// });

// const getTurtle = new Todo({
//     text: 'Get tutrlte from field',
//     completed: false,
//     completedAt: Date.now()
// });

// getTurtle.save().then((doc) => {
//     console.log(doc)
// }, (err) => {
//     throw err;
// });

module.exports = {Todo};