const expressError = require('./utils/expressError');
const catchAsync = require('./utils/catchAsync');
const User = require('./models/user');

module.exports.checkAccountVerification = async (req, res, next) => {
  const { email } = req.body;
  const userFound = await User.findOne({ email });
  if (userFound) {
    if (userFound.accountActive === true) {
      next();
    } else {
      // console.log('email not verified');
      next(new expressError('Email not verified', 404));
    }
  } else {
    next(new expressError('Invalid Credintails', 404));
  }
};
