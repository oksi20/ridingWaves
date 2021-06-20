const { Router } = require('express');
const {
  userSignupRender, userSignup, userLoginRender, userLogin, userLogout, showProfile, saveProfRes,
} = require('../controller/userController');

const multer=require('multer');
const {storage}=require('../cloudinary');
const upload=multer({storage})
const { sessionChecker } = require('../middleware/auth');

const router = Router();

router.route('/')
  .get((req, res) => {
    res.render('main', { main: true });
  });

router.route('/signup')
  .get(userSignupRender)
  .post(upload.single('image'), userSignup);

router.route('/login')
  .get(userLoginRender)
  .post(userLogin);

router.route('/logout')
  .get(userLogout);

router.route('/profile')
  .get(showProfile)
  .post(saveProfRes)

module.exports = router;
