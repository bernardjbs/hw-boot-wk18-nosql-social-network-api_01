const { Schema, model } = require('mongoose');

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
      type: mongoose.SchemaType.email,
      unique: true,
      required: true,
    },
    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Thought',  
      }
    ],
    friends: [ this ],
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