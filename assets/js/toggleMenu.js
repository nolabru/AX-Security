function menuT() {
    let menuToggle = document.querySelector('.toggleMenu');
    let navBar = document.getElementById('navBarLinks');
    let menuToggleFooter = document.querySelector('.toggleFooter')
    let navBarFooter = document.getElementById('navFooterLinks');

    const toggles = [menuToggle, menuToggleFooter, navBar, navBarFooter];
    let toggle = 0;
    for (toggle in toggles) {
        console.log(toggles[toggle]);
        toggles[toggle].classList.toggle('active');
        toggle++;
    }

    navLink = document.querySelector('.navLink > a');
    navLink.addEventListener('click', offNav);
}
