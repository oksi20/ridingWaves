const Rent = require('../models/rent.model');

const rentalInfo = (req, res) => {
  res.render('surfboard', { surfboard: true });
};
const createReservation = (req, res) => {
  res.render('reservation', { layout: false, reservation: true });
};
const saveReservation = async (req, res) => {
  const {
    name, lastname, pickupdate, pickuptime, hiid, cc, amounthours, boardnumber,
  } = req.body;
  if (name && lastname && pickupdate && pickuptime && hiid && amounthours && cc && boardnumber) {
    const newRent = await Rent.create(req.body);
    console.log(newRent);
    res.send(200);
  }
};
module.exports = {
  rentalInfo,
  createReservation,
  saveReservation,
};
