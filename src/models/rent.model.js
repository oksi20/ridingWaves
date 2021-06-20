const { Schema, model } = require('mongoose');

const rentSchema = Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  pickupdate: {
    type: Date,
  },
  pickuptime: {
    type: String,
  },
  hiid: { type: String },
  cc: { type: Number },
  amounthours: {
    type: String,
  },
  boardnumber: {
    type: Number,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
},
{ timestamp: true });

module.exports = model('Rent', rentSchema);
