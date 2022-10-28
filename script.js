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

/* const navbarFade = () => {
  var navbar = document.querySelector('.navbar');
  var scroll = 0;
  var newScroll = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  if (newScroll < scroll) {
    navbar.classList.remove('visible');
  } else {
    navbar.classList.add('visible');
  }
  scroll = newScroll <= 0 ? 0 : newScroll;
}
 */

window.addEventListener('scroll', contentFade);
window.addEventListener('load', contentFade);

// window.addEventListener('scroll', navbarFade);


