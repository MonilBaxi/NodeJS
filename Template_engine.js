const express=require('express');
const app=express();
app.set("view engine","hbs"); // set view engine as hbs(Handlebars.js) other options(pug,ejs)
app.get('/',(req,res)=>{
    // console.log("Welcome bro!");
    res.render("index"); // directly fetch from view and render using res.render()
});
app.listen(5000,()=>{
    console.log("Successfully Listened at 5000.");
});