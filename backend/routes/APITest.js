const express = require('express');
const router = express.Router();

router.get('/say/:message', async (req, res) => {
    const { message } = req.params;
    console.log(`Received request for message: ${message}`);
    res.status(200).json({ message: `Hello, ${message}!` });
})

router.post('/say/:message', async (req, res) => {
    const message = req.params.message;
    console.log(`Received POST request for message: ${message}`);
    res.status(201).json({ message: `Hello, ${message}!` });
})

module.exports = router;