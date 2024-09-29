const express = require('express');
const db = require('./models');
const path = require('path');
const cors = require('cors');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const port = process.env.PORT || 8001
const app = express();

app.use(express.json());
app.use(cors());

// Routes
const APITestRouter = require('./routes/APITest');
app.use('/apiTest/', APITestRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.clear();
        console.log(`Server is running on port ${port}`);
        console.log('Press Ctrl + C to stop the server');
        console.log(`${process.env.BASE_URL}:${port}`);
        console.log(`Last reloaded at ${new Date()}`);
    });
})