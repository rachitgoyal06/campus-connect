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

/* SIGNUP FORM */

document.getElementById("signupForm")
.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const phone =
document.getElementById("phone").value.trim();

const password =
document.getElementById("password").value;

const regno =
document.getElementById("regno").value.trim();

const block =
document.getElementById("block")
.value
.trim()
.toUpperCase();

/* EMAIL CHECK */

if(!email.endsWith("@muj.manipal.edu")){

Swal.fire({

icon:'error',

title:'Invalid MUJ Email',

text:'Only MUJ students can register.'

});

return;

}

/* PHONE CHECK */

if(!/^[0-9]{10}$/.test(phone)){

Swal.fire({

icon:'error',

title:'Invalid Phone Number',

text:'Phone number must contain exactly 10 digits.'

});

return;

}

/* PASSWORD CHECK */

const passwordPattern =
/^(?=.*[A-Z])(?=.*[#_@&])(?=.{6,}$)/;

if(!passwordPattern.test(password)){

Swal.fire({

icon:'error',

title:'Weak Password',

html:`
Password must contain:
<br><br>
✅ Minimum 6 Characters
<br>
✅ 1 Capital Letter
<br>
✅ 1 Special Character (# _ @ &)
`

});

return;

}

/* BLOCK CHECK */

const blockPattern =
/^(B([1-9]|1[0-2])|G([1-8]))$/;

if(!blockPattern.test(block)){

Swal.fire({

icon:'error',

title:'Invalid Hostel Block',

text:'Use B1-B12 or G1-G8.'

});

return;

}

/* SAVE USER */

const user = {

name,
email,
phone,
password,
regno,
block

};

sessionStorage.setItem(
"user",
JSON.stringify(user)
);

Swal.fire({

icon:'success',

title:'Account Created Successfully',

text:'You can now login.'

}).then(() => {

window.location.href =
"login.html";

});

});