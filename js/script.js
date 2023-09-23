$(function(){
	var count = $("#slide li").length;
	
	var current = 1;
	
	var next = 2;
	
	var interval = 3000;
	
	var duration = 500;
	
	var timer;

	$("#slide li:not(:first-child)").hide();

	timer = setInterval(slideTimer, interval);
	
	function slideTimer(){
		$("#slide li:nth-child(+" + current + ")").fadeOut(duration);
		$("#slide li:nth-child(+" + next + ")").fadeIn(duration);

		current = next;
		next = ++next;

		if(next > count){
			next = 1;
		}
		$("#button li a").removeClass("target");
		
		$("#button li:nth-child("+ current +") a").addClass("target");
	}

	$("#button li a").click(function(){
		next = $(this).html();

		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		slideTimer();
		
		return false;
	});
});

/*

$(function(){
    $("#dig").hover(function(){
        $(this).append(
            "<div><p>" + $(this).children("img").attr("alt") + "<p></div>");
        
        $(this).children("div").stop().fadeIn(300);
        
        $(this).children("div").children("p").stop().animate({"top": 0},300);
        
        },function(){
        
        $(this).children("div").stop().fadeOut(300);
        
        $(this).children("div").children("p").stop().animate({"top": "10px"},300,function(){
            $(this).parent("div").remove();
        });
        
    });
});

*/





$(function(){
	$("#top area").click(function(){
		var target = $($(this).attr("href")).offset().top;
		
		
		$("html, body").animate({scrollTop: target}, 300);

		return false;

	})
});




$(function(){
	$("a[href^=#]:not([href=#])").click(function(){
		var target = $($(this).attr("href")).offset().top-100;
		
		
		$("html, body").animate({scrollTop: target}, 500);

		return false;
	});
});






$(function(){

	$("#arashi_top").click(function(){
		$("html,body").animate({"scrollTop":"0px"},300)
	})

	$(window).scroll(function(){
		$("#nav").stop().animate({"top" : $(window).scrollTop() + 100}, 100);
	});
});

$(function(){

	$("#arashi_first").click(function(){
		$("html,body").animate({"scrollTop":"0px"},300)
	})

	$(window).scroll(function(){
		$("#nav").stop().animate({"top" : $(window).scrollTop() + 100}, 100);
	});
});
$(function(){

	$("#logoTop").click(function(){
		$("html,body").animate({"scrollTop":"0px"},300)
	})

	$(window).scroll(function(){
		$("#nav").stop().animate({"top" : $(window).scrollTop() + 100}, 100);
	});
});





$(function(){
	$('#contents div[id != "tab1"]').hide();
	
	$("a").click(function(){
		$("#contents div").hide();

		$($(this).attr("href")).show();
		
		$(".current").removeClass("current");
		
		$(this).addClass("current");

		return false;
	});
});



$(function(){
	$("#mmmmm area").click(function(){
		var target = $($(this).attr("href")).offset().top;
		
		
		$("html, body").animate({scrollTop: target}, 300);

		return false;

	})
});









$(function(){
	$(window).scroll(function(){
		if ($("html").scrollTop() > 300) {
			$(".aaaaa").fadeIn(200);
		}else{
			$(".aaaaa").fadeOut(100);
		}
	});
});








