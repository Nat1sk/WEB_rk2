var Reg = document.querySelector('#Reg');
var Auth = document.querySelector('#Auth');

Auth.addEventListener ("click", au);
Reg.addEventListener ("click", re);

function au(){
    window.location.href = 'http://127.0.0.1:5500/auth.html'
}

function re(){
    window.location.href = 'http://127.0.0.1:5500/index.html'
}