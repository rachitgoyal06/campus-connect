/* PASSWORD TOGGLE */

const toggle =
document.getElementById("togglePassword");

const passwordField =
document.getElementById("password");

toggle.addEventListener("click", () => {

if(passwordField.type === "password"){

passwordField.type = "text";

toggle.innerHTML =
'<i class="bi bi-eye-slash"></i>';

}
else{

passwordField.type = "password";

toggle.innerHTML =
'<i class="bi bi-eye"></i>';

}

});

/* FORGOT PASSWORD */

document.getElementById("forgotPassword")
.addEventListener("click", function(e){

e.preventDefault();

Swal.fire({

icon:'info',

title:'Password Recovery',

text:'Please create a new account for this demo version.'

});

});

/* LOGIN */

document.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value;

const user =
JSON.parse(sessionStorage.getItem("user"));

if(!user){

Swal.fire({

icon:'error',

title:'No Account Found',

text:'Please Sign Up First.'

});

return;

}

/* MUJ EMAIL CHECK */

if(!email.endsWith("@muj.manipal.edu")){

Swal.fire({

icon:'error',

title:'Invalid MUJ Email',

text:'Only MUJ students can login.'

});

return;

}

/* LOGIN CHECK */

if(
user.email === email &&
user.password === password
){

Swal.fire({

icon:'success',

title:'Login Successful',

text:'Welcome to MUJ Campus Connect'

}).then(() => {

window.location.href =
"dashboard.html";

});

}
else{

Swal.fire({

icon:'error',

title:'Invalid Credentials',

text:'Email or Password is incorrect.'

});

}

});