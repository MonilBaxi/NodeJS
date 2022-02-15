const express=require('express');
const app=express();
const hbs=require("hbs");
app.set("view engine","hbs"); // set view engine as hbs(Handlebars.js) other options(pug,ejs)
app.set("views","./custom_views/Partials"); //Custom view set up
hbs.registerPartials("./custom_views/Partials");
app.get('/',(req,res)=>{
    // console.log("Welcome bro!");
    res.render("index",{Name:"monil"}); // directly fetch from custom_views folder and render using res.render()
});
// app.get("/about",(req,res)=>{
//     res.render("about");
// });
app.listen(5000,()=>{
    console.log("Successfully Listened at 5000.");
});