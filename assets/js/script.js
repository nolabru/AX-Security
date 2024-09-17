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

    navLink = document.querySelector('.navLink > a');
    navLink.addEventListener('click', offNav);
}

// Abrir Instagram -----------------------

function openIg(){
    window.open("https://www.instagram.com/axsecurity", "_blank", 'noopener, noteferrez');
}

// Detalhes Serviços ---------------------
const body = document.querySelector('body');

const detalheSeg = document.querySelector('.svcBtn.seg');
const detalheAla = document.querySelector('.svcBtn.ala');
const detalheCer = document.querySelector('.svcBtn.cer');
const detalheIst = document.querySelector('.svcBtn.ist');
const detalheAcs = document.querySelector('.svcBtn.acs');
const detalheEvt = document.querySelector('.svcBtn.evt');
const detalheAxc = document.querySelector('.svcBtn.axc');
const detalheCam = document.querySelector('.svcBtn.cam');

detalheSeg.addEventListener('click', segDt);
detalheAla.addEventListener('click', alaDt);
detalheCer.addEventListener('click', cerDt);
detalheIst.addEventListener('click', istDt);
detalheAcs.addEventListener('click', acsDt);
detalheEvt.addEventListener('click', evtDt);
detalheAxc.addEventListener('click', axcDt);
detalheCam.addEventListener('click', camDt);

function blockBody(){
    body.classList.add('active');
}
function segDt(){
    const detalheBox = document.querySelector('.svcDetalhes');
    const toggleDetalhes = document.querySelector('.toggleDetalhes');
    blockBody();
    detalheBox.classList.add('active');  
    toggleDetalhes.addEventListener('click', back);
    function back(){
        detalheBox.classList.remove('active');
        body.classList.remove('active');
    }
};
function alaDt(){
    const detalheBoxAla = document.querySelector('.svcDetalhes.ala');
    const toggleDetalhesAla = document.querySelector('.toggleDetalhes.ala');
    blockBody();
    detalheBoxAla.classList.add('active');
    toggleDetalhesAla.addEventListener('click', back);
    function back(){
        detalheBoxAla.classList.remove('active');
        body.classList.remove('active');
    }
}
function cerDt(){
    const detalheBoxCer = document.querySelector('.svcDetalhes.cer');
    const toggleDetalhesCer = document.querySelector('.toggleDetalhes.cer');
    blockBody();
    detalheBoxCer.classList.add('active');
    toggleDetalhesCer.addEventListener('click', back);
    function back(){
        detalheBoxCer.classList.remove('active');
        body.classList.remove('active');
    }
}
function istDt(){
    const detalheBoxIst = document.querySelector('.svcDetalhes.ist');
    const toggleDetalhesIst = document.querySelector('.toggleDetalhes.ist');
    blockBody();
    detalheBoxIst.classList.add('active');
    toggleDetalhesIst.addEventListener('click', back);
    function back(){
        detalheBoxIst.classList.remove('active');
        body.classList.remove('active');
    }
}
function acsDt(){
    const detalheBoxAcs = document.querySelector('.svcDetalhes.acs');
    const toggleDetalhesAcs = document.querySelector('.toggleDetalhes.acs');
    blockBody();
    detalheBoxAcs.classList.add('active');
    toggleDetalhesAcs.addEventListener('click', back);
    function back(){
        detalheBoxAcs.classList.remove('active');
        body.classList.remove('active');
    }
}
function evtDt(){
    const detalheBoxEvt = document.querySelector('.svcDetalhes.evt');
    const toggleDetalhesEvt = document.querySelector('.toggleDetalhes.evt');
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
function axcDt(){
    const detalheBoxAxc = document.querySelector('.svcDetalhes.axc');
    const toggleDetalhesAxc = document.querySelector('.toggleDetalhes.axc');
    blockBody();
    detalheBoxAxc.classList.add('active');
    toggleDetalhesAxc.addEventListener('click', back);
    function back(){
        detalheBoxAxc.classList.remove('active');
        body.classList.remove('active');
    }
}
function camDt(){
    const detalheBoxCam = document.querySelector('.svcDetalhes.cam');
    const toggleDetalhesCam = document.querySelector('.toggleDetalhes.cam');
    blockBody();
    detalheBoxCam.classList.add('active');
    toggleDetalhesCam.addEventListener('click', back);
    function back(){
        detalheBoxCam.classList.remove('active');
        body.classList.remove('active');
    }
}

// Detalhes Produtos ---------------------
const imgAmt2008 = document.getElementById('imgAmt2008');
const imgAmt2010 = document.getElementById('imgAmt2010');
const imgDvr = document.getElementById('imgDvr');
const imgCam = document.querySelector('.imgCam');
const imgCam2 = document.querySelector('.imgCam2');
const imgCam3 = document.querySelector('.imgCam3');
const imgIvp3000 = document.getElementById('imgIvp3000');
const imgIvp4000 = document.getElementById('imgIvp4000');
const imgIvp3000mw = document.getElementById('imgIvp3000mw');
const imgIva3070 = document.getElementById('imgIva3070');
const img342mwx = document.getElementById('img342mwx');
const img342mfwx = document.getElementById('img342mfwx');
const img673dx = document.getElementById('img673dx');
const imgT671m = document.getElementById('imgT671m');
const imgT671mf = document.getElementById('imgT671mf');
const imgStm8000 = document.getElementById('imgStm8000');

imgAmt2008.addEventListener('click', amt2008);
imgAmt2010.addEventListener('click', amt2010);
imgDvr.addEventListener('click', dvr);
imgCam.addEventListener('click', cam);
imgCam2.addEventListener('click', cam);
imgCam3.addEventListener('click', cam);
imgIvp3000.addEventListener('click', ivp3000);
imgIvp4000.addEventListener('click', ivp4000);
imgIvp3000mw.addEventListener('click', ivp3000mw);
imgIva3070.addEventListener('click', iva3070);
img342mwx.addEventListener('click', mwx342);
img342mfwx.addEventListener('click', mfwx342);
img673dx.addEventListener('click', dx673);
imgT671m.addEventListener('click', t671m);
imgT671mf.addEventListener('click', t671mf);
imgStm8000.addEventListener('click', stm8000);

function amt2008(){
    const pdtDetalhes = document.querySelector('.pdtDetalhes');
    const togglePdtDetalhes = document.querySelector('.toggleDetalhes.amt2008');
    blockBody();
    pdtDetalhes.classList.add('active');
    togglePdtDetalhes.addEventListener('click', back);
    function back(){
        pdtDetalhes.classList.remove('active');
        body.classList.remove('active');
    }
}

function amt2010(){
    const pdtDetalhesAmt2010 = document.querySelector('.pdtDetalhes.amt2010');
    const togglePdtDetalhesAmt2010 = document.querySelector('.toggleDetalhes.amt2010');
    blockBody();
    pdtDetalhesAmt2010.classList.add('active');
    togglePdtDetalhesAmt2010.addEventListener('click', back);
    function back(){
        pdtDetalhesAmt2010.classList.remove('active');
        body.classList.remove('active');
    }
}

function dvr(){
    const pdtDetalhesDvr = document.querySelector('.pdtDetalhes.dvr');
    const togglePdtDetalhesDvr = document.querySelector('.toggleDetalhes.dvr');
    blockBody();
    pdtDetalhesDvr.classList.add('active');
    togglePdtDetalhesDvr.addEventListener('click', back);
    function back(){
        pdtDetalhesDvr.classList.remove('active');
        body.classList.remove('active');
    }
}

function cam(){
    const pdtDetalhesCam = document.querySelector('.pdtDetalhes.cam');
    const togglePdtDetalhesCam = document.querySelector('.toggleDetalhes.cams');
    blockBody();    
    pdtDetalhesCam.classList.add('active');
    togglePdtDetalhesCam.addEventListener('click', teste);
    function teste(){
        pdtDetalhesCam.classList.remove('active');
        body.classList.remove('active');
    }
}

function ivp3000(){
    const pdtDetalhesIvp3000 = document.querySelector('.pdtDetalhes.ivp3000');
    const togglePdtDetalhesIvp3000 = document.querySelector('.toggleDetalhes.ivp3000');
    blockBody();
    pdtDetalhesIvp3000.classList.add('active');
    togglePdtDetalhesIvp3000.addEventListener('click', back);
    function back(){
        pdtDetalhesIvp3000.classList.remove('active');
        body.classList.remove('active');
    }
}

function ivp4000(){
    const pdtDetalhesIvp4000 = document.querySelector('.pdtDetalhes.ivp4000');
    const togglePdtDetalhesIvp4000 = document.querySelector('.toggleDetalhes.ivp4000');
    blockBody();
    pdtDetalhesIvp4000.classList.add('active');
    togglePdtDetalhesIvp4000.addEventListener('click', back);
    function back(){
        pdtDetalhesIvp4000.classList.remove('active');
        body.classList.remove('active');
    }
}

function ivp3000mw(){
    const pdtDetalhesIvp3000mw = document.querySelector('.pdtDetalhes.ivp3000mw');
    const togglePdtDetalhesIvp3000mw = document.querySelector('.toggleDetalhes.ivp3000mw');
    blockBody();
    pdtDetalhesIvp3000mw.classList.add('active');
    togglePdtDetalhesIvp3000mw.addEventListener('click', back);
    function back(){
        pdtDetalhesIvp3000mw.classList.remove('active');
        body.classList.remove('active');
    }
}

function iva3070(){ 
    const pdtDetalhesIva3070 = document.querySelector('.pdtDetalhes.iva3070');
    const togglePdtDetalhesIva3070 = document.querySelector('.toggleDetalhes.iva3070');
    blockBody();
    pdtDetalhesIva3070.classList.add('active');
    togglePdtDetalhesIva3070.addEventListener('click', back);
    function back(){
        pdtDetalhesIva3070.classList.remove('active');
        body.classList.remove('active');
    }
}

function mwx342(){
    const pdtDetalhes342mwx = document.querySelector('.pdtDetalhes.mwx342');
    const togglePdtDetalhes342mwx = document.querySelector('.toggleDetalhes.mwx342');
    blockBody();
    pdtDetalhes342mwx.classList.add('active');
    togglePdtDetalhes342mwx.addEventListener('click', back);
    function back(){
        pdtDetalhes342mwx.classList.remove('active');
        body.classList.remove('active');
    }
}

function mfwx342(){
    const pdtDetalhes342mfwx = document.querySelector('.pdtDetalhes.mfwx342');
    const togglePdtDetalhes342mfwx = document.querySelector('.toggleDetalhes.mfwx342');
    blockBody();
    pdtDetalhes342mfwx.classList.add('active');
    togglePdtDetalhes342mfwx.addEventListener('click', back);
    function back(){
        pdtDetalhes342mfwx.classList.remove('active');
        body.classList.remove('active');
    }
}

function dx673(){
    const pdtDetalhes673dx = document.querySelector('.pdtDetalhes.dx673');
    const togglePdtDetalhes673dx = document.querySelector('.toggleDetalhes.dx673');
    blockBody();
    pdtDetalhes673dx.classList.add('active');
    togglePdtDetalhes673dx.addEventListener('click', back);
    function back(){
        pdtDetalhes673dx.classList.remove('active');
        body.classList.remove('active');
    }
}

function t671m(){
    const pdtDetalhesT671m = document.querySelector('.pdtDetalhes.t671m');
    const togglePdtDetalhesT671m = document.querySelector('.toggleDetalhes.t671m');
    blockBody();
    pdtDetalhesT671m.classList.add('active');
    togglePdtDetalhesT671m.addEventListener('click', back);
    function back(){
        pdtDetalhesT671m.classList.remove('active');
        body.classList.remove('active');
    }
}

function t671mf(){
    const pdtDetalhesT671mf = document.querySelector('.pdtDetalhes.t671mf');
    const togglePdtDetalhesT671mf = document.querySelector('.toggleDetalhes.t671mf');
    blockBody();
    pdtDetalhesT671mf.classList.add('active');
    togglePdtDetalhesT671mf.addEventListener('click', back);
    function back(){
        pdtDetalhesT671mf.classList.remove('active');
        body.classList.remove('active');
    }
}

function stm8000(){
    const pdtDetalhesStm8000 = document.querySelector('.pdtDetalhes.stm8000');
    const togglePdtDetalhesStm8000 = document.querySelector('.toggleDetalhes.stm8000');
    blockBody();
    pdtDetalhesStm8000.classList.add('active');
    togglePdtDetalhesStm8000.addEventListener('click', back);
    function back(){
        pdtDetalhesStm8000.classList.remove('active');
        body.classList.remove('active');
    }
}

window.revelar = ScrollReveal({reset:true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// ----------------------------------------------------

revelar.reveal("#redesSociais", {
    duration: 1000,
    delay: 700,
    distance: "50px",
    origin: "top"
});

// ----------------------------------------------------

revelar.reveal("#infoOne h1", {
    duration: 1000,
    delay: 100,
    distance: "70px",
    origin: "left"
});

// ----------------------------------------------------

revelar.reveal(".cardVisao", {
    duration: 700,
    delay: 300,
    distance: "70px",
    origin: "top"
});

revelar.reveal(".cardVisao.est", {
    delay: 400,
});

// ----------------------------------------------------

revelar.reveal(".cardVtg",{
    duration: 1000,
    delay: 200,
    distance: "80px",
    origin: "left"
});

revelar.reveal(".cardVtg.two",{
    delay: 250
});

revelar.reveal(".cardVtg.three",{
    delay: 300
});

revelar.reveal(".cardVtg.four",{
    delay: 350
});

// ----------------------------------------------------

revelar.reveal('.svcImg',{
    duration: 2000,
    distance: "50px",
});

revelar.reveal('.svcInfos',{
    duration: 1500,
    distance: "70px",
});

revelar.reveal('.svcImg.seg',{
    delay: 150,
    origin: "left"
});

revelar.reveal('.svcInfos.seg',{
    delay: 175,
    origin: "top"
});

revelar.reveal('.svcImg.ala',{
    delay: 150,
    origin: "bottom"
});

revelar.reveal('.svcInfos.ala',{
    delay: 175,
    origin: "left"
});

revelar.reveal('.svcImg.cer',{
    delay: 200,
    origin: "left"
});

revelar.reveal('.svcInfos.cer',{
    delay: 225,
    origin: "bottom"
});

revelar.reveal('.svcImg.ist',{
    delay: 200,
    origin: "left"
});

revelar.reveal('.svcInfos.ist',{
    delay: 225,
    origin: "top"
});

revelar.reveal('.svcImg.acs',{
    delay: 150,
    origin: "left"
});

revelar.reveal('.svcInfos.acs',{
    delay: 175,
    origin: "top"
});

revelar.reveal('.svcImg.evt',{
    delay: 150,
    origin: "left"
});

revelar.reveal('.svcInfos.evt',{
    delay: 175,
    origin: "bottom"
});

revelar.reveal('.svcImg.axc',{
    delay: 200,
    origin: "left"
});

revelar.reveal('.svcInfos.axc',{
    delay: 225,
    origin: "top"
});

revelar.reveal('.svcImg.cam',{
    delay: 200,
    origin: "left"
});

revelar.reveal('.svcInfos.cam',{
    delay: 225,
    origin: "bottom"
});

revelar.reveal('.sctsTitle',{
    duration: 1000,
    delay: 100,
    distance: "70px",
    origin: "left"
});

// ----------------------------------------------------

revelar.reveal('.info.two > a',{
    duration: 1000,
    delay: 300,
    distance: "70px",
    origin: "bottom"
});

revelar.reveal('.info.three > a',{
    duration: 1000,
    delay: 300,
    distance: "70px",
    origin: "bottom"
});

// ----------------------------------------------------

revelar.reveal('#sctFive > section', {
    duration: 1000,
    delay: 200,
    distance: "60px"
});

revelar.reveal('#empImg',{
    origin: "left"
});

revelar.reveal('#empDescricao',{
    origin: 'bottom'
});

// ----------------------------------------------------

revelar.reveal("#pdtDescricao",{
    duration: 1000,
    delay: 100,
    distance: "70px",
    origin: "left"
});

revelar.reveal('.pdtCard ',{
    duration: 1000,
    delay: 400,
    distance: "70px",
    origin: "left"
});

// ----------------------------------------------------

revelar.reveal('#clientes', {
    duration: 1000,
    delay: 150,
    distance: "70px",
    origin: "top"
});

// ----------------------------------------------------

revelar.reveal(".info.four",{
    duration: 1000,
    delay: 300,
    distance: "70px",
    origin: "bottom"
});

// ----------------------------------------------------

revelar.reveal('#infoContato',{
    duration: 1000,
    delay: 300,
    distance: "70px",
    origin: "top"
});

revelar.reveal('#contato > section',{
    duration: 1000,
    delay: 200,
    distance: "70px",
});

revelar.reveal('#dadosCtt',{
    origin: 'left'
})

// ----------------------------------------------------

revelar.reveal('#footerTxt',{
    duration: 1000,
    delay: 100,
    distance: "70px",
    origin: "left"
});

revelar.reveal('#footerAx > img',{
    duration: 1000,
    delay: 100,
    distance: "70px",
    origin: "top"
});