const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://artur:123test123@ds159489.mlab.com:59489/todos');

module.exports = {mongoose};
