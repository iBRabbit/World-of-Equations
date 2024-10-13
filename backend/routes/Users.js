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

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await Users.findOne({where: {email}});
        if (!user) {
            return res.status(404).json({
                message: "Your credentials were not valid to any users.",
            });
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Your credentials were not valid to any users.",
            });
        };

        const payload = {
            id: user.id,
            email: user.email,
            loginTime: new Date()
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: 3600,
        });
        
        res.json({
            success: true,
            token: token,
            message: 'User authenticated'
        });

    } catch (e) {
        console.error(e.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }

});

router.get('/check', async (req, res) => {
    try {
        const token = req.header('token');
        console.log("Check  " + token)
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Users.findByPk(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        res.json({
            success: true,
            message: 'User is authenticated',
            status: 200
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
