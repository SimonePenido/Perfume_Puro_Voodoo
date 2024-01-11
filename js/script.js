(function($) {

  "use strict";

  var initSlider = function () {

    var swiper = new Swiper(".review-swiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  };

  $(document).ready(function(){  

        //  Header sticky
        const headerSticky = function() {
          const header = document.querySelector('#header');
          if (!header) return;      
          const trigHeight = 1;

          window.addEventListener('scroll', function () {
              let tj = window.scrollY;

              if (tj > trigHeight) {
                  header.classList.add('sticky');
              } else {
                  header.classList.remove('sticky');
              }
          });
      };
            
      AOS.init({
          duration: 1200,
          once: true,
      })

      $(".youtube").colorbox({
          iframe: true,
          innerWidth: 960,
          innerHeight: 585
      });


      // document ready
      $(document).ready(function () {
        initSlider();
      }); // document ready

      

  }); // End of a document
      
})(jQuery);