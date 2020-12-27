const nodemailer = require('nodemailer');
const email = {
  "host": "",
  "port": "",
  "secure": "",
  "auth": {
    "user": "",
    "pass": ""
  }
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "dustdawn21@naver.com",
  to: "azimut@gmail.com",
  subject: "test nodemailer",
  text: "test node...."
}

send(email_data)