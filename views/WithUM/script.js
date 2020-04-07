const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const nationality = document.getElementById("nationality");

var SamePasswd = confirmPassword.addEventListener('blur',()=>{
    if(password.value != confirmPassword.value){
        password.style.border = "thin solid red";
        confirmPassword.style.border = "thin solid red";
    }else if(password.value ==="" && confirmPassword ===""){
        password.style.border = "thin solid red";
        confirmPassword.style.border = "thin solid red";
    }else{
        password.style.border = "thin solid green";
        confirmPassword.style.border = "thin solid green";
    }
});