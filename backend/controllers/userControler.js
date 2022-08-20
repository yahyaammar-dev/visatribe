const User = require('../models/user');
const passport = require('passport');
const expressError = require('../utils/expressError');

module.exports.createNewUser = async (req, res, next) => {
  const { email, firstName, lastName, password } = req.body;

  let uniqueToken = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i <= 128; i++) {
    uniqueToken += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  const user = new User({ email, firstName, lastName, uniqueToken });
  //   const link = `http://localhost:5000/user/accountverify?uniqueToken=${uniqueToken}`;
  //   const mailOption = {
  //     from: 'ahmad@geekinate.com',
  //     to: email,
  //     subject: 'Please confirm your email',
  //     html: '<a href=' + link + '>Click here to verify email.</a>'
  //   };
  //   try {
  //     const messageInfo = await smtpTransporter.sendMail(mailOption);
  //     console.log('Message sent', messageInfo.messageId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  try {
    const registerUser = await User.register(user, password);
    req.login(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      res.send(req.user);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.loginUser = (req, res) => {
  res.send('Welcome Back');
  // console.log('Welcome Back', req.user.email);
};

module.exports.logoutUser = (req, res) => {
  req.logout();
  res.send('User Logged out');
};
