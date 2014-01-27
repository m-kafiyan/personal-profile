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

});
