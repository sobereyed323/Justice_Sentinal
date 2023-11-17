/*
 This is the new JavaScript to add interactivity to the website.
 It includes animations, scroll effects, and responsive navigation.
*/

//Function to animate navigation bar on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.fontSize = "30px";
  }
}

//Function to smoothly scroll to different sections of the website upon clicking links in the navigation bar
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if(target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

//Function to animate elements when they come into view 
$(window).scroll(function() {
    $(".animation-element").each(function() {
        var position = $(this).offset().top;
        var winTop = $(window).scrollTop();

        if (position < winTop + 600) {
            $(this).addClass("animate");
        }
    });
});

//Responsive navigation:
 $('.navbar-toggler').on('click', function(event) {
     event.preventDefault();
     $(this).closest('.navbar-minimal').toggleClass('open');
 })
