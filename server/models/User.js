const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        minlength: 1,
        type: String
    }
});

// example of creating and saving new User
// const John = new User({
//     email: 'john23@test.com'
// });

// John.save().then((doc) => {
//     console.log('Save success');
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save', e);
// });

module.exports = {User};