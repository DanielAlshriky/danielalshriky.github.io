// Scroll To Animation

$('a[href*="#"]')
  .click(function(event) {
      var target = $(this.hash);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          var $target = $(target);
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
          };
        });
      }
    });




function mainBannerHeight(){

 if ($("body").attr("id") == "homePage") {

        var heightwindow = $(window).height();
        $('.main-banner').css('height', heightwindow+'px');
        $('#canvas-basic').css('height', heightwindow+'px');

    } else {

        $('.main-banner').css('height', 450+'px');
        $('#canvas-basic').css('height', 450+'px');

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