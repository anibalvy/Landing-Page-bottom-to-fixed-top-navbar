    var	checkStickyMenu = function() {
    	if ($(window).scrollTop() > $("#divsecnav").offset().top){ 
    		 $("#secondary-nav").addClass("sticky")
            // $("#secondary-nav").affix({
            //   offset: {top: 50}
            // });
    	} 
    	else { 
    		// if ($("#secondary-nav").hasClass("sticky")){
    		 	$("#secondary-nav").removeClass("sticky");
    		// }

    	}
    }
    $(window).on("scroll", function() {
    	checkStickyMenu();
    	console.log("scroll " + "win scroll: " + $(window).scrollTop() + " secnav: " + parseInt($("#divsecnav").offset().top));
    })
    checkStickyMenu();