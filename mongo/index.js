const mongoose = require('mongoose');



main()
    .then(()=> {
        console.log("connection sucessful")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user2 = new User({
//     name: "Aditya",
//     Email: "aditya@asd",
//     age: 21
// });
// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age:55},
//     {name: "steve", email: "steve@gmail.com", age:75},
//     {name: "bruce", email: "bruce@gmail.com", age:58},
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

User.find({}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
