const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Users } = require('../models');
const { validateToken } = require('../middlewares/AuthMiddleware');

const {upload, handleUpload} = require('../utils/cloudinary');
const { getUserIdFromToken } = require('../utils/jwtUtils');

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
        email:email,
        is_admin : false,
    });

    res.status(200).json({
        message: "Anda berhasil mendaftarkan akun anda.",
    });
});


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
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const user = getUserIdFromToken(req.headers["token"]);

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

router.post('/profile', validateToken, async (req, res) => {
    const userID = getUserIdFromToken(req.headers["token"]);
    try {
        const user = await Users.findByPk(userID);
        res.status(200).json({
            user: user,
        })

    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

router.put('/profile', validateToken, async (req, res) => {
    const userID = getUserIdFromToken(req.headers["token"]);

    const data = req.body;
    console.log(`User ID: ${userID}`);
    console.log(`Data ${JSON.stringify(data)}`);

    // save
    try {
        await Users.update({
            name: data.name,
            email: data.email,
            phone_number: data.phoneNumber,
        }, { where: { id: userID } });
        res.status(200).json({
            message: "Profile updated successfully",
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }

});

router.post('/upload-profile-picture', validateToken, upload.single("file"), async (req, res) => {
    const userID = getUserIdFromToken(req.headers["token"]);

    try {
      if (!req.file) 
        return res.status(400).send({ message: "No file uploaded." });

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

        const cldRes = await handleUpload(dataURI, "users");
        await Users.update(
            {
                profile_picture: cldRes.secure_url, // Store only the URL
            },
            {
                where: {
                    id: userID
                }
            }
        );
        res.json({
            message: "Profile picture updated successfully",
            profile_picture: cldRes.secure_url,
        });
        
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }   
});

module.exports = router;