const { Router } = require('express');
const {
  userSignupRender, userSignup, userLoginRender, userLogin, userLogout,
} = require('../controller/userController');
const { sessionChecker } = require('../middleware/auth');

const router = Router();

router.route('/')
  .get((req, res) => {
    res.render('main', { main: true });
  });

router.route('/signup')
  .get(userSignupRender)
  .post(userSignup);

router.route('/login')
  .get(userLoginRender)
  .post(userLogin);

router.route('/logout')
  .get(userLogout);

module.exports = router;
