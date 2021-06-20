const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const Rent = require('../models/rent.model');
require('dotenv').config();

const userLoginRender = (req, res) => res.render('login');
const userSignupRender = (req, res) => res.render('signup');

const userSignup = async (req, res) => {
  // const {
  //   name, lastname, email, password, username,
  // } = req.body;
  const surfer=req.body;
  const image=req.file;
  surfer.password = await bcrypt.hash(surfer.password, Number(process.env.SALT_ROUNDS));
  if (image){
    surfer.image={url:image.path, filename:image.filename}
   }
  if (surfer.email && surfer.password && surfer.username && surfer.name && surfer.lastname) {
    const newUser = await User.create(
      // email,
      // password: await bcrypt.hash(password, Number(process.env.SALT_ROUND)),
      // username,
      // name,
      // lastname,
      surfer);
    req.session.user = {
      id: newUser._id,
      username: newUser.username,
    };
    return res.redirect('/profile');
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
      return res.redirect('/profile');
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
const showProfile = async (req, res) => {
  const user = await User.findOne({ _id: req.session.user.id }).populate('rent').lean();
  const rents = user.rent;
  for (let i = 0; i < rents.length; i++) {
    const str = rents[i].pickupdate.toString();
    rents[i].pickupdate = str.slice(0, 16);
    console.log(rents[i].pickupdate);
  //   // console.log(str);
  }
  const profile=user.image?.url;
  res.render('profile', { rents, profile});
};
const saveProfRes = async (req, res) => {
  const {
    pickupdate, pickuptime, boardnumber, hiid, amounthours, cc,
  } = req.body;
  if (pickupdate && pickuptime && boardnumber && hiid && amounthours && cc) {
    const user = await User.findOne({ _id: req.session.user.id });
    const userNewOrder = await Rent.create(req.body);
    await Rent.updateOne({ _id: userNewOrder._id }, { user: user._id });
    await User.findOneAndUpdate({ _id: user._id }, { $push: { rent: userNewOrder._id } });
    res.send(200);
  }
};

module.exports = {
  userLoginRender,
  userSignupRender,
  userSignup,
  userLogin,
  userLogout,
  showProfile,
  saveProfRes,
};
