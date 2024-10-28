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

function blockBody() {
    body.classList.add('active');
}
function segDt() {
    const detalheBox = document.querySelector('.svcDetalhes');
    const toggleDetalhes = document.querySelector('.toggleDetalhes');   
    blockBody();
    detalheBox.classList.add('active');
    toggleDetalhes.addEventListener('click', back);
    function back() {
        detalheBox.classList.remove('active');
        body.classList.remove('active');
    }
};
function alaDt() {
    const detalheBoxAla = document.querySelector('.svcDetalhes.ala');
    const toggleDetalhesAla = document.querySelector('.toggleDetalhes.ala');
    blockBody();
    detalheBoxAla.classList.add('active');
    toggleDetalhesAla.addEventListener('click', back);
    function back() {
        detalheBoxAla.classList.remove('active');
        body.classList.remove('active');
    }
}
function cerDt() {
    const detalheBoxCer = document.querySelector('.svcDetalhes.cer');
    const toggleDetalhesCer = document.querySelector('.toggleDetalhes.cer');
    blockBody();
    detalheBoxCer.classList.add('active');
    toggleDetalhesCer.addEventListener('click', back);
    function back() {
        detalheBoxCer.classList.remove('active');
        body.classList.remove('active');
    }
}
function istDt() {
    const detalheBoxIst = document.querySelector('.svcDetalhes.ist');
    const toggleDetalhesIst = document.querySelector('.toggleDetalhes.ist');
    blockBody();
    detalheBoxIst.classList.add('active');
    toggleDetalhesIst.addEventListener('click', back);
    function back() {
        detalheBoxIst.classList.remove('active');
        body.classList.remove('active');
    }
}
function acsDt() {
    const detalheBoxAcs = document.querySelector('.svcDetalhes.acs');
    const toggleDetalhesAcs = document.querySelector('.toggleDetalhes.acs');
    blockBody();
    detalheBoxAcs.classList.add('active');
    toggleDetalhesAcs.addEventListener('click', back);
    function back() {
        detalheBoxAcs.classList.remove('active');
        body.classList.remove('active');
    }
}
function evtDt() {
    const detalheBoxEvt = document.querySelector('.svcDetalhes.evt');
    const toggleDetalhesEvt = document.querySelector('.toggleDetalhes.evt');
    blockBody();
    detalheBoxEvt.classList.add('active');
    toggleDetalhesEvt.addEventListener('click', back);
    function back() {
        detalheBoxEvt.classList.remove('active');
        body.classList.remove('active');
    }
    const tpEvtBtn = document.getElementById('tpEvtBtn');
    tpEvtBtn.addEventListener('click', eventos);

    function eventos() {
        const tpEvt = document.getElementById('tpEvt');
        const toggleEvt = document.getElementById('toggleEvt');
        const evtCardDetalhes = document.querySelector('.svcCardDetalhes.evt');

        tpEvt.classList.add('active');
        evtCardDetalhes.classList.add('off');

        toggleEvt.addEventListener('click', back);

        function back() {
            tpEvt.classList.remove('active');
            evtCardDetalhes.classList.remove('off');
        }
    }
}
function axcDt() {
    const detalheBoxAxc = document.querySelector('.svcDetalhes.axc');
    const toggleDetalhesAxc = document.querySelector('.toggleDetalhes.axc');
    blockBody();
    detalheBoxAxc.classList.add('active');
    toggleDetalhesAxc.addEventListener('click', back);
    function back() {
        detalheBoxAxc.classList.remove('active');
        body.classList.remove('active');
    }
}
function camDt() {
    const detalheBoxCam = document.querySelector('.svcDetalhes.cam');
    const toggleDetalhesCam = document.querySelector('.toggleDetalhes.cam');
    blockBody();
    detalheBoxCam.classList.add('active');
    toggleDetalhesCam.addEventListener('click', back);
    function back() {
        detalheBoxCam.classList.remove('active');
        body.classList.remove('active');
    }
}