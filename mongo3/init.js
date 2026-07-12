// this file is created for sample data entery in DB

const mongoose = require('mongoose');
const chat = require("./models/chat.js");

main()
    .then(()=> {
        console.log("connection sucessful")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats= [
    {
        from: "adi",
        to: "arxchit",
        msg: "I'm best",
        Created_at: new Date()
    },
    {
        from: "arxchit",
        to: "yash",
        msg: "send me syllabus",
        Created_at: new Date()
    },
    {
        from: "jay",
        to: "arxchit",
        msg: "do frontend part of our project",
        Created_at: new Date()
    },
    {
        from: "arxchit",
        to: "paalak",
        msg: "hi paalak",
        Created_at: new Date()
    },
    {
        from: "rupesh",
        to: "arxchit",
        msg: "where r u",
        Created_at: new Date()
    },
];

chat.insertMany(allChats);