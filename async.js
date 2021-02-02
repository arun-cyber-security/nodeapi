// const fir = async () => {};
// const getData = async () => {
//   var y = await setTimeout(()=>{fetch("https://jsonplaceholder.typicode.com/todos/1")},5000);
//   console.log(y);
// };

// getData()
// console.log(1);

// console.log(2);

// async function av() {
//  let s;
//   setTimeout(()=>{ s = 5 + 5}, 1000);
 
//   console.log("before");
//  var  a = s;
//   console.log(a)
//   console.log("after");
// }
// av();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aruncyberagency1978@gmail.com',
    pass: '7550384817@Av'
  }
});

var mailOptions = {
  from: 'aruncyberagency1978@gmail.com',
  to: 'agencyarun5@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
 });
// async function as(){
//   setTimeout(()=>{
//     var d =  5+5;
//   },5000)
//   return d;
// }
// async function av(){
//   let sd = await as();
//   console.log(sd)
// }
// async function  fet () {
//  var fet = await fetch("https://jsonplaceholder.typicode.com/photos");
 
//     var data =  fet.json() ;
//     console.log(data[0].url)

  
// }

// fet()