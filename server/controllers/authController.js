const bcrypt = require('bcrypt');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const Role = require('../model/Role');
const User = require('../model/User');
const transporter = require('../utils/emailTransporter');
const UserOTP = require('../models/UserOTP');

const authController = {
    signup: async (req, res) => {
        try {
            const {
                username,
                email,
                password,
            } = req.body

            if (!password || password.length < 6) {
                return res.json({ Error: "Password must be at least 6 characters long" });
            }

            const checkUser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email }
                ]
            });

            if (checkUser) {
                return res.json({ Error: "User already exists in the system" })
            }

            const getroleforsignup = await Role.findOne({ name: 'intern' })

            if (!getroleforsignup) {
                return res.json({ Error: "Default role 'intern' not found in system" });
            }

            const hashpass = await bcrypt.hash(password, 10)

            const newUser = new User({
                username: username,
                email: email,
                password: hashpass,
                roles: [getroleforsignup._id],
            })

            const resultNewUser = await newUser.save()

            if (resultNewUser) {
                const generateRandomCode = (length = 10) => {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}';
                    let code = '';
                    for (let i = 0; i < length; i++) {
                        code += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    return code;
                };

                const verificationCode = generateRandomCode();

                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: 'Pdn Account Verification Code',
                    html: `
                            <p>Dear ${username},</p>
                            <p>Thank you for registering at the University of Peradeniya Hostel Management System.</p>
                            <p>Your Email verification code is:</p>
                            <h2 style="color:#7c340c;">${verificationCode}</h2>
                            <p>Please wait until your account is activated by an administrator.</p>
                            <br>
                            <p style="color:gray;">Do not share this code with anyone.</p>
                        `,
                };


                const hashotp = await bcrypt.hash(verificationCode, 10)

                const storeOTP = new UserOTP({
                    email: email,
                    otp: hashotp
                })

                const resultStoreOTP = await storeOTP.save()

                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        return res.json({ Error: "Registration succeeded, but failed to send verification email." });
                    } else {
                        const tokenemailVerify = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '5min' });

                        return res.json({
                            Status: "Success",
                            verifyToken: tokenemailVerify,
                            Message: "Registration successful. Verification code sent to your email. Verify Email Please wait and wait for activation."
                        });
                    }
                });
            }

            else {
                return res.json({ Error: "Internal Server Error while Creating User" })
            }
        }
        catch (err) {
            console.log(err)
        }
    },
};

module.exports = authController;