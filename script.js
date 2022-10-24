const fadeIn = () => {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var visibleTop = reveals[i].getBoundingClientRect().top; 
    var fadeInPoint = 10;

    if (visibleTop < windowHeight - fadeInPoint) {
      reveals[i].classList.add('visible');
      console.log("TEST");
    } else {
      reveals[i].classList.remove('visible');
    }
  }
}

window.addEventListener('scroll', fadeIn);

