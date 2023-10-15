const User = require('../model/user');
const jwt = require('jsonwebtoken');

const loginService = (email) => User.findOne({email});

const generateToken = (user, secret) => jwt.sign({user}, secret);

module.exports = {
    loginService, 
    generateToken};