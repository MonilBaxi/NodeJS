const nodemailer=require('nodemailer');
const transport = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    requireTLS : true,
    auth : {
        user : "monil.baxi@gslab.com",
        password : "password_of_owner"
    }

});
const mailData = {
    from : "monil.baxi@gslab.com",
    to : "monil.baxi@gslab.com",
    subject : "Test mail",
    text : "This is test mail,Kindly Ignore it.."

}
transport.sendMail(mailData,(err,data)=>{
    if (err){console.error(err)}
    else{console.log(data.response)}
})