function mainBannerHeight(){

 if ($("body").attr("id") == "homePage") {

        var heightwindow = $(window).height();
        $('.main-banner').css('height', heightwindow+'px');
        $('#canvas-basic').css('height', heightwindow+'px');

    } else {

        $('.main-banner').css('height', 600+'px');
        $('#canvas-basic').css('height', 600+'px');

    }
}




$(document).ready( function(){
       
       mainBannerHeight();

        $(".main-message-text").click(function() {
             $('html, body').animate({
        scrollTop: $(".about-content").offset().top
    }, 700);

        });

});

$(window).resize(function() {

    mainBannerHeight();

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