    var checkStickyMenu = function() {
        if ($(window).scrollTop() > $("#secmenunavcontainer").offset().top){ 
             $("#secmenunav").addClass("navbar-fixed-top")
        } 
        else { 
                $("#secmenunav").removeClass("navbar-fixed-top");
        }
    }
    $(window).on("scroll", function() {
        checkStickyMenu();
        console.log("scroll " + "win scroll: " + $(window).scrollTop() + " secnav: " + parseInt($("#secmenunav").offset().top));
    })
    checkStickyMenu(); 
