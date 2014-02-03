// menu......................
jQuery(document).ready(function() {
        jQuery(".menu li").hover( function(){
			jQuery(this).children("ul").stop(true,true).slideDown(1000);
			
			}
			,function(){
			jQuery(this).children("ul").slideUp(500);
				
			}
	);
// moseover hover........................
jQuery(".menu li").hover(
    function() {
      jQuery(this).find("span").stop().animate({ opacity: 1 });
    },
    function() {
      jQuery(this).find("span").stop().animate({ opacity: 0 }); 
    });
// ........................................
jQuery(".menu li").hover(
	function(){
		jQuery(this).find("a").stop().css({"color":"#C7C4C4"})
	},
	function(){
		jQuery(this).find("a").stop().css({"color":"#000"})
	}
	);
// FIXED MENU WHEN SCROLLING PAGE............

var nav=jQuery(".menu");
jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop()>116){
		nav.addClass("f-nav");
	}else{
		nav.removeClass("f-nav");
	}
});
// menu scrolling............................
	jQuery('#nav').localScroll(900);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

	jQuery('#home').parallax("0%", 0.1);
	jQuery('#about').parallax("0%", 0.1);
	jQuery('#mywork').parallax("0%", 0.3);
	jQuery('#gallery').parallax("0%", 0.3);
	

//gallery............................................................. 
// imgHolder.mouseover(function(){

// 		jQuery(this).css({

// 			left : Math.random(-25,+25),
// 			top  : Math.random(-25,+25)
// 		});
// 	});

// 	thumbnail.click(function(){

// 		darkBox.css({display:'block'});

// 		var thumbHref = jQuery(this).children().attr('href');

// 		jQuery('section.darkbox img').attr('src',thumbHref);

// 		return false;
// 	});

});
