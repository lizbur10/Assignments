$(function() {
//Create nav
	$("nav").append("<ul></ul>");

	//Determine how many "pages" of menu there will be
	var recipes = $("article"),
		numMenuPages = Math.floor(recipes.length/6) + 1,
		currentPage = 1;
	//create IDs for articles; create nav
	$(recipes).each(function(index, value) {
		var contents = $(this).find("h2").html().replace(/\s+/g, "-").replace(/'/g,"");
		$(value).attr("id", contents );
		$(".main-navigation ul").append( "<li id=menu-" + contents + ">" + $(this).find("h2").html() + "</li>");
	});
	setMenuDisplay(currentPage);
	//Create menu scroll buttons and set initial display properties
	if (numMenuPages > 1) {
		$(".main-navigation ul").before("<p><img src='img/up-arrow-purple.png' id='up-arrow'></p>")
			.after("<p><img src='img/down-arrow-purple.png' id='down-arrow'></p>");
		$("#up-arrow").addClass("hidden");
	}
	
//Set the initial state of the menu and articles
	$(".main-navigation li:first").addClass("selected").animate({"margin-left": "+=10px", "Margin-right": "-=10px"}, 500);
	$("article").css("display", "none");
	$("article:first").css("display", "block").addClass("current");
//Hover effect for menu items
	$(".main-navigation li").hover(buttonHover,buttonHover);
//Event handler for menu clicks
	$(".main-navigation li").click(changeRecipe);
//Event handler for menu scroll button clicks
	$("#down-arrow").click(function() {
		currentPage++;
		setMenuDisplay(currentPage);
		setArrowDisplay(currentPage,numMenuPages);
	});
	$("#up-arrow").click(function() {
		currentPage--;
		setMenuDisplay(currentPage);
		setArrowDisplay(currentPage,numMenuPages);
	});
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
	$(target).delay(600).addClass("current").fadeIn(1000);
}

function setMenuDisplay(currentPage) {
	$(".main-navigation li").each(function(index, value) {
		if ((Math.floor(index/6) + 1) == currentPage) {
			$(this).removeClass("hidden");
		} else {
			$(this).addClass("hidden");
		}
	});
}

function setArrowDisplay(currentPage,numMenuPages) {
	if (currentPage == 1) {
		$("#up-arrow").addClass("hidden");
	} else {
		$("#up-arrow").removeClass("hidden");
	}
	if (currentPage == numMenuPages) {
		$("#down-arrow").addClass("hidden");
	} else {
		$("#down-arrow").removeClass("hidden");
	}
}

