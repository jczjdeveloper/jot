//Specifies User Attributes and methods for manipulations
//Will be exported to Routes for CRUD manipulation
//Will be exported to App.js for app to receive user details

import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true},
  password: String,
  tasklist: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
}, { timestamps: true });

/**
 * Password hash middleware.
 */
userSchema.pre('save', function(next) {
  const user = this;
  console.log(user);
  /* Skip salting and hashing if not user signup */
  if (!user.isModified('password')) { return next(); }
  /* Salting and hashing on initial save */
  bcrypt.genSalt(10, (err, salt) => {
    console.log("salting..");
    // console.log(salt);
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      console.log("hashing..");
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

/**
 * Helper method for finding user via email.
 */
userSchema.methods.getUserByEmail = function(email, callback){
  const query = {email: email};
  User.findOne(query, callback);
}

/**
 * Helper method for finding user via userId.
 */
userSchema.methods.getUserById = function(id, callback){
  User.findById(id, callback);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
