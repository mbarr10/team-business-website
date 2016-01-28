//pizza picture slider
$(document).ready(function(){
	$("#seePizza").click(function(){
		$(".pizza").fadeIn();	
	});
	$("#resetPizza").click(function(){
		$(".pizza").fadeOut();
	});
});

//beer picture fades
$(document).ready(function(){
	$("#seeBeer").click(function(){
		$(".beer").fadeIn();
	});
	$("#resetBeer").click(function(){
		$(".beer").fadeOut();
	});
});

//movie fade
$(document).ready(function(){
	$("#seeMovies").click(function(){
		$(".movies").fadeIn();
	});
	$("#resetMovies").click(function(){
		$(".movies").fadeOut();
	});
});

//slider
$(document).ready(function(){
	var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-480},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},2500);
});
//pizza alert
$(document).ready(function(){
	$(".pizzaCart").click( function() { 
		alert("Pizza Added to Cart");
	});
});
//beer alert
$(document).ready(function(){
	$(".beerCart").click( function() { 
		alert("Beer Added to Cart");
	});
});
//movie alert
$(document).ready(function(){
	$(".movieCart").click( function() { 
		alert("Movie Added to Cart");
	});
});


