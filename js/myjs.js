$(document).ready( function(){

        var heightwindow = $(window).height();

        $('.main-banner').css('height', heightwindow+'px');
        $('#canvas-basic').css('height', heightwindow+'px');

        $(".main-message-text").on({
                'mouseover':function(){$(".main-text-about-me").animate({ "left": "0" }); 
             },'mouseleave':function(){ $(".main-text-about-me").animate({ "left": "-200px"}); 
              }
        });

        $(".main-message-text").click(function() {
             $('html, body').animate({
        scrollTop: $(".about-content").offset().top
    }, 700);

        });

});

$(window).resize(function() {
var heightwindow = $(window).height();
$('.main-banner').css('height', heightwindow+'px');
$('#canvas-basic').css('height', heightwindow+'px');
});



var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#27324b', '#27324b'],
                ['#27324b', '#00CDAC'],
                ['#0076d1', '#27324b']
            ]
        }
    }
});