import nav from "../components/nav.js";
document.getElementById("nav").innerHTML=nav(nav)
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
   let user ={
      name:document.getElementById("name").value,
      lname:document.getElementById("lname").value,
      email:document.getElementById("email").value,
      password:document.getElementById("password").value,
      cpassword:document.getElementById("cpassword").value,
      number:document.getElementById("number")
   }
   console.log(user);
   localStorage.setItem("website",JSON.stringify(user));
})
