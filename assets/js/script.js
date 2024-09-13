// Toggle Menu ---------------------------

function menuT(){
    let menuToggle = document.querySelector('.toggleMenu');
    let navBar = document.getElementById('navBarLinks');
    let menuToggleFooter = document.querySelector('.toggleFooter')
    let navBarFooter = document.getElementById('navFooterLinks');

    const toggles = [menuToggle, menuToggleFooter, navBar, navBarFooter];
    let toggle = 0;
    for(toggle in toggles){
        console.log(toggles[toggle]);
        toggles[toggle].classList.toggle('active');
        toggle ++;
    }   
}

// Detalhes Serviços ---------------------

const detalheSeg = document.querySelector('.svcBtn.seg');
const detalheBox = document.querySelector('.svcDetalhes');
const body = document.querySelector('body');
const toggleDetalhes = document.querySelector('.toggleDetalhes');
detalheSeg.addEventListener('click', segDt);

function segDt(){
    detalheBox.classList.add('active');
    body.classList.add('active');
    toggleDetalhes.addEventListener('click', back);
    function back(){
        detalheBox.classList.remove('active');
        body.classList.remove('active');
    }
}