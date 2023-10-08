const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const corFundoPadrao = ''; 

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.style.backgroundColor = 'black'; 
  } else {
    header.style.backgroundColor = corFundoPadrao; 
  }
});

getTamanhoTela = () => {
  const tamanhoTela = window.innerHeight;
  const pagina1 = document.querySelector('#first-page');
  const pagina2 = document.querySelector('#second-page');

  pagina1.style.height = tamanhoTela + 'px';
  pagina2.style.height = tamanhoTela + 'px';
}

getTamanhoTela();

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});