const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  image: {
    url: String,
    filename: String,
  },
  name: {
    type: String,
    required: true,
    min: 3,
  },
  username: {
    type: String,
    required: true,
    min: 3,
    unique: true,
  },
  lastname: {
    type: String,
    required: true,
    min: 2,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  rent: [{ type: Schema.Types.ObjectId, ref: 'Rent' }],
});

module.exports = model('User', userSchema);
