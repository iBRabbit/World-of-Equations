const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Users } = require('../models');

router.get('/', async (req, res) => {
    data = await Users.findAll();
    res.status(200).json(data);
});

router.post('/', async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    console.log("Masuk user")

    const isEmailExists = await Users.findOne({ where: { email } });
    if (isEmailExists) {
        return res.status(400).json({
            message: "Email already exists",
        });
    }

    if (password.length < 6 || password.length > 20) {
        return res.status(400).json({
            message: "Password must be between 6 to 20 characters",
        });
    }

    if (password !== confirmPassword)
        return res.status(400).json({
            message: "Confirm Password do not match",
        });

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    await Users.create({
        password: hashPassword,
        email:email
    });

    res.status(200).json({
        message: "Anda berhasil mendaftarkan akun anda.",
    });
});

module.exports = router;

// router.post('/')