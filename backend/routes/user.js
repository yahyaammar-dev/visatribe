const express = require('express');
const passport = require('passport');
const router = express.Router({ mergeParams: true });

const userController = require('../controllers/userControler');
const catchAsync = require('../utils/catchAsync');
const { checkAccountVerification } = require('../middleware');

router.get('/logout', userController.logoutUser);
router.post('/signup', catchAsync(userController.createNewUser));
router.post('/signin', checkAccountVerification, passport.authenticate('local'), userController.loginUser);

module.exports = router;
