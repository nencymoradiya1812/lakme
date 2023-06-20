 import nav from "../components/nav.js";
  
 document.getElementById("nav").innerHTML=nav()

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    let user=JSON.parse(localStorage.getItem("website"))
    console.log(user);

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email == user.email && password == user.password){
        alert("login success");
        window.location.href ="website/index.html"
    }
    else{
        alert("invalid")
    }
})