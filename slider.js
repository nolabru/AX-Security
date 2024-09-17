const secao = document.getElementById('sctOne');
const back = document.querySelector('.sliderBtn.back');
const go = document.querySelector('.sliderBtn.go');

go.addEventListener('click', () => trocarSlide(1));
back.addEventListener('click', () => trocarSlide(-1));

let currentIndex = 0;

function trocarSlide(direction) {
    const imgs = [
        'url(axBanner1.jpg)',
        'url(axBanner2.jpg)',
        'url(axBanner3.jpg)'
    ];

    const boasVindas = document.getElementById('boasVindas');
    boasVindas.classList.add('off');

    // Atualiza o índice com base na direção
    currentIndex = (currentIndex + direction + imgs.length) % imgs.length;

    // Aplica a imagem de fundo ao elemento `secao`
    if (secao) {
        secao.style.backgroundImage = imgs[currentIndex];
    }
}