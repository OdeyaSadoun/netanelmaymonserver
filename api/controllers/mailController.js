require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FOR_SEND,
            pass: process.env.APP_PASSWORD, 
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_FOR_SEND,
        to: req.body.email,
        subject: req.body.subject,
        html: req.body.text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent');
        }
    });
};

module.exports = sendEmail;
