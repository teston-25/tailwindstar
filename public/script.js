const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const btnHam = document.querySelector('.btn-ham');
const btnClose = document.querySelector('.btn-close');
const nav = document.querySelector('.nav');


home.addEventListener('click',function(){
    window.location.href="index.html";
})

about.addEventListener('click',function(){
    window.location.href="about.html";
})

contact.addEventListener('click',function(){
    window.location.href="contacts.html";
})

btnHam.addEventListener('click',function(){
    btnClose.classList.add('block');
    btnClose.classList.remove('hidden');
    btnHam.classList.add('hidden');    
    btnHam.classList.remove('block');
    nav.classList.add('block');
    nav.classList.remove('hidden');
})
btnClose.addEventListener('click',function(){
    btnClose.classList.remove('block');
    btnClose.classList.add('hidden');
    btnHam.classList.remove('hidden');    
    btnHam.classList.add('block');
    nav.classList.remove('block');
    nav.classList.add('hidden');
})

login.addEventListener('click',function(){

})

signup.addEventListener('click', function(){
    
})
