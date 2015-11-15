$(function() {

//to replace the brute force method code
	$("nav").append("<ul></ul>");

	var recipes = $("article");
		$(recipes).each(function(index, value) {
			var contents = $(this).find("h2").html().replace(/\s+/g, "-").replace(/'/g,"");
			$(value).attr("id", contents );
			$(".main-navigation ul").append( "<li id=menu-" + contents + ">" + $(this).find("h2").html() + "</li>");
		});
//Set the initial state
	$(".main-navigation li:first").addClass("selected").animate({"margin-left": "+=10px", "Margin-right": "-=10px"}, 500);
	$("article").css("display", "none");
	$("article:first").css("display", "block").addClass("current");
//Hover effect for menu items
	$(".main-navigation li").hover(buttonHover,buttonHover);
//Event handler for button clicks
	$(".main-navigation li").click(changeRecipe);
});

function buttonHover() {
	$(this).toggleClass("hover-state");
}

function changeRecipe() {
	// changes visuals on nav
	$(".selected").removeClass("selected").animate({"margin-left": "-=10px", "margin-right": "+=10px"}, 500);
	$(this).addClass("selected").animate({"margin-left": "+=10px", "Margin-right": "-=10px"}, 500);
	// changes recipe itself
	$(".current").slideUp(600).removeClass("current");
	var target="#" + $(this).attr("id").replace("menu-","");
	$(target).delay(500).addClass("current").fadeIn(1000);
}
