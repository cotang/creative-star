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

// new WOW().init();


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
||      Isotope
==================================*/

  // init Isotope
  var $container = $('#isotope').isotope({
    // options
      itemSelector: '.portfolio__pic'
  });

  // filter items on button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });





/*=================================
||      Smooth Scrooling
==================================*/
  // $(function() {
  //     $('a[href*=#]:not([href=#])').click(function() {
  //         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //             var target = $(this.hash);
  //             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //             if (target.length) {
  //                 $('html,body').animate({
  //                   scrollTop: (target.offset().top - 62)//top navigation height
  //                 }, 1000);
  //                 return false;
  //             }
  //         }
  //     });
  // });
