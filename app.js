require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./api/controllers/mailController'); 

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', sendEmail);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
