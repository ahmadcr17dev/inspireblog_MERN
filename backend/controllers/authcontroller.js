const usermodel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await usermodel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "Already Registered", success: false });
        }
        const newuser = new usermodel({
            username,
            email,
            password,
        });
        newuser.password = await bcrypt.hash(password, 10);
        await newuser.save();
        return res.status(201).json({ message: "Registration Successfull", success: true });
    } catch (err) {
        return res.status(500).json({ message: "Server Error", success: false, err });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user_login = await usermodel.findOne({ email });
        if (!user_login) {
            return res.status(400).json({ message: "User not found", success: false });
        }
        const checkpassword = await bcrypt.compare(password, user_login.password);
        if (!checkpassword) {
            return res.status(400).json({ message: "Password is not correct", success: false })
        }
        const jwttoken = jwt.sign(
            {
                email: user_login.email,
                id: user_login.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '3h',
            },
        )
        return res.status(200).json({ message: "Login Success", success: true, jwttoken, email: user_login.email })
    } catch (err) {
        console.log("server error: ", err);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}

module.exports = { register, login }