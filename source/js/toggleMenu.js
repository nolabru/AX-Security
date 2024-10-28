function menuT() {
    let menuToggle = document.querySelector('.toggleMenu');
    let navBar = document.getElementById('navBarLinks');
    let menuToggleFooter = document.querySelector('.toggleFooter');
    let navBarFooter = document.getElementById('navFooterLinks');
    
    const toggles = [menuToggle, menuToggleFooter, navBar, navBarFooter];
    
    toggles.forEach(toggle => {
        toggle.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.navLink a');
    const navLinksFooter = document.querySelectorAll('.navLinkFooter a');
    
    const closeMenus = () => {
        navBar.classList.remove('active');
        navBarFooter.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggleFooter.classList.remove('active');
    };
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenus);
    });
    
    navLinksFooter.forEach(link => {
        link.addEventListener('click', closeMenus);
    });
    
}   
