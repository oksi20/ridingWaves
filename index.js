/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const hbs = require('hbs');
const session = require('express-session');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { dbConnect } = require('./src/db/config');
const MongoStore = require('connect-mongo');

const mongoUrl = process.env.DB_URL;

const { cookiesCleaner } = require('./src/middleware/auth');

const errorMiddleware = require('./src/middleware/error');
const userRouter = require('./src/routers/userRouter');
const surfboardRouter = require('./src/routers/surfboardRouter');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const options = {
  key: 'user_sid',
  secret: 'fsjdhfsdg89dsghg',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 10000 * 60 * 10,
  },
  store: MongoStore.create({ mongoUrl }),
};

app.use(session(options));
app.use(cookiesCleaner);
app.use((req, res, next) => {
  res.locals.userName = req.session.user?.username;
  next();
});
app.use('/', userRouter);
app.get('/weather', (req, res) => {
  res.render('weather', { weather: true });
});
app.use('/surfboard', surfboardRouter);
// errorMiddleware();

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log('Сервер запущен. Порт:', port);
  dbConnect();
});
// DB_URL=mongodb://localhost:27017/ridingWaves
