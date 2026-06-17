const express= require("express");
const app=express();
const port=8080;
const path = require("path");
// create automatic id's
const { v4: uuidv4 } = require("uuid");
//
const methodOverride=require("method-override")


app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts= [
    {
        id: uuidv4(),
        username : "arxchit",
        content : "This is first post by archit",
    },
    {
        id: uuidv4(),
        username : "aditya",
        content : "Hay guys! how are you...",
    },
    {
        id: uuidv4(),
        username : "anand",
        content : "kya garmi h .....",
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});


app.get("/posts/new", (req, res) => {
    res.render("form.ejs")
});
app.post("/posts", (req,res) => {
    let {username, content}= req.body;
    let id=uuidv4();
    posts.push({ id, username, content});
    // res.send("post response working! ");
    //simple way---->
    // res.render("index.ejs", {posts});
    // mentos way--->
    res.redirect("/posts")
});

app.get("/posts/:id", (req, res ) => {
    let {id} =req.params;
    let post= posts.find((p) => id === p.id);
    if (!post) {

        return res.status(404).send("Post not found");

    }
    res.render("show.ejs",{post});
    
});


// to update---->
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;

    let newContent=req.body.content;
    let post= posts.find((p) => id === p.id);
    post.content= newContent;
    console.log(post)
    res.redirect("/posts");
    // res.send("worked");

});

app.get("/posts/:id/edit", (req, res ) =>{
    let {id} = req.params;
    let post= posts.find((p) => id === p.id);
    res.render("edit.ejs",{post})

});

app.delete("/posts/:id", (req, res ) =>{
    let {id} = req.params;
    posts= posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("listining to port: ", port);
});
