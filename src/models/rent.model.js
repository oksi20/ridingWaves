const { Schema, model } = require('mongoose');

const rentSchema = Schema({
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
});

module.exports = model('Rent', rentSchema);
