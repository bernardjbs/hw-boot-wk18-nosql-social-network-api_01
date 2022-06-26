const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./thoughts.model');

// Schema to create Users model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 280,
    },
    email: {
      type: mongoose.SchemaType.email,
      unique: true,
      required: true,
    },
    thoughts: [thoughtsSchema],
    friends: [ this ],
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// Virtual property to get the number of friends for a user
usersSchema.virtual('friendCount').get(() => {
  return this.friends.count;
})

const User = model('user', usersSchema);

module.exports = User;