const menu_btn = document.querySelector('#menu-btn');
const mobile_nav = document.querySelector('.mobile-nav');
const close_btn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.backdrop');

menu_btn.addEventListener('click',function(){
    mobile_nav.classList.toggle('is-active');
    backdrop.style.display= 'block';
   
});

close_btn.addEventListener('click',function(){
    mobile_nav.classList.remove('is-active');
    backdrop.style.display= 'none';
});