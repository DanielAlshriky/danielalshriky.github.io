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


function profileLinks(){
    var profilelink = $(".My-download");
    tl = new TimelineLite();

    tl
   .from(profilelink [0], 0.2, {y:-30, opacity:0})
   .from(profilelink [1], 0.2, {y:-30, opacity: 0})
   .from(profilelink [2], 0.2, {y:-30, opacity: 0})
   .from(profilelink [3], 0.2, {y:-30, opacity: 0})
   .from(profilelink [4], 0.2, {y:-30, opacity: 0});
}

function fullHeightWindow(){
    var heightwindow = $(window).height();
    $('.mainBanner').css('height', heightwindow+'px');
    $('#canvas-basic').css('height', heightwindow+'px');
}

$(document).ready( function(){
       fullHeightWindow();
       profileLinks();
});

$(window).resize(function() {
    fullHeightWindow();
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