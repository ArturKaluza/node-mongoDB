const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{Value} is not a valid email`
    }},
    password: {
      type: String,
      require: true,
      minlength: 6
    },
    tokens: [{
      access: {
        type: String,
        require: true
      },
      token: {
        type: String,
        require: true
      }
    }]
})

UserSchema.methods.toJSON = function() {
  const user = this;
  const userObj = user.toObject();

  return _.pick(userObj, ['_id', 'email']);
};

// adding an instance methods
UserSchema.methods.generateAuthToken = function() {
  const user = this;

  const access = 'auth';
  const token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens = user.tokens.concat([{ access, token }]);
  
  return user.save().then(() => {
    return token;
  })
}

UserSchema.statics.findByToken = function(token) {
  const User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    // return new Promise((resolve, reject) => {
    //   reject();
    // })
    return Promise.reject();
  }

  //return Promise
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth' 
  })
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};
