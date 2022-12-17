var login = document.querySelector('#login');
var password = document.querySelector('#password');
let register = document.querySelector('#Register');

var registration = new Map ();

register.addEventListener("click", AddUser);

function AddUser(){
    registration.set(login.value, password.value);
    console.log(registration);
    window.localStorage.setItem(login.value, password.value);
    window.location.href = 'http://127.0.0.1:5500/auth.html'
}