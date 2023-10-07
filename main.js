const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const corFundoPadrao = ''; 

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.style.backgroundColor = 'white'; 
  } else {
    header.style.backgroundColor = corFundoPadrao; 
  }
});

getTamanhoTela = () => {
  const tamanhoTela = window.innerHeight;
  const pagina1 = document.querySelector('#first-page-blue-sky');
  const pagina2 = document.querySelector('#second-page-yellow');

  pagina1.style.height = tamanhoTela + 'px';
  pagina2.style.height = tamanhoTela + 'px';
}

getTamanhoTela();