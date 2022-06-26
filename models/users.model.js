const { Schema, model } = require('mongoose');
const { validateEmail } = require('../utils/helpers');
const Thought = require('./thoughts.model');

// Schema to create Users model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, "invalid email"]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, 
        ref: Thought,  
      }
    ],
    friends: [ 
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
     ],
  },
  {
    toJSON: {
      virtuals: true,
    }, 
    id: true,
  }
);

// Virtual property to get the number of friends for a user
usersSchema.virtual('friendCount').get(() => {
  return this.friends.count;
})

const User = model('user', usersSchema);

module.exports = User;