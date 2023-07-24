let menuBtn = document.querySelector('.header__bars');
let mobileNav = document.querySelector('.mobile-nav');
let mobileMenu = document.querySelectorAll('.mobile-nav__menu li');
let erase = ['contato', 'sobre'];
let menuAberto = false;

menuBtn.addEventListener('click', () => {
    menuAberto = !menuAberto;
    if(menuAberto){
        mobileNav.style.display = 'none';
    } else{
        preveiwContainer.style.display = 'none';
        mobileNav.style.display = 'flex';
    }
});