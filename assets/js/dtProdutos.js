const imgAmt8000Pro = document.getElementById('imgAmt8000Pro');
const imgAmt8000Lite = document.getElementById('imgAmt8000Lite');
const imgIvp8000PetCam = document.getElementById('imgIvp8000PetCam');
const imgIvp8000Pet = document.getElementById('imgIvp8000Pet');
const imgIvp8000Ex = document.getElementById('imgIvp8000Ex');
const imgXss8000 = document.getElementById('imgXss8000');
const imgXat8000 = document.getElementById('imgXat8000');
const imgXac8000 = document.getElementById('imgXac8000');
const imgRep8000 = document.getElementById('imgRep8000');
const imgXag8000 = document.getElementById('imgXag8000');
const imgVipw1220DFcP = document.getElementById('imgVipw1220DFcP');
const imgVipw1220DFc = document.getElementById('imgVipw1220DFc');
const imgVip1220FcP = document.getElementById('imgVip1220FcP');
const imgVhd3220DFullColor = document.getElementById('imgVhd3220DFullColor');
const imgVhd3220DFullColorP = document.getElementById('imgVhd3220DFullColorP');

const img342mwx = document.getElementById('img342mwx');
const img342mfwx = document.getElementById('img342mfwx');
const img673dx = document.getElementById('img673dx');
const imgT671m = document.getElementById('imgT671m');
const imgT671mf = document.getElementById('imgT671mf');
const imgStm8000 = document.getElementById('imgStm8000');



imgAmt8000Pro.addEventListener('click', amt8000Pro);
imgAmt8000Lite.addEventListener('click', amt8000Lite);
imgIvp8000PetCam.addEventListener('click', ivp8000PetCam);
imgIvp8000Pet.addEventListener('click', ivp8000Pet);
imgIvp8000Ex.addEventListener('click', ivp8000Ex);
imgXss8000.addEventListener('click', xss8000);
imgXat8000.addEventListener('click', xat8000);
imgXac8000.addEventListener('click', xac8000);
imgRep8000.addEventListener('click', rep8000);
imgXag8000.addEventListener('click', xag8000);
imgVipw1220DFcP.addEventListener('click', vipw1220DFcP);
imgVipw1220DFc.addEventListener('click', vipw1220DFc);
imgVip1220FcP.addEventListener('click', vip1220FcP);
imgVhd3220DFullColor.addEventListener('click', vhd3220DFullColor);
imgVhd3220DFullColorP.addEventListener('click', vhd3220DFullColorP);

img342mwx.addEventListener('click', mwx342);
img342mfwx.addEventListener('click', mfwx342);
img673dx.addEventListener('click', dx673);
imgT671m.addEventListener('click', t671m);
imgT671mf.addEventListener('click', t671mf);
imgStm8000.addEventListener('click', stm8000);

function amt8000Pro() {
    const pdtDetalhes = document.querySelector('.pdtDetalhes');
    const togglePdtDetalhes = document.querySelector('.toggleDetalhes.amt8000Pro');
    blockBody();
    pdtDetalhes.classList.add('active');
    togglePdtDetalhes.addEventListener('click', back);
    function back() {
        pdtDetalhes.classList.remove('active');
        body.classList.remove('active');
    }
}
function amt8000Lite() {
    const pdtDetalhesAmt8000Lite = document.querySelector('.pdtDetalhes.amt8000Lite');
    const togglePdtDetalhesAmt8000Lite = document.querySelector('.toggleDetalhes.amt8000Lite');
    blockBody();
    pdtDetalhesAmt8000Lite.classList.add('active');
    togglePdtDetalhesAmt8000Lite.addEventListener('click', back);
    function back() {
        pdtDetalhesAmt8000Lite.classList.remove('active');
        body.classList.remove('active');
    }
}
function ivp8000PetCam() {
    const pdtDetalhesIvp8000PetCam = document.querySelector('.pdtDetalhes.ivp8000PetCam');
    const togglePdtDetalhesIvp8000PetCam = document.querySelector('.toggleDetalhes.ivp8000PetCam');
    blockBody();
    pdtDetalhesIvp8000PetCam.classList.add('active');
    togglePdtDetalhesIvp8000PetCam.addEventListener('click', back);
    function back() {
        pdtDetalhesIvp8000PetCam.classList.remove('active');
        body.classList.remove('active');
    }
}
function ivp8000Pet() {
    const pdtDetalhesIvp8000Pet = document.querySelector('.pdtDetalhes.ivp8000Pet');
    const togglePdtDetalhesIvp8000Pet = document.querySelector('.toggleDetalhes.ivp8000Pet');
    blockBody();
    pdtDetalhesIvp8000Pet.classList.add('active');
    togglePdtDetalhesIvp8000Pet.addEventListener('click', back);
    function back() {
        pdtDetalhesIvp8000Pet.classList.remove('active');
        body.classList.remove('active');
    }
}
function ivp8000Ex() {
    const pdtDetalhesIvp8000Ex = document.querySelector('.pdtDetalhes.ivp8000Ex');
    const togglePdtDetalhesIvp8000Ex = document.querySelector('.toggleDetalhes.ivp8000Ex');
    blockBody();
    pdtDetalhesIvp8000Ex.classList.add('active');
    togglePdtDetalhesIvp8000Ex.addEventListener('click', back);
    function back() {
        pdtDetalhesIvp8000Ex.classList.remove('active');
        body.classList.remove('active');
    }
}
function xss8000() {
    const pdtDetalhesXss8000 = document.querySelector('.pdtDetalhes.xss8000');
    const togglePdtDetalhesXss8000 = document.querySelector('.toggleDetalhes.xss8000');
    blockBody();
    pdtDetalhesXss8000.classList.add('active');
    togglePdtDetalhesXss8000.addEventListener('click', back);
    function back() {
        pdtDetalhesXss8000.classList.remove('active');
        body.classList.remove('active');
    }
}
function xat8000() {
    const pdtDetalhesXat8000 = document.querySelector('.pdtDetalhes.xat8000');
    const togglePdtDetalhesXat8000 = document.querySelector('.toggleDetalhes.xat8000');
    blockBody();
    pdtDetalhesXat8000.classList.add('active');
    togglePdtDetalhesXat8000.addEventListener('click', back);
    function back() {
        pdtDetalhesXat8000.classList.remove('active');
        body.classList.remove('active');
    }
}
function xac8000() {
    const pdtDetalhesXac8000 = document.querySelector('.pdtDetalhes.xac8000');
    const togglePdtDetalhesXac8000 = document.querySelector('.toggleDetalhes.xac8000');
    blockBody();
    pdtDetalhesXac8000.classList.add('active');
    togglePdtDetalhesXac8000.addEventListener('click', back);
    function back() {
        pdtDetalhesXac8000.classList.remove('active');
        body.classList.remove('active');
    }
}
function rep8000() {
    const pdtDetalhesRep8000 = document.querySelector('.pdtDetalhes.rep8000');
    const togglePdtDetalhesRep8000 = document.querySelector('.toggleDetalhes.rep8000');
    blockBody();
    pdtDetalhesRep8000.classList.add('active');
    togglePdtDetalhesRep8000.addEventListener('click', back);
    function back() {
        pdtDetalhesRep8000.classList.remove('active');
        body.classList.remove('active');
    }
}
function xag8000() {
    const pdtDetalhesXag8000 = document.querySelector('.pdtDetalhes.xag8000');
    const togglePdtDetalhesXag8000 = document.querySelector('.toggleDetalhes.xag8000');
    blockBody();
    pdtDetalhesXag8000.classList.add('active');
    togglePdtDetalhesXag8000.addEventListener('click', back);
    function back() {
        pdtDetalhesXag8000.classList.remove('active');
        body.classList.remove('active');
    }
}
function vipw1220DFcP() {
    const pdtDetalhesVipw1220DFcP = document.querySelector('.pdtDetalhes.vipw1220DFcP');
    const togglePdtDetalhesVipw1220DFcP = document.querySelector('.toggleDetalhes.vipw1220DFcP');
    blockBody();
    pdtDetalhesVipw1220DFcP.classList.add('active');
    togglePdtDetalhesVipw1220DFcP.addEventListener('click', back);
    function back() {
        pdtDetalhesVipw1220DFcP.classList.remove('active');
        body.classList.remove('active');
    }
}
function vipw1220DFc() {
    const pdtDetalhesVipw1220DFc = document.querySelector('.pdtDetalhes.vipw1220DFc');
    const togglePdtDetalhesVipw1220DFc = document.querySelector('.toggleDetalhes.vipw1220DFc');
    blockBody();
    pdtDetalhesVipw1220DFc.classList.add('active');
    togglePdtDetalhesVipw1220DFc.addEventListener('click', back);
    function back() {
        pdtDetalhesVipw1220DFc.classList.remove('active');
        body.classList.remove('active');
    }
}
function vip1220FcP() {
    const pdtDetalhesVip1220FcP = document.querySelector('.pdtDetalhes.vip1220FcP');
    const togglePdtDetalhesVip1220FcP = document.querySelector('.toggleDetalhes.vip1220FcP');
    blockBody();
    pdtDetalhesVip1220FcP.classList.add('active');
    togglePdtDetalhesVip1220FcP.addEventListener('click', back);
    function back() {
        pdtDetalhesVip1220FcP.classList.remove('active');
        body.classList.remove('active');
    }
}
function vhd3220DFullColor() {
    const pdtDetalhesVhd3220DFullColor = document.querySelector('.pdtDetalhes.vhd3220DFullColor');
    const togglePdtDetalhesVhd3220DFullColor = document.querySelector('.toggleDetalhes.vhd3220DFullColor');
    blockBody();
    pdtDetalhesVhd3220DFullColor.classList.add('active');
    togglePdtDetalhesVhd3220DFullColor.addEventListener('click', back);
    function back() {
        pdtDetalhesVhd3220DFullColor.classList.remove('active');
        body.classList.remove('active');
    }
}
function vhd3220DFullColorP() {
    const pdtDetalhesVhd3220DFullColorP = document.querySelector('.pdtDetalhes.vhd3220DFullColorP');
    const togglePdtDetalhesVhd3220DFullColorP = document.querySelector('.toggleDetalhes.vhd3220DFullColorP');
    blockBody();
    pdtDetalhesVhd3220DFullColorP.classList.add('active');
    togglePdtDetalhesVhd3220DFullColorP.addEventListener('click', back);
    function back() {
        pdtDetalhesVhd3220DFullColorP.classList.remove('active');
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
