let count = 1;
document.getElementById('radio1').checked = true;
const slider = document.querySelector('.slider'); 

let intervalId = setInterval(function() {
  if (window.innerWidth >= 1000) {
    nextImage();
  } else {
    clearInterval(intervalId);
  }
}, 3000);

if (window.innerWidth >= 1000) {
  slider.classList.add('finalizarSlider');
}

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById('radio' + count).checked = true;
}
