
/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 10) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


// jQuery to switch the navbar icon onClick
// Get the button, and when the user clicks on it, execute myFunction


$(function() {
  var box = $('.navbar-custom ');
  var button = $('.navbar-custom button');
  button.on('click', function(){
	box.toggleClass('active');
    if(box.hasClass('active'))
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    else
       $(".navbar-fixed-top").addClass("top-nav-collapse");
  });
});


$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(500);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('.navbar-collapse li').on('click', function(){
        $("#menu").hide();
        $("#nav-icon3").removeClass("open");
    });
	});
});


var target = document.getElementById('target');
var titles = [
    'Get Started',
    'Kāishǐ',
    'Get Started',
	'Todaṅkum',
	'Get Started',
	'Bermula',
];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

newTitle(); 

