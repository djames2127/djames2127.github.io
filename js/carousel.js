// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $("#quote-carousel").carousel({
    pause: true,
    interval: 4000,
  });
});// JavaScript Document

$(document).ready(function() {
  //Set the carousel options
  $("#barx-carousel").carousel({
    pause: true,
    interval: 10000,
  });
});// JavaScript Document


  $(document).ready(function() {  
  		 $("#barx-carousel").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $("#barx-carousel").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  
	});  
