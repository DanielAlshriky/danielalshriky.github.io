(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        // sticky
        var wind = $(window);
        var sticky = $('#sticky-header');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 1) {
                sticky.removeClass('sticky');
            } else {
                sticky.addClass('sticky');
            }
        });

        // Slider-area JS
        $('.slider-items-active').owlCarousel({
        	items: 1,
        	loop: true,
            autoplay: false,
            dots: true,
        });

        // off-canvs-menu
        $(".menu-triger").on("click", function() {
            $(".off-canvs-menu").toggleClass("acive");
            return false;
        });

        $(".close-btn i").on("click", function() {
            $(".off-canvs-menu").removeClass("acive");
        });
       
        


    });


    jQuery(window).load(function(){


    });


}(jQuery));	