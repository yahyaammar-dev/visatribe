if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
const localStrategy = require('passport-local');
const MongoStore = require('connect-mongo');
const exp = require('constants');

const expressError = require('./utils/expressError');
const userRouter = require('./routes/user');
const User = require('./models/user');

const dbUrl = process.env.DB_CONNECT;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const secret = process.env.SESSION_SECRET || 'thisshouldbeabettersecret';

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret,
  },
});

const sessionConfig = {
  store,
  name: 'userSession',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    User.authenticate()
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use('/api/user', userRouter);

app.all('*', (req, res, next) => {
  next(new expressError('Page not found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = 'Something went wrong';
  }
  res.status(statusCode).send(err.stack);
});

app.listen(5000, () => {
  console.log('Listening on port 5000!');
});
