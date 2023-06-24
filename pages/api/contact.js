export default function (req, res) {
  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: '',
      pass: process.env.NEXT_PUBLIC_SECRET_PASSWORD
    },
    secure: true
  })
  const mailData = {
    from: '',
    to: '',
    subject: `Message from ${req.body.name} @ ${req.body.email}`,
    text: req.body.message
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log('err:', err)
    else 
      console.log('info', info)
  })
  res.send('success')
}