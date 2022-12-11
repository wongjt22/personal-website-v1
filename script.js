const contentFade = () => {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var visibleTop = reveals[i].getBoundingClientRect().top; 
    var fadeInPoint = 10;

    if (visibleTop < windowHeight - fadeInPoint) {
      reveals[i].classList.add('visible');
    } else {
      reveals[i].classList.remove('visible');
    }
  }
}

var lastScroll = 0;
var navbar = document.querySelectorAll('.navbar');
const navbarFade = () => {
  var newScroll = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (newScroll > lastScroll){
    navbar.classList.remove('visible');
  } else {
    navbar.classList.add('visible');
  }
  lastScroll = newScroll <= 0 ? 0 : newScroll; 
}


window.addEventListener('scroll', contentFade);
window.addEventListener('load', contentFade);
window.addEventListener('scroll', navbarFade);


