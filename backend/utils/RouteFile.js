const router = require('express').Router();
const adminRoute = require('../AdminRegistration/AdminRoute');
const todoRoute = require('../TodoCurd/TodoRoute');
const auth = require('./authentication');

//for registration and login
router.use('/registration',adminRoute);

//for todo curd operation
router.use('/todo',todoRoute)

module.exports = router;

