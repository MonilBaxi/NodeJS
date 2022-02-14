//MiddleWare
//app.use()
const express=require('express');
const app=express();
const path=require("path");
const baxi=path.join(__dirname,"./index.html");
app.use(express.static(baxi));
app.get("/",(req,res)=>{
    res.write("<h1>Hello World!</h1>");
});
app.listen(5000,()=>{
    console.log("Success");
})
