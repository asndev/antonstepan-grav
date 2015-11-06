;
(function($) {

  /*---------------------------------------------------- */
  /* Preloader
  ------------------------------------------------------ */ 
  $(window).load(function() {

  // will first fade out the loading animation 
    $("#status").fadeOut("slow"); 

    // will fade out the whole DIV that covers the website. 
    $("#preloader").delay(500).fadeOut("slow").remove();     
    
    $('.js #hero .hero-image img').addClass("animated fadeInUpBig"); 
    $('.js #hero .buttons a.trial').addClass("animated shake");    

  });


  /*----------------------------------------------------*/
  /* Smooth Scrolling
  ------------------------------------------------------ */
  $('.smoothscroll').on('click', function (e) {

  e.preventDefault();

  var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });

  });


})(jQuery);