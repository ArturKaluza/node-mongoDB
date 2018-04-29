const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'production') {
    mongoose.connect('mongodb://artur:123test123@ds159489.mlab.com:59489/todos');
} else {
    mongoose.connect('mongodb://localhost:27017/TodoApp');
}

module.exports = {mongoose};
