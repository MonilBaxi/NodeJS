//Core Modules
//It includes Modules like http, os ,path , url ,fs ,events etc..


//http
const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
    res.end("welcome to Monil's World... :)");
});
server.listen(8000,"127.0.0.1",(err)=>{
    console.log("Server listening Successfully...");
});


//os
const os=require('os');
console.log(os.arch());
console.log(os.freemem());


//path
const path=require('path');
console.log(path.basename(`${__dirname}/Intro.js`));
console.log(path.parse(`${__dirname}/monil.txt`));


//url
const url=require('url');
server.on('request',(req,res)=>{
    if(req.url=='/name'){
        var s = url.parse(req.url.toString(),true);
        console.log(s.pathname);
    }
});


//Synchronous File System
const file=require('fs');
file.writeFileSync("monil.txt","Hello Monil,how are you!");
file.appendFileSync("monil.txt","\nBye.....");
var fileRead=file.readFileSync("monil.txt","UTF-8");
console.log(fileRead);
//file.unlinkSync("monil.txt"); //for deleting file 


//Asynchronous File System
file.writeFile("monilbaxi.txt","Hello Monil Baxi!",(err)=>{
    if(err){console.error(err);}
});
file.appendFile("monilbaxi.txt","\nBye.......:)",(err)=>{
    if(err){console.error(err);}
});
file.readFile("monilbaxi.txt","utf-8",(err,data)=>{
    console.log(data);
});
//Delete file 
// file.unlink("monilbaxi.txt",(err)=>{
//     console.log("File Deleted....");
// });


//Events
const eventEmitter=require('events');
const event=new eventEmitter();
event.on("sayName",()=>{
    console.log("My name is Monil baxi.:):)");
});
event.on("sayName",()=>{
    console.log("My name is Monil BAXI.:):)");
});
event.on("sayName",()=>{
    console.log("My name is MONIL baxi.:):)");
});
event.on("sayName1",(name,surname)=>{
    console.log(`My name is ${name} ${surname}.`);
})
event.emit("sayName");
event.emit("sayName1","Monil","Baxi");
