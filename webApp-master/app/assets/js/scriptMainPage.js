
$(document).ready(function(){
    	
    //******* Main Page *******//
    
    $("#c1").click(function (e){
            $('html, body').animate({
                    scrollTop: $(".c1").offset().top
                }, 400);
                e.preventDefault();
            });
    
    $("#c2").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c2").offset().top
                }, 400);
                e.preventDefault();
            });

    $("#c3").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c3").offset().top
                }, 400);
                e.preventDefault();
            });
            
     $("#c4").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c4").offset().top
                }, 400);
                e.preventDefault();
            });
            
     $("#c5").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c5").offset().top
                }, 400);
                e.preventDefault();
            });

            
     //Checking of scroll from top
	$(window).scroll(function(e){
            if ($(this).scrollTop() > 700) {
                $('#scrollToTop').fadeIn(800);
                $('#frstScreen').css('display', 'none').fadeOut();
                e.preventDefault();
            } else {
                $('#scrollToTop').fadeOut().css('display', 'none');
                $('#frstScreen').fadeIn(1000).css('display', 'block');
                e.preventDefault();
            }
	});
	
	//Click event to scroll to top
	$('#scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0}, 500);
            return false;
	});   
        
        //Navigation menu on mobile devices        
        var $menuLeft = $('.pushmenu-left');
        var $nav_list = $('#nav_list');

        $nav_list.click(function() {
            $(this).toggleClass('active');
            $('.pushmenu-push').toggleClass('pushmenu-push-toright');
            $menuLeft.toggleClass('pushmenu-open');
        });
	
});


