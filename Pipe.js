//pipe
const http=require('http');
const server=http.createServer();
const file=require('fs');
const stream=file.createReadStream("monilb.json","utf-8");
server.on('request',(req,res)=>{
    stream.pipe(res);
});

server.on('end',(req,res)=>{
    res.end();
});

server.listen(7000,"127.0.0.1",()=>{
    console.log("Server Listening Successfully..........");
});