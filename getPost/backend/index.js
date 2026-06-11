const express = require("express");
const app = express();
const port = 8080;


// to access post data we have to parse the values to make understandable to the express

app.use(express.urlencoded({extended: true}));

// to access post json data
app.use(express.json());

app.get("/register", (req , res ) => {
    let {user, pass} = req.query;
    res.send(`Standerd GET response, Welcome ${user}`);
})

app.post("/register", (req , res ) => {
    let {user, pass} = req.body;
    res.send(`Standerd POST response, Welcome ${user}`);
})

app.listen(port, () => {
    console.log(`Listening port: ${port}`);
})