// Menu
(function(d) {

  const btnMenu = d.querySelector('.menu-btn');
  let menu = d.querySelector('.menu');

  btnMenu.addEventListener('click', function() {
    btnMenu.firstElementChild.classList.toggle('none');
    btnMenu.lastElementChild.classList.toggle('none');

    menu.classList.toggle('is-active');
  }, false);

  d.addEventListener('click', function(e) {
    if(!e.target.matches('.menu a')) return false;
    
    btnMenu.firstElementChild.classList.remove('none');
    btnMenu.lastElementChild.classList.add('none');

    menu.classList.remove('is-active');
  });

})(document);
