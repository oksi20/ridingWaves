const { Router } = require('express');
const { rentalInfo, createReservation, saveReservation } = require('../controller/surfboardController');
const { sessionChecker } = require('../middleware/auth');

const router = Router();

router.route('/')
  .get(rentalInfo);

router.route('/reservation')
  .get(createReservation)
  .post(saveReservation);
module.exports = router;
