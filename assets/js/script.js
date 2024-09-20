function openIg() {
    window.open("https://www.instagram.com/axsecurity", "_blank", 'noopener, noteferrez');
}

let copy = document.querySelector('.sliderClientes').cloneNode(true);
document.querySelector('.clientes').appendChild(copy);