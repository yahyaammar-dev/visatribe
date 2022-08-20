const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  accountActive: {
    type: String,
    default: false
  },
  uniqueToken: {
    type: String,
    required: true
  }
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
module.exports = mongoose.model('User', userSchema);
