const rentalInfo = (req, res) => {
  res.render('surfboard', { surfboard: true });
};
const createReservation = (req, res) => {
  res.render('reservation', { layout: false, reservation: true });
};
const saveReservation = (req, res) => {
  const {
    name, lastname, pickupdate, pickuptime, hiid, cc, amounthours,
  } = req.body;
  if (name && lastname && pickupdate && pickuptime && hiid && amounthours && cc) {
    res.send(200);
  }
};
module.exports = {
  rentalInfo,
  createReservation,
  saveReservation,
};
