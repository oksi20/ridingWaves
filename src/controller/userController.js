const bcrypt = require('bcrypt');
const User = require('../models/user.model');
require('dotenv').config();

const userLoginRender = (req, res) => res.render('login');
const userSignupRender = (req, res) => res.render('signup');

const userSignup = async (req, res) => {
  const { email, password, username } = req.body;
  if (email && password && username) {
    const newUser = await User.create({
      email,
      password: await bcrypt.hash(password, Number(process.env.SALT_ROUND)),
      username,
    });
    req.session.user = {
      id: newUser._id,
      username: newUser.username,
    };
    return res.redirect('/');
  }
  return res.status(418).redirect('/signup');
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const currentUser = await User.findOne({ email });
    if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
      req.session.user = {
        id: currentUser._id,
        username: currentUser.username,
      };
      return res.redirect('/');
    }
  }
  return res.status(418).redirect('/login');
};
const userLogout = async (req, res) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie('user_sid');
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  } else {
    res.redirect('/login');
  }
};

module.exports = {
  userLoginRender,
  userSignupRender,
  userSignup,
  userLogin,
  userLogout,
};
