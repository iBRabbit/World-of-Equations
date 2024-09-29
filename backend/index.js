const express = require('express');
const db = require('./models');
const path = require('path');
const cors = require('cors');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.SERVER_PORT || 8000
const app = express();

app.use(express.json());
app.use(cors());

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.clear();
        console.log(`Server is running on port ${port}`);
        console.log('Press Ctrl + C to stop the server');
        console.log(`http://localhost:${port}`);
        console.log(`Last reloaded at ${new Date()}`);
    });
})