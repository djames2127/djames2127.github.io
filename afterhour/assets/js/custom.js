(function($){

	"use strict";

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('.page-loader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		var moduleHero      = $('.module-hero'),
			modules         = $('.module-hero, .module, .module-sm'),
			moduleSlideshow = $('.backstretch'),
			cdDate          = $('#countdown').attr('data-countdown'),
			mobileTest;

		/* ---------------------------------------------- /*
		 * Typed JS for Title tag
		/* ---------------------------------------------- */

		$("#title").typed({
			strings: ["Hello!", "You are Welcome!", "Coming Soon!"],
			typeSpeed: 300,
			backDelay: 900,
			loop: true,
			cursorChar: "|",
			contentType: 'html',
			loopCount: false
		});

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

		/* ---------------------------------------------- /*
		 * Setting background of modules
		/* ---------------------------------------------- */

		modules.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modules.css({'background-attachment': 'scroll'});
		}

		/* ---------------------------------------------- /*
		 * Slideshow background
		/* ---------------------------------------------- */

		if (moduleSlideshow.length > 0) {
			moduleSlideshow.backstretch([
				  "assets/images/module-3.jpg"
				, "assets/images/module-4.jpg"
				, "assets/images/module-5.jpg"
			], {duration: 3000, fade: 750});
		}

		/* ---------------------------------------------- /*
		 * Youtube video background
		/* ---------------------------------------------- */

		$(function(){
			$('.video-player').mb_YTPlayer();
		});

		/* ---------------------------------------------- /*
		 * Countdown
		/* ---------------------------------------------- */

		$('#countdown').countdown(cdDate, function(event) {
			$(this).html(event.strftime(''
				+ '<div><div>%D</div><i>days</i></div>'
				+ '<div><div>%H</div><i>hours</i></div>'
				+ '<div><div>%M</div><i>minutes</i></div>'
				+ '<div><div>%S</div><i>seconds</i></div>'
			));
		});

		/* ---------------------------------------------- /*
		 * Team Slider
		/* ---------------------------------------------- */

		$('.team-carousel').owlCarousel({
			items: 4,
			stopOnHover:     true,
			singleItem:      false,
			autoHeight:      true,
			navigation:      false,
			pagination:      false,
			slideSpeed:      400,
			paginationSpeed: 1000,
			goToFirstSpeed:  2000,
			autoPlay:        3000,
			navigationText: [
				'<span class="arrow_left"></span>',
				'<span class="arrow_right"></span>'
			],
		});

		/* ---------------------------------------------- /*
		 * WOW Animation
		/* ---------------------------------------------- */

		var wow = new WOW({
			mobile: false
		});

		wow.init();

		/* ---------------------------------------------- /*
		 * Aminate social links
		/* ---------------------------------------------- */

		$('.social-icons-animated a').each(function(i) {
			$(this).attr('data-wow-delay', i * 0.15 + 's');
		});

		/* ---------------------------------------------- /*
		 *
		/* ---------------------------------------------- */

		var heroDivider = $('#hero-divider i');

		$(window).scroll(function() {
			if ( $(window).scrollTop() > 10 ) {
				heroDivider.css( 'line-height', '70px');
			} else {
				heroDivider.css( 'line-height', '50px');
			}
		}).scroll();

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$('body').fitVids();

		/* ---------------------------------------------- /*
		 * Google Map
		/* ---------------------------------------------- */

		var mapID = $('#map');
		var isDraggable = Math.max($(window).width(), window.innerWidth) > 480 ? true : false;

		mapID.each(function() {

			var GMaddress = mapID.attr('data-address');
			var GMcontact = mapID.attr('data-contact');

			mapID.gmap3({
				action: "init",
				marker: {
					address: GMaddress,
					data:    GMcontact,
					options: {
						icon: 'assets/images/map-icon.png'
					},
					events:{
						mouseover: function(marker, event, context){
							var map = $(this).gmap3("get"),
							infowindow = $(this).gmap3({get:{name:"infowindow"}});

							if (infowindow){
								infowindow.open(map, marker);
								infowindow.setContent(context.data);
							} else {
								$(this).gmap3({
									infowindow:{
										anchor:marker,
										options:{content: context.data}
									}
								});
							}
						},
						mouseout: function(){
							var infowindow = $(this).gmap3({get:{name:"infowindow"}});
							if (infowindow){
								infowindow.close();
							}
						}
					}
				},
				map: {
					options: {
						zoom: 16,
						zoomControl: true,
						zoomControlOptions: {
							style: google.maps.ZoomControlStyle.SMALL
						},
						mapTypeControl: true,
						scaleControl: false,
						scrollwheel: false,
						streetViewControl: false,
						draggable: isDraggable,
						styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
					}
				}
			});

		});

		/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.inner-scroll').on('click', function(e) {
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing');
			e.preventDefault();
		});

	});

})(jQuery);

// make some waves.
var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/100) + "s";
}

ocean.appendChild(docFrag);




  "use strict";

  var lava0;
  var ge1doot = {
    screen: {
      elem:     null,
      callback: null,
      ctx:      null,
      width:    0,
      height:   0,
      left:     0,
      top:      0,
      init: function (id, callback, initRes) {
        this.elem = document.getElementById(id);
        this.callback = callback || null;
        if (this.elem.tagName == "CANVAS") this.ctx = this.elem.getContext("2d");
        window.addEventListener('resize', function () {
          this.resize();
        }.bind(this), false);
        this.elem.onselectstart = function () { return false; }
        this.elem.ondrag        = function () { return false; }
        initRes && this.resize();
        return this;
      },
      resize: function () {
        var o = this.elem;
        this.width  = o.offsetWidth;
        this.height = o.offsetHeight;
        for (this.left = 0, this.top = 0; o != null; o = o.offsetParent) {
          this.left += o.offsetLeft;
          this.top  += o.offsetTop;
        }
        if (this.ctx) {
          this.elem.width  = this.width;
          this.elem.height = this.height;
        }
        this.callback && this.callback();
      }
    }
  }

  // Point constructor
  var Point = function(x, y) {
    this.x = x;
    this.y = y;
    this.magnitude = x * x + y * y;
    this.computed = 0;
    this.force = 0;
  };
  Point.prototype.add = function(p) {
    return new Point(this.x + p.x, this.y + p.y);
  };

  // Ball constructor
  var Ball = function(parent) {
    var min = .1;
    var max = 1.5;
    this.vel = new Point(
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.025), (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
    );
    this.pos = new Point(
      parent.width * 0.2 + Math.random() * parent.width * 0.6,
      parent.height * 0.2 + Math.random() * parent.height * 0.6
    );
    this.size = (parent.wh / 15) + ( Math.random() * (max - min) + min ) * (parent.wh / 15);
    this.width = parent.width;
    this.height = parent.height;
  };

  // move balls
  Ball.prototype.move = function() {

    // bounce borders
    if (this.pos.x >= this.width - this.size) {
      if (this.vel.x > 0) this.vel.x = -this.vel.x;
      this.pos.x = this.width - this.size;
    } else if (this.pos.x <= this.size) {
      if (this.vel.x < 0) this.vel.x = -this.vel.x;
      this.pos.x = this.size;
    }

    if (this.pos.y >= this.height - this.size) {
      if (this.vel.y > 0) this.vel.y = -this.vel.y;
      this.pos.y = this.height - this.size;
    } else if (this.pos.y <= this.size) {
      if (this.vel.y < 0) this.vel.y = -this.vel.y;
      this.pos.y = this.size;
    }

    // velocity
    this.pos = this.pos.add(this.vel);
    console.log(this.vel);

  };

  // lavalamp constructor
  var LavaLamp = function(width, height, numBalls, c0, c1) {
    this.step = 5;
    this.width = width;
    this.height = height;
    this.wh = Math.min(width, height);
    this.sx = Math.floor(this.width / this.step);
    this.sy = Math.floor(this.height / this.step);
    this.paint = false;
    this.metaFill = createRadialGradient(width, height, width, c0, c1);
    this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
    this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
    this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
    this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
    this.grid = [];
    this.balls = [];
    this.iter = 0;
    this.sign = 1;

    // init grid
    for (var i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
      this.grid[i] = new Point(
        (i % (this.sx + 2)) * this.step, (Math.floor(i / (this.sx + 2))) * this.step
      )
    }

    // create metaballs
    for (var k = 0; k < 10; k++) {
      this.balls[k] = new Ball(this);
    }
  };
  // compute cell force
  LavaLamp.prototype.computeForce = function(x, y, idx) {

    var force;
    var id = idx || x + y * (this.sx + 2);

    if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
      force = 0.06 * this.sign;
    } else {
      force = 0;
      var cell = this.grid[id];
      var i = 0;
      var ball;
      while (ball = this.balls[i++]) {
        force += ball.size * ball.size / (-2 * cell.x * ball.pos.x - 2 * cell.y * ball.pos.y + ball.pos.magnitude + cell.magnitude);
      }
      force *= this.sign
    }
    this.grid[id].force = force;
    return force;
  };
  // compute cell
  LavaLamp.prototype.marchingSquares = function(next) {
    var x = next[0];
    var y = next[1];
    var pdir = next[2];
    var id = x + y * (this.sx + 2);
    if (this.grid[id].computed === this.iter) {
      return false;
    }
    var dir, mscase = 0;

    // neighbors force
    for (var i = 0; i < 4; i++) {
      var idn = (x + this.ix[i + 12]) + (y + this.ix[i + 16]) * (this.sx + 2);
      var force = this.grid[idn].force;
      if ((force > 0 && this.sign < 0) || (force < 0 && this.sign > 0) || !force) {
        // compute force if not in buffer
        force = this.computeForce(
          x + this.ix[i + 12],
          y + this.ix[i + 16],
          idn
        );
      }
      if (Math.abs(force) > 1) mscase += Math.pow(2, i);
    }
    if (mscase === 15) {
      // inside
      return [x, y - 1, false];
    } else {
      // ambiguous cases
      if (mscase === 5) dir = (pdir === 2) ? 3 : 1;
      else if (mscase === 10) dir = (pdir === 3) ? 0 : 2;
      else {
        // lookup
        dir = this.mscases[mscase];
        this.grid[id].computed = this.iter;
      }
      // draw line
      var ix = this.step / (
          Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 2]) + (y + this.ply[4 * dir + 2]) * (this.sx + 2)].force) - 1) /
          Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 3]) + (y + this.ply[4 * dir + 3]) * (this.sx + 2)].force) - 1) + 1
        );
      ctx.lineTo(
        this.grid[(x + this.plx[4 * dir]) + (y + this.ply[4 * dir]) * (this.sx + 2)].x + this.ix[dir] * ix,
        this.grid[(x + this.plx[4 * dir + 1]) + (y + this.ply[4 * dir + 1]) * (this.sx + 2)].y + this.ix[dir + 4] * ix
      );
      this.paint = true;
      // next
      return [
        x + this.ix[dir + 4],
        y + this.ix[dir + 8],
        dir
      ];
    }
  };

  LavaLamp.prototype.renderMetaballs = function() {
    var i = 0, ball;
    while (ball = this.balls[i++]) ball.move();
    // reset grid
    this.iter++;
    this.sign = -this.sign;
    this.paint = false;
    ctx.fillStyle = this.metaFill;
    ctx.beginPath();
    // compute metaballs
    i = 0;
    //ctx.shadowBlur = 50;
    //ctx.shadowColor = "green";
    while (ball = this.balls[i++]) {
      // first cell
      var next = [
        Math.round(ball.pos.x / this.step),
        Math.round(ball.pos.y / this.step), false
      ];
      // marching squares
      do {
        next = this.marchingSquares(next);
      } while (next);
      // fill and close path
      if (this.paint) {
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        this.paint = false;
      }
    }
  };

  // gradients
  var createRadialGradient = function(w, h, r, c0, c1) {
    var gradient = ctx.createRadialGradient(
      w / 1, h / 1, 0,
      w / 1, h / 1, r
    );
    gradient.addColorStop(0, c0);
    gradient.addColorStop(1, c1);
    return gradient;
  };

  // main loop
  var run = function() {
    requestAnimationFrame(run);
    ctx.clearRect(0, 0, screen.width, screen.height);
    lava0.renderMetaballs();
  };
  // canvas
  var screen = ge1doot.screen.init("bubble", null, true),
      ctx = screen.ctx;
      screen.resize();
  // create LavaLamps
  lava0 = new LavaLamp(screen.width, screen.height, 100, "#f512b5", "#5f25b8");

  run();


window.addEventListener("resize", function(){
  lava0 = new LavaLamp(screen.width, screen.height, 100, "#f512b5", "#5f25b8");
});








