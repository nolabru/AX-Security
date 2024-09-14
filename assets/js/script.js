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

const body = document.querySelector('body');
const detalheBox = document.querySelector('.svcDetalhes');
const toggleDetalhes = document.querySelector('.toggleDetalhes');

const detalheSeg = document.querySelector('.svcBtn.seg');

const detalheAla = document.querySelector('.svcBtn.ala');
const detalheBoxAla = document.querySelector('.svcDetalhes.ala');
const toggleDetalhesAla = document.querySelector('.toggleDetalhes.ala');

const detalheCer = document.querySelector('.svcBtn.cer');
const detalheBoxCer = document.querySelector('.svcDetalhes.cer');
const toggleDetalhesCer = document.querySelector('.toggleDetalhes.cer');

const detalheIst = document.querySelector('.svcBtn.ist');
const detalheBoxIst = document.querySelector('.svcDetalhes.ist');
const toggleDetalhesIst = document.querySelector('.toggleDetalhes.ist');

const detalheAcs = document.querySelector('.svcBtn.acs');
const detalheBoxAcs = document.querySelector('.svcDetalhes.acs');
const toggleDetalhesAcs = document.querySelector('.toggleDetalhes.acs');

const detalheEvt = document.querySelector('.svcBtn.evt');
const detalheBoxEvt = document.querySelector('.svcDetalhes.evt');
const toggleDetalhesEvt = document.querySelector('.toggleDetalhes.evt');



detalheSeg.addEventListener('click', segDt);
detalheAla.addEventListener('click', alaDt);
detalheCer.addEventListener('click', cerDt);
detalheIst.addEventListener('click', istDt);
detalheAcs.addEventListener('click', acsDt);
detalheEvt.addEventListener('click', evtDt);

function blockBody(){
    body.classList.add('active');
}

function segDt(){
    blockBody();
    detalheBox.classList.add('active');  
    toggleDetalhes.addEventListener('click', back);
    function back(){
        detalheBox.classList.remove('active');
        body.classList.remove('active');
    }
};

function alaDt(){
    blockBody();
    detalheBoxAla.classList.add('active');
    toggleDetalhesAla.addEventListener('click', back);
    function back(){
        detalheBoxAla.classList.remove('active');
        body.classList.remove('active');
    }
}

function cerDt(){
    blockBody();
    detalheBoxCer.classList.add('active');
    toggleDetalhesCer.addEventListener('click', back);
    function back(){
        detalheBoxCer.classList.remove('active');
        body.classList.remove('active');
    }
}

function istDt(){
    blockBody();
    detalheBoxIst.classList.add('active');
    toggleDetalhesIst.addEventListener('click', back);
    function back(){
        detalheBoxIst.classList.remove('active');
        body.classList.remove('active');
    }
}

function acsDt(){
    blockBody();
    detalheBoxAcs.classList.add('active');
    toggleDetalhesAcs.addEventListener('click', back);
    function back(){
        detalheBoxAcs.classList.remove('active');
        body.classList.remove('active');
    }
}

function evtDt(){
    blockBody();
    detalheBoxEvt.classList.add('active');
    toggleDetalhesEvt.addEventListener('click', back);
    function back(){
        detalheBoxEvt.classList.remove('active');
        body.classList.remove('active');
    }
    const tpEvtBtn = document.getElementById('tpEvtBtn');  
    tpEvtBtn.addEventListener('click', eventos);

    function eventos(){
        const tpEvt = document.getElementById('tpEvt');
        const toggleEvt = document.getElementById('toggleEvt');
        const evtCardDetalhes = document.querySelector('.svcCardDetalhes.evt');

        tpEvt.classList.add('active');
        evtCardDetalhes.classList.add('off');

        toggleEvt.addEventListener('click', back);

        function back(){
            tpEvt.classList.remove('active');
            evtCardDetalhes.classList.remove('off');
        }
    }
}







