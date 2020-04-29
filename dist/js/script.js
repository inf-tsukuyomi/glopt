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
    // modal
      $('.modal__close').on('click', function(){
        $('.overlay, #thanks').fadeOut('slow');
    });

      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
          $('.up').fadeIn();
        } else {
          $('.up').fadeOut();
        }
    });

    $('input[name=phone]').mask("+7(999)999-99-99");

    function validateForms(form){
        $(form).validate({
          rules: {
            name: "required",
            text: "required",
            phone: "required",
            email: {
              required: true,
              email: true 
            }
          },
          messages: {
            text: "Пожалйуста, введите своё сообщение",
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите свой номер",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильный формат почты"
            }
          }
        });
    };
  
    validateForms('#consultation-form')
    validateForms('#consultation form')
    validateForms('#order form')
    
    $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
          $(this).find("input").val("");
          $('.overlay, #thanks').fadeIn('fast');
          $('form').trigger('reset');
      });
      return false;
    });
    new WOW().init();

    $('.header__hamburger').on('click', function(){
      $('.header__navbar').toggleClass('header__navbar_active');
      $('.header__hamburger').toggleClass('header__hamburger_active');
  });
  });