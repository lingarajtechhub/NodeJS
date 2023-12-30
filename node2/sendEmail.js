var nodemailer = require('nodemailer');
require('dotenv').config(); //import the dotenv config here

console.log('EMAIL_USER:', process.env.EMAIL_USER); //check here
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD); 

var transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL/TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

var mailOpetions = {
    from: 'workteam862@gmail.com',
    to:'lingarajtechhub@gmail.com',
    subject:'Sending mail using node.JS',
    text: 'This is a Test Mail.'
};

transport.sendMail(mailOpetions, function(err, info){
    if(err){
        console.log(err);
    }
    else{
        console.log('Email Sent: '+info.response);
    }
});