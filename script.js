let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onload = function() {
    window.scrollTo({ top: 50, behavior: "smooth" });
};


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['اللياقة البدنية', 'زيادة الوزن', 'تدريب القوة', 'خسارة الدهون', 'رفع الأثقال', 'الجري'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });

