$(document).ready(function(){
    $('.feed__carousel').slick({
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.svg"></button>',
        slidesToShow: 1,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
            }
        ]
      });
    
  });