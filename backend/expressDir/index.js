const express= require("express");
const app= express();

// console.log(app);

let port=3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

});

// app.use((req, res) => {
//     console.log("request received! ");
//     // res.send({
//     //     name:"Apple",
//     //     color:"red"
//     // });
//     // res.send("this is a response");
//     res.send("<h1>This is heading response from the server</h1>");
// });

app.get("/", (req , res) => {
    res.send("<h1>This is root path..!</h1>");
});

// app.get("/apple", (req , res) => {
//     res.send("<h1>This is apple path..!</h1>");
// });

// app.get("/banana", (req , res) => {
//     res.send("<h1>This is bananaaaaa path..!</h1>");
// });


//{
// this was a older feature of express..
// this is response to those path which does not exist..
// app.get("/*", (req , res) => {
//     res.send("<h1>This path does not exist..!</h1>");
// });
//}

// use ------> insted...
// app.use((req, res) => {
//     res.send("<h1>This path does not exist..!</h1>");
// });

app.get("/:username", (req,res) => {
    console.log(req.params);
    let {username, id} = req.params;
    res.send(`hello ${username}`);
});