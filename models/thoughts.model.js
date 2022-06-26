const { Schema, model } = require('mongoose');

// Reactions schema
const reactionsSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: { type: String, ref: 'User' },
  },
  {
    id: true,
    timestamps: true,
  },
);

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280
    },
    username: {
      type: String,
      ref: 'user'
    },
    reactions: [reactionsSchema],
  },
  {
    id: true,
    timestamps: true,
  },
);

thoughtsSchema.methods.formatDate = () => {
  return this.createdAt.toLocaleDateString();
};

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;