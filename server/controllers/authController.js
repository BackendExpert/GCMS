const bcrypt = require('bcrypt');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const Role = require('../model/Role');
const User = require('../model/User');
const transporter = require('../utils/emailTransporter');
const UserOTP = require('../models/UserOTP');

const authController = {
    signup: async(req, res) => {
        try{
            const {
                username,
                email,
                password
            } = req.body



        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;