document.querySelector('.header__moon').onclick = function() {
    document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header__mob-menu').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}
{ 
var typed = new Typed(".typing", {
    strings: ["Student", "Ordinary man", "Ironman"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true  
});
}