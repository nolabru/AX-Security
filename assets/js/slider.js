let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
  nextImage();
}, 6000);

function nextImage(){
  count++;
  if(count > 4){
    count = 1;
  }
 
  document.getElementById('radio' + count).checked = true;

}

// txtSlide one
// txtSlide two
// txtSlide three


// window.revelar = ScrollReveal({reset:true,
//     easing: 'cubic-bezier(0.5, 0, 0, 1)'
// });

// revelar.reveal("#boasVindas", {
//     duration: 1000,
//     delay: 500,
//     distance: "50px",
//     origin: "top"
// });