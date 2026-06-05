const express = require("express");
const app=express();
const path=require("path");

const port=8080;

app.set("view engine", "ejs");
// set fixed directory for views..
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Listening the port: ${port}`);
});

app.get("/rolldice", (req, res) => {
    let diceVal= Math.ceil(Math.random()*6);
    // res.render("rollDice.ejs", {num: diceVal})
    // insted of previous one we can use-->
    res.render("rollDice.ejs", {diceVal});

})


// insta page..
// app.get("/ig/:username", (req, res) => {
//     let {username}= req.params;
//     let followers =["Archit", "Aditya", "Arpit", "Jay", "Yash"];
//     console.log(username);
//     res.render("insta.ejs",{username , followers});
// });

// updated insta page--->
app.get("/ig/:username", (req, res) => {
    let {username}= req.params;
    const instaData= require("./data.json");
    res.render("instagram.ejs",{data: instaData[username]}); 
});