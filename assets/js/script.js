// Toggle Menu ---------------------------

function menuT(){
    let menuToggle = document.querySelector('.toggleMenu');
    let navBar = document.getElementById('navBarLinks');
    menuToggle.classList.toggle('active');
    navBar.classList.toggle('active');
}