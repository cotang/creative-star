/*
  Поиск ближайшего родителя по селектору
  https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README-ru.md#1.6
*/

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}




/*=================================
||      WOW
==================================*/

new WOW().init();


/*=================================
||      Radial Progressive Bar
==================================*/

  $('.circlechart').percentcircle({
  animate : true,
  diameter : 100,
  guage: 3,
  bgColor: '#e64e4e',
  fillColor: '#e64e4e',
  percentSize: '18px',
  percentWeight: 'normal'
  });


/*=================================
||      Filter
==================================*/

  // filter items on button click
  $('.portfolio__category').on( 'click', function() {
    var filterValue = $(this).attr('data-filter');
    var filteredPic = $(this).closest('.portfolio').find('.portfolio__pic');
    filteredPic.not(filterValue).fadeOut(400);
    filteredPic.filter(filterValue).fadeIn(400);
  });


