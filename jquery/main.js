// START PUSH-DOWN NAVBAR MENU

var selectBody = $('body');
var selectNavbarCollapse = $('.navbar-collapse');

var heightNavbarCollapsed = $('.navbar').outerHeight(true);
var heightNavbarExpanded = 0;

paddingSmall();

selectNavbarCollapse.on('show.bs.collapse', function () {
  if (heightNavbarExpanded == 0 ) heightNavbarExpanded = heightNavbarCollapsed + $(this).outerHeight(true);
  paddingGreat();
})
selectNavbarCollapse.on('hide.bs.collapse', function () {
  paddingSmall();
})

$(window).resize( function () {
  if (( document.documentElement.clientWidth > 500 ) && selectNavbarCollapse.hasClass('in') ) {
    selectNavbarCollapse.removeClass('in').attr('aria-expanded','false');
    paddingSmall();
  }
});

function paddingSmall() {
  selectBody.css('padding-top', heightNavbarCollapsed + 'px');
}
function paddingGreat() {
  selectBody.css('padding-top', heightNavbarExpanded + 'px');
}

// END PUSH-DOWN NAVBAR MENU



// START VENDOR-ISOTOPE

$(document).ready(function () {


  let $btns = $('.work-section-1 .button-group button');


  $btns.click(function (e) {

      $('.work-section-1 .button-group button').removeClass('active');
      e.target.classList.add('active');

      let selector = $(e.target).attr('data-filter');
      $('.work-section-1 .grid').isotope({
          filter: selector
      });

      return false;
  })


});

// END VENDOR-ISOTOPE

// START SLICK CAROUSEL

$(function(){

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplayspeed: 50,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});


// END SLICK CAROUSEL

// START SLICK CAROUSEL SWIPE 

$('.carousel').on('touchstart', function(event){
  const xClick = event.originalEvent.touches[0].pageX;
  $(this).one('touchmove', function(event){
      const xMove = event.originalEvent.touches[0].pageX;
      const sensitivityInPx = 5;

      if( Math.floor(xClick - xMove) > sensitivityInPx ){
          $(this).carousel('next');
      }
      else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
          $(this).carousel('prev');
      }
  });
  $(this).on('touchend', function(){
      $(this).off('touchmove');
  });
});

// END SLICK CAROUSEL SWIPE 


// START WOW.JS 

new WOW().init();

// END WOW.JS 


