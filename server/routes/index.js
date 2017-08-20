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
        user: 'cafefreebird@gmail.com',
        pass: 'chirag@123'
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: 'cafefreebird@gmail.com', // sender address
      to: bookingDetail.email, // list of receivers
      bcc: 'cafefreebird@gmail.com',
      subject: 'Booking Confirmed - Cafe FreeBird', // Subject line
      text: 'Booking for customer: '+bookingDetail.name+' for '+bookingDetail.guest+' guests at Cafe FreeBird - '+bookingDetail.area+ ' has been confirmed . \nWe will contact you at: '+ bookingDetail.mob + ' in case of any updates. \nFor any furter details contact us at - 9871900222 or mail us at cafefreebird@gmail.com \nRegards\nTeam Cafe FreeBird', // plain text body
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
