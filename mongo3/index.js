const express= require("express");
const app=express();
const mongoose = require('mongoose');
const path=require("path");
const chat = require("./models/chat.js");
const { time } = require("console");
const methodOverride = require('method-override')


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


main()
    .then(()=> {
        console.log("connection sucessful")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
/*
let chat1= new chat({
    from: "arxchit",
    to: "devanshu",
    msg: "Hay buddy",
    Created_at: new Date()
});
chat1.save().then((res) => { console.log(res)});
*/


// index route

app.get("/chats", async(req, res) => {
    let chats = await chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});


app.get("/", (req,res) => {
    res.send("App is working");
});

// new chat

app.get("/chats/new", (req,res) => {
    res.render("new.ejs"); 
});

// create route
app.post("/chats", (req,res) => {
    let{from,msg,to} = req.body;
    let newChat= new chat({
        from: from,
        to: to,
        msg: msg,
        Created_at: new Date()
    });
    newChat.save().then(res => {console.log("chat was saved")}).catch(err => {console.log(err)});
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chats = await chat.findById(id);
    res.render("edit.ejs", {chats});
});

// update route
app.put("/chats/:id", async (req, res ) => {
    let {id} = req.params;
    let {newMsg} = req.body;
    await chat.findByIdAndUpdate(id, {msg:newMsg});
    res.redirect("/chats");
});

// delete route 
app.delete("/chats/:id", async (req,res) => {
    let {id} = req.params;
    await chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(8080, () => {
    console.log("App is listining port: 8080")
})