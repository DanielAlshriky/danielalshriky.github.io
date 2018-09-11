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
        $('.header-slider-area').owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
        });

        // Slider-area JS
        $('.product-slide-box').owlCarousel({
        	items: 4,
        	loop: true,
            autoplay: true,
            margin: 30,
            dots: true,
            nav: true,
            navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots: true
                },
                450:{
                    items:2,
                    nav:false,
                },
                992:{
                    items:4,
                }
            }
        });

        // off-canvs-menu
        $(".menu-triger").on("click", function() {
            $(".off-canvs-menu").toggleClass("acive");
            return false;
        });

        $(".close-btn i").on("click", function() {
            $(".off-canvs-menu, .off-canvs-icon").removeClass("acive");
        });


        $(".menu-triger").on("click", function() {
            $(".off-canvs-icon").toggleClass("acive");
        });


        $(".filter-icon").on("click", function() {
            $(".filter-secton").toggleClass("open-acive");
        });

        // Video-popup
         $('.video-box').magnificPopup({
            type:'iframe',
        });


    });


    jQuery(window).load(function(){


    });


}(jQuery));	