const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    email: {
      type: String,
      required: [true, 'name field is required'],
    },
  },
  { timestamps: true },
);

module.exports = model('users', userSchema);
