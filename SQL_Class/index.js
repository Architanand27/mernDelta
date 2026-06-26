const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app= express();
const path= require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// create connection with DB
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password:"Anand@27"
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),

  ];
}

/*{  // these execute already so we dont need this, if we run again it will again store data in DB 
    // use DB with query
    // let query= "INSERT INTO user VALUES (?, ?, ?, ?)"; //use when we have to enter single user at a time
    let query= "INSERT INTO user VALUES ?"; // use when enterd multiple user at a time
    // let users=[["112", "anand", "anand@gmail.com", "afva"], ["198", "adi", "adi@gmail.com", "sdv"]];

    let data =[];
    for (let i=1; i<=100; i++){
        data.push(getRandomUser());
    }
}*/

// console.log(getRandomUser());

// count route
app.get("/", (req,res) => {
    let q= `SELECT count(*) FROM user;`;
    try{
        connection.query(q, (err, result) => { 
            if(err) throw err;
            let count= result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }

    // connection.end();
    
});

// show users route

app.get("/user", (req, res) => {
    let q= `SELECT * FROM user;`;
    try{
        connection.query(q, (err, result) => { 
            if(err) throw err;
            res.render("list.ejs", {result});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
    
})


// edit user

app.get("/user/:id/edit", (req, res) => {
    let {id} =req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) => { 
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
    
});

// Update Route

app.patch("/user/:id",(req, res) => {
    let {id} =req.params;
    let {password: formPass, username: newUser}= req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) => { 
            if(err) throw err;
            let user = result[0];
            if (formPass!=user.password){
                res.send("Wrong pass");
            }else{
                let q2=`UPDATE user SET username="${newUser}" WHERE id="${id}"`;
                try{
                    connection.query(q2, (err, result) => { 
                        if(err) throw err;
                        res.redirect("/user");
                    });
                }catch(err){
                    console.log(err);
                    res.send("Some error in DB");
                }
            }
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB"); 
    }
    
});


// add new user
app.get("/user/adduser",(req,res)=> {
    res.render("addUser.ejs");
});

// add new user automatic..

app.post("/user/addnewauto", (req, res) => {
    let newAutoUser=[];
    newAutoUser.push(getRandomUser());
    let q= `INSERT INTO user VALUES ?`; 
    try{
        connection.query(q, [newAutoUser] ,  (err, result) => { 
            if(err) throw err;
            res.redirect("/user")
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }

    
});

// add new user Manully..

app.post("/user/adduserman", (req,res) => {
    let {id, email, username, password}=req.body;
    let query=`INSERT INTO user VALUES ("${id}", "${username}", "${email}", "${password}")`;
    try{
        connection.query(query, (err, result) => { 
            if(err){
                if(err.code === "ER_DUP_ENTRY"){
                    return res.send("ID or Username already exists!");
                }
                return res.send("Database Error!");
            }
            res.redirect("/user");
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }

    
});

// select user for delete
app.get("/user/deleteuser", (req, res) => {
    res.render("delete.ejs");
});

app.delete("/user/delete", (req,res) => {

    let {username: formUser, password: formPassword}=req.body;
    let query=`SELECT * FROM user WHERE username='${formUser}'`;
    try{
        connection.query(query, (err, result) => {
            if(err) throw err;
            if(result.length === 0){
                return res.send("User not found!");
            };
            let user=result[0];
            if(formPassword != user.password){
                return res.send("Wrong pass! ");
            }else{
                let query2=`DELETE FROM user WHERE username='${formUser}'`;
                try{
                    connection.query(query2, (err,result) => {
                        if(err) throw err;
                        res.redirect("/user");
                    })
                    
                }catch(err){
                        console.log(err);
                        res.send("Some error in DB!!") 
                    }
            }
            
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB! ");
    }

    // res.send("Deleted Success!");
});



// start server
app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});



// try{
//     connection.query(query, [data], (err, result) => { // use 'user' for entring single user and '[users]' for entering multiple user at a time..
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }

// connection.end();