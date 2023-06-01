const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    //REGEX
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

