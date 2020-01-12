window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 690 || document.documentElement.scrollTop > 690) {
    document.getElementById("navbar").style.display = 'none';

  } else {
    document.getElementById("navbar").style.display = 'initial';
  }
}
