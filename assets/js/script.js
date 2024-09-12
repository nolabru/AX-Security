// Toggle Menu ---------------------------

function menuT(){
    let menuToggle = document.querySelector('.toggleMenu');
    let navBar = document.getElementById('navBarLinks');
    let menuToggleFooter = document.querySelector('.toggleFooter')
    let navBarFooter = document.getElementById('navFooterLinks');
    menuToggle.classList.toggle('active');
    menuToggleFooter.classList.toggle('active');
    navBar.classList.toggle('active');
    navBarFooter.classList.toggle('active');
}