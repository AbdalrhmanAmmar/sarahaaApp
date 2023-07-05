const nodemailer = require("nodemailer");

module.exports.sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'Abdammar2023@gmail.com',
      pass: 'uosajgqskctxkldw'
    }
  });

  try {
    const info = await transporter.sendMail({
      from: 'Facebook@meta.com',
      to: "abdalrhmanammarofficial@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};