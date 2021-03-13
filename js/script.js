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

});


let aboutoff = $('#about-us').offset().top;

//scroll to sections
$('.nav-item a').on('click', function (e) {
  e.preventDefault();
  var target = this.hash,
    $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
    window.location.hash = target;
  });
});
//scrolltopbutton 
var toggleScrollToTopButton = function () {

  if ($(window).scrollTop() > 1000) {
    $('.scrolltotop ').fadeIn();
  } else {
    $('.scrolltotop ').fadeOut();
  }
}
$('.scrolltotop ,.navbar-brand ').each(function () {
  $(this).click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

$(window).on('scroll', function () {
  toggleScrollToTopButton();
  togglenavcolor();
})

// add color to navbar
var togglenavcolor = function () {
  if ($(window).scrollTop() > 0) {
    $('#navbar').addClass('navcolor');
  }
  else {
    $('#navbar').removeClass('navcolor');
  }
}