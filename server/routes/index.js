var express = require('express');
var router = express.Router();
var changeContent = require('./userData');
const nodemailer = require('nodemailer');

module.exports = function () {

  router.use('/fetchWebData', changeContent);

  router.post('/book', function (req,res) {
    var bookingDetail = req.body;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
        user: 'chirag94.ck@gmail.com',
        pass: 'Chirag2016'
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: 'chirag94.ck@gmail.com', // sender address
      to: 'chirag94.msit@gmail.com', // list of receivers
      subject: 'Booking Confirmed', // Subject line
      text: 'Booking for'+bookingDetail.name+'has been confirmed for'+bookingDetail.guest+'at Free BirdCafe - '+bookingDetail.area+' .For any furter details contact Himanshu Verma - 9811096215 or mail us at chirag94.ck@gmial.com \nRegards\nTeam Cafe FreeBird', // plain text body
      // html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.json({
				success: "done",
				message: "done",
			});
    });
  })

  return router;
};
