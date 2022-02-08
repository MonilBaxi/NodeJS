const file=require('fs');
const stream=file.createReadStream("monilb.json","utf-8");
stream.on('data',(data)=>{
    console.log(JSON.parse(data));
});
stream.on('end',()=>{
    console.log("End of Data :) :)");
});