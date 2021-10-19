const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

//schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'user must have a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'user must have a last name'],
  },
  email: {
    type: String,
    required: [true, 'user must have a email'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'please provide valid email address!'],
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 4,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm password'],
    validate: {
      //this will only work on create and save
      validator: function (el) {
        return el === this.password;
      },
      message: 'password are not same',
    },
  },
  profileImage: {
    type: String,
    message: 'user must have a profile image',
    default: 'default profile url',
  },
  role: {
    type: String,
    lowercase: true,
    enum: {
      values: ['admin', 'user'],
      message: 'role must be user and admin only!',
    },
    default: 'user',
  },
});

userSchema.pre('save', async function (next) {
  //only runs if password modified
  if (!this.isModified('password')) return next();

  //hash pass with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //deleting passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  condidatePassword,
  userPassword
) {
  return await bcrypt.compare(condidatePassword, userPassword);
};

//model
const User = mongoose.model('User', userSchema);

module.exports = User;
