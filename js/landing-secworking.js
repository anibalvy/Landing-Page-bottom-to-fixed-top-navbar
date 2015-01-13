    var	checkStickyMenu = function() {
    	if ($(window).scrollTop() > $("#divsecnav").offset().top && $(window).width() > 991){ 
    		$("#secondary-nav").addClass("sticky")
    	} 
    	else { 
    		if ($("#secondary-nav").hasClass("sticky")){
    			$("#secondary-nav").removeClass("sticky");
    		}
    	}
    }
    $(window).on("scroll", function() {
    	checkStickyMenu();
    	console.log("scroll " + "win scroll: " + $(window).scrollTop() + " secnav: " + parseInt($("#divsecnav").offset().top));
    })
    checkStickyMenu();