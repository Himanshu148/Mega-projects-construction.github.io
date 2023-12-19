jQuery(document).ready(function($) {
    "use strict";
    $('#customers-testimonials').owlCarousel( {
            loop: true,
            center: true,
            items: 3,
            margin: 30,
            autoplay: true,
            dots:true,
        nav:true,
            autoplayTimeout: 5000,
        autoplayHoverPause:true,
        stopOnHover:true,
            smartSpeed: 850,
            navText: ['<i class="fa-regular fa-square-caret-left" style="font-size:40px;color:white"></i>','<i class="fa-regular fa-square-caret-right" style="font-size:40px;color:white"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 5
                }
            }
        });
    });
//--------------------------------------------------------endless video js
    window.onload = function() {
        const video = document.getElementById('background-video');
        video.play();
      };
//--------------------------------------------------------card carousel js
      $(document).ready(function(){
        $('.carousel').slick({
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots:true,
          centerMode: true,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              // centerMode: true,
      
            }
      
          }, {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              infinite: true,
      
            }
          },  {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          }]
        });
      });