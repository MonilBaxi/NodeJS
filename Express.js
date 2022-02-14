const express=require('express');
const app = express();
const path = require('path');
const data = path.join(__dirname,"./monil.txt");
const jsonData=path.join(__dirname,"./monilb.json");
const port = 5000;
app.get('/',(req,res)=>{
    res.sendFile(data);
    
})
app.get("/json/:name",(req,res)=>{
    res.sendFile(jsonData);
    //res.send(req.params.name);
})
app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})