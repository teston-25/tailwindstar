//for login and signup
const cancel = document.querySelector('.back');
const login = document.querySelector('#login');
const signup = document.querySelector('.signup');


login.addEventListener('click',function(){
    window.location.href = "login.html";
});

signup.addEventListener('click', function(){
    window.location.href = "signup.html";    
});

cancel.addEventListener('click', function(){
    window.location.href = "index.html";
});