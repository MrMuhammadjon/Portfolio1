let parallax1 = document.getElementById('get-parallax-1');
let parallax2 = document.getElementById('get-parallax-2');
let parallax3 = document.getElementById('get-parallax-3');


window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    parallax1.style.marginTop = value * 0.5 + 'px';
    parallax2.style.marginTop = value * -2.5 + 'px';
    parallax3.style.marginTop = value * -1.5 + 'px';

})