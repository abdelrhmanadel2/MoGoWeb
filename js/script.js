$(document).ready(function () {
  $('.autoplay').slick({
    // centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
  $('.loader').fadeOut(2000);
  if($(window).scrollTop() < (aboutoff-30)){
    $("nav ul li.active").removeClass('active');
  
    $(`nav ul li.home`).addClass('active');
  }
});


let aboutoff = $('#about-us').offset().top;

//add active class to navlink
$('.nav-item a').on('click',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
      window.location.hash = target;
  });
});

  
var toggleScrollToTopButton = function () {
  
  if ( $(window).scrollTop() > 1000) {
        $('.scrolltotop ').fadeIn();
    } else {
        $('.scrolltotop ').fadeOut();
    } 
}
var addClassOnScroll = function () {
  
  $('header,section ,footer').each(function (i, elem) {

      var offsetTop = $(elem).offset().top;  

      if(  $(window).scrollTop() > (parseInt (offsetTop)-250) &&  $(window).scrollTop() < ( offsetTop)) {

          var elemId = $(elem).attr('id')

          $("nav ul li.active").removeClass('active');

          $(`nav ul li.${elemId}`).addClass('active');

      }
    
      
  });
  
};

//scrolltopbutton
$('.scrolltotop ,.navbar-brand ').each(function () {
  $(this).click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

$(window).on('scroll',function(){
 
  toggleScrollToTopButton();
  togglenavcolor();
  addClassOnScroll();
  if($(window).scrollTop() < (aboutoff-30)){
    $("nav ul li.active").removeClass('active');
  
    $(`nav ul li.home`).addClass('active');
  }
})

// add color to navbar
var togglenavcolor=function () {
  let windowscroll = $(window).scrollTop();

  if ( $(window).scrollTop() > 0)  {
    $('#navbar').addClass('navcolor');
  

  }
  else {
    $('#navbar').removeClass('navcolor');
  }
  

}