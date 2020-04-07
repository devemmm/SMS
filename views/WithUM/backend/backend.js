/*
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
var nationality = document.getElementById("nationality");
*/
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Jenda",
    password: ""
});

conn.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Connected");
    }
});
