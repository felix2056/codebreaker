const express = require('express');
const smtp = require('nodemailer');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var transporter = smtp.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "felixdaniel2056@gmail.com",
        pass: "gocpudfettnrmmeq",
    },
});

app.post('/sendEmail', (req, res) => {
    var html = ""
    html += "<p>You received a message from: </p>";
    html += "<p><strong>Name:</strong> " + req.body.name + "</p>";
    html += "<p><strong>Email:</strong> " + req.body.email + "</p>";
    html += "<p><strong>Message:</strong> " + req.body.message + "</p>";

    const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: 'felixdaniel2056@gmail.com',
        subject: "New Portfolio Message From " + req.body.name,
        html: html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});