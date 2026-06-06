/* LOAD USER */

const user =
JSON.parse(sessionStorage.getItem("user"));

if(user){

document.getElementById("userName")
.textContent = user.name;

}
else{

window.location.href =
"login.html";

}

/* LOGOUT */

document.getElementById("logoutBtn")
.addEventListener("click", function(){

Swal.fire({

title:'Logout?',

icon:'question',

showCancelButton:true,

confirmButtonText:'Logout'

}).then((result)=>{

if(result.isConfirmed){

sessionStorage.removeItem("user");

window.location.href =
"login.html";

}

});

});