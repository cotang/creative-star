$(document).ready(function(){


/*=================================
||          Hamburger - jquery
==================================*/

  $('#hamburgerToggle').click(function(e){
    e.preventDefault();
    // if ($(this).attr("xlink:href", "#close")) {
    // 	$(this).removeAttr("xlink:href").attr("xlink:href", "#hamburger");
    // };
    var menu = $('.page-header__menu');
    $(this).toggleClass('btn--close btn--hamburger');
    $(menu).toggleClass('nav-invisible nav-visible');    
  });



/*=================================
||          add/remove Class
==================================*/
    var changeStyle = $('.page-header');
    var top = $('.btn--top');
    function scroll() {
        if ($(window).scrollTop() > 700) {
            changeStyle.addClass('page-header--narrow');
            top.addClass('show-top');
        } else {
            changeStyle.removeClass('page-header--narrow');
            top.removeClass('show-top');
        }
    }
    document.onscroll = scroll;




});