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

function amt2008() {
    const pdtDetalhes = document.querySelector('.pdtDetalhes');
    const togglePdtDetalhes = document.querySelector('.toggleDetalhes.amt2008');
    blockBody();
    pdtDetalhes.classList.add('active');
    togglePdtDetalhes.addEventListener('click', back);
    function back() {
        pdtDetalhes.classList.remove('active');
        body.classList.remove('active');
    }
}

function amt2010() {
    const pdtDetalhesAmt2010 = document.querySelector('.pdtDetalhes.amt2010');
    const togglePdtDetalhesAmt2010 = document.querySelector('.toggleDetalhes.amt2010');
    blockBody();
    pdtDetalhesAmt2010.classList.add('active');
    togglePdtDetalhesAmt2010.addEventListener('click', back);
    function back() {
        pdtDetalhesAmt2010.classList.remove('active');
        body.classList.remove('active');
    }
}

function dvr() {
    const pdtDetalhesDvr = document.querySelector('.pdtDetalhes.dvr');
    const togglePdtDetalhesDvr = document.querySelector('.toggleDetalhes.dvr');
    blockBody();
    pdtDetalhesDvr.classList.add('active');
    togglePdtDetalhesDvr.addEventListener('click', back);
    function back() {
        pdtDetalhesDvr.classList.remove('active');
        body.classList.remove('active');
    }
}

function cam() {
    const pdtDetalhesCam = document.querySelector('.pdtDetalhes.cam');
    const togglePdtDetalhesCam = document.querySelector('.toggleDetalhes.cams');
    blockBody();
    pdtDetalhesCam.classList.add('active');
    togglePdtDetalhesCam.addEventListener('click', teste);
    function teste() {
        pdtDetalhesCam.classList.remove('active');
        body.classList.remove('active');
    }
}

function ivp3000() {
    const pdtDetalhesIvp3000 = document.querySelector('.pdtDetalhes.ivp3000');
    const togglePdtDetalhesIvp3000 = document.querySelector('.toggleDetalhes.ivp3000');
    blockBody();
    pdtDetalhesIvp3000.classList.add('active');
    togglePdtDetalhesIvp3000.addEventListener('click', back);
    function back() {
        pdtDetalhesIvp3000.classList.remove('active');
        body.classList.remove('active');
    }
}

function ivp4000() {
    const pdtDetalhesIvp4000 = document.querySelector('.pdtDetalhes.ivp4000');
    const togglePdtDetalhesIvp4000 = document.querySelector('.toggleDetalhes.ivp4000');
    blockBody();
    pdtDetalhesIvp4000.classList.add('active');
    togglePdtDetalhesIvp4000.addEventListener('click', back);
    function back() {
        pdtDetalhesIvp4000.classList.remove('active');
        body.classList.remove('active');
    }
}

function ivp3000mw() {
    const pdtDetalhesIvp3000mw = document.querySelector('.pdtDetalhes.ivp3000mw');
    const togglePdtDetalhesIvp3000mw = document.querySelector('.toggleDetalhes.ivp3000mw');
    blockBody();
    pdtDetalhesIvp3000mw.classList.add('active');
    togglePdtDetalhesIvp3000mw.addEventListener('click', back);
    function back() {
        pdtDetalhesIvp3000mw.classList.remove('active');
        body.classList.remove('active');
    }
}

function iva3070() {
    const pdtDetalhesIva3070 = document.querySelector('.pdtDetalhes.iva3070');
    const togglePdtDetalhesIva3070 = document.querySelector('.toggleDetalhes.iva3070');
    blockBody();
    pdtDetalhesIva3070.classList.add('active');
    togglePdtDetalhesIva3070.addEventListener('click', back);
    function back() {
        pdtDetalhesIva3070.classList.remove('active');
        body.classList.remove('active');
    }
}

function mwx342() {
    const pdtDetalhes342mwx = document.querySelector('.pdtDetalhes.mwx342');
    const togglePdtDetalhes342mwx = document.querySelector('.toggleDetalhes.mwx342');
    blockBody();
    pdtDetalhes342mwx.classList.add('active');
    togglePdtDetalhes342mwx.addEventListener('click', back);
    function back() {
        pdtDetalhes342mwx.classList.remove('active');
        body.classList.remove('active');
    }
}

function mfwx342() {
    const pdtDetalhes342mfwx = document.querySelector('.pdtDetalhes.mfwx342');
    const togglePdtDetalhes342mfwx = document.querySelector('.toggleDetalhes.mfwx342');
    blockBody();
    pdtDetalhes342mfwx.classList.add('active');
    togglePdtDetalhes342mfwx.addEventListener('click', back);
    function back() {
        pdtDetalhes342mfwx.classList.remove('active');
        body.classList.remove('active');
    }
}

function dx673() {
    const pdtDetalhes673dx = document.querySelector('.pdtDetalhes.dx673');
    const togglePdtDetalhes673dx = document.querySelector('.toggleDetalhes.dx673');
    blockBody();
    pdtDetalhes673dx.classList.add('active');
    togglePdtDetalhes673dx.addEventListener('click', back);
    function back() {
        pdtDetalhes673dx.classList.remove('active');
        body.classList.remove('active');
    }
}

function t671m() {
    const pdtDetalhesT671m = document.querySelector('.pdtDetalhes.t671m');
    const togglePdtDetalhesT671m = document.querySelector('.toggleDetalhes.t671m');
    blockBody();
    pdtDetalhesT671m.classList.add('active');
    togglePdtDetalhesT671m.addEventListener('click', back);
    function back() {
        pdtDetalhesT671m.classList.remove('active');
        body.classList.remove('active');
    }
}

function t671mf() {
    const pdtDetalhesT671mf = document.querySelector('.pdtDetalhes.t671mf');
    const togglePdtDetalhesT671mf = document.querySelector('.toggleDetalhes.t671mf');
    blockBody();
    pdtDetalhesT671mf.classList.add('active');
    togglePdtDetalhesT671mf.addEventListener('click', back);
    function back() {
        pdtDetalhesT671mf.classList.remove('active');
        body.classList.remove('active');
    }
}

function stm8000() {
    const pdtDetalhesStm8000 = document.querySelector('.pdtDetalhes.stm8000');
    const togglePdtDetalhesStm8000 = document.querySelector('.toggleDetalhes.stm8000');
    blockBody();
    pdtDetalhesStm8000.classList.add('active');
    togglePdtDetalhesStm8000.addEventListener('click', back);
    function back() {
        pdtDetalhesStm8000.classList.remove('active');
        body.classList.remove('active');
    }
}