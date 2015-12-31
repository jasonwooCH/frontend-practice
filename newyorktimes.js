var shell = document.createElement("div");
shell.id = "shell";

//var mainbody = document.getElementsByTagName("body")[0];

document.body.appendChild(shell);

$(document).ready(function() {
	renderBanner();
	renderMain();
	renderAux();
	scrollNav();
	//sectionsSide();
});

function renderBanner() {

	/*
		Main components of the banner
	*/
	var masthead = document.createElement("div");
	$(masthead).addClass("masthead").appendTo(shell);

	var cap = document.createElement("div");
	$(cap).addClass("masthead-cap").appendTo(masthead);

	var quicknav = document.createElement("div");
	$(quicknav).attr("id", "quick-nav").appendTo(cap);

	var usernav = document.createElement("div");
	$(usernav).attr("id", "user-nav").appendTo(cap);


	/* 
		quicknav - sections and search buttons 
	*/

	// sections button
	var sectionbtn = document.createElement("button");
	var icon1 = document.createElement("i");
	$(icon1).addClass("glyphicon glyphicon-menu-hamburger").appendTo(sectionbtn);
	$(sectionbtn).addClass("sections").append(" Sections").appendTo(quicknav);

	// search button
	var searchbtn = document.createElement("button");
	var icon2 = document.createElement("i");
	$(icon2).addClass("glyphicon glyphicon-search").appendTo(searchbtn);
	$(searchbtn).addClass("search").append(" Search").appendTo(quicknav);


	/* 
		usernav - subscribe, login, settings
	*/

	// subscribe button
	var subbtn = document.createElement("button");
	$(subbtn).addClass("btn btn-primary btn-sm").text("Subscribe Now").appendTo(usernav);

	// login button
	var loginbtn = document.createElement("button");
	$(loginbtn).addClass("btn btn-primary btn-sm").text("Log In").appendTo(usernav);

	// settings button
	var setbtn = document.createElement("button");
	$(setbtn).attr("id", "settings").append("<i class='glyphicon glyphicon-cog' />").appendTo(usernav);


	// meta - for logo
	var meta = document.createElement("div");
	$(meta).attr("id", "meta").text("The New York Times").appendTo(masthead);

	//navigation menu
	var mininav = document.createElement("nav");
	var navmenu = document.createElement("ul");
	$(navmenu).attr("id", "min-nav-menu").appendTo(mininav);
	$(mininav).attr("id", "mini-nav").appendTo(masthead);

	var menuList = ["World", "U.S.", "Politics", "N.Y.", "Business", 
					"Opinion", "Tech", "Science", "Health", "Sports",
					"Arts", "Style", "Food", "Travel", "Magazine",
					"T Magazine", "Real Estate"];

	for (var i = 0; i < menuList.length; i++) {
		var item = document.createElement("li");
		var link = document.createElement("a");

		$(link).attr("href", "#").append(menuList[i]).appendTo(item);
		$(item).appendTo(navmenu);
	}
}

function renderMain() {

	var main = document.createElement("div");
	$(main).attr("id", "main").appendTo(shell);

	var narrow = document.createElement("div");
	$(narrow).addClass("col-narrow col-mobile").appendTo(main);
	
	for (var j = 0; j < 15; j++) {
		var par = document.createElement("p");
		par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rem cumque ratione unde saepe quos voluptates placeat accusantium, esse aut officia quisquam a cupiditate quidem sunt debitis tempore maxime recusandae!";
		narrow.appendChild(par);
	}

	var mid1 = document.createElement("div");
	var mid2 = document.createElement("div");

	$(mid1).addClass("col-mid col-mobile").appendTo(main);
	$(mid2).addClass("col-mid col-mobile").appendTo(main);

	for (var j = 0; j < 25; j++) {
		var par = document.createElement("p");
		var par2 = document.createElement("p");
		par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rem cumque ratione unde saepe quos voluptates placeat accusantium, esse aut officia quisquam a cupiditate quidem sunt debitis tempore maxime recusandae!";
		par2.textContent = par.textContent;
		mid1.appendChild(par);
		mid2.appendChild(par2);
	}	
}

function scrollNav() {
	var mininav = $("#mini-nav");
	var navHomeY = mininav.offset().top + mininav.height();
	var isFixed = false;
	var navlist = $("#min-nav-menu");

	var $w = $(window);
	$w.scroll(function() {
		var scrollTop = $w.scrollTop();
		var shouldBeFixed = scrollTop > navHomeY;

		if (shouldBeFixed && !isFixed) {
			navlist.prepend('<li><button class="search"><i class="glyphicon glyphicon-search"></i></button></li>');
			navlist.prepend('<li><button class="sections"><i class="glyphicon glyphicon-menu-hamburger"></i></button></li>');

			mininav.css({
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				'box-shadow': '0 8px 6px -6px #e5e5e5',
			});
			isFixed = true;
		}
		else if (!shouldBeFixed && isFixed)
		{	
			navlist.find("li").eq(1).remove();
			navlist.find("li").eq(0).remove();
			
			mininav.css({
				position: 'static',
				'box-shadow': 'none'
			});
			isFixed = false;
		}
	});
}

function renderAux() {

	/*
		rendering sidebar navigation toggle
	*/

	var sidebar = document.createElement("nav");
	$(sidebar).addClass("sidebar").appendTo("body");
	//sidebar.class = "expandable";

	var numSections = 2;

	for (var i = 0; i < numSections; i++)
	{
		var sectionDiv = document.createElement("div");
		sectionDiv.id = "section_" + i;
		$(sectionDiv).css({'padding-left': '15px','padding-top': '10px',
							'padding-right': '15px', 
							'border-top': '1px solid #e5e5e5' }).appendTo(sidebar);

		var sectionList = document.createElement("ul");
		$(sectionList).css({'padding-left': 0}).appendTo(sectionDiv);
	}

	var sectionsContent = [["Home Page", "World", "U.S.", "Politics", "N.Y.", 
							"Business", "Opinion", "Tech", "Science", "Health", "Sports"],
							["Arts", "Fashion & Style", "Food", "Travel", "Magazine", "T Magazine", 
							"Real Estate", "Obituaries", "Video", "The Upshot", "Conferences"]];
	var more = "More";

	for (var i = 0; i < numSections; i++)
	{
		var currSection = $("#section_" + i);
			
		for (var j = 0; j < sectionsContent[i].length; j++) {
			currSection.children("ul").append("<li><a href='#'><strong>" + sectionsContent[i][j] + "</strong></a></li>");
		}
	}

	sectionsSide();

	/*
		rendering search click
	*/

	var searchbar = document.createElement("div");
	$(searchbar).attr("id", "searchbar").appendTo("#mini-nav");

	var searchbox = document.createElement("input");
	$(searchbox).attr({type: "text", id: "searchbox"}).appendTo(searchbar);

	var searchSubmit = document.createElement("button");
	$(searchSubmit).attr({type: "submit"}).text("GO").appendTo(searchbar);

	searchToggle();

}

function sectionsSide() {

	$(document).on('click', '.sections', function() {
		$(".sidebar").fadeToggle({duration: 250, queue: false});
	});

	$(document).click(function(event) { 
	    if(!$(event.target).closest('.sections').length &&
			!$(event.target).closest('.sidebar').length)
	     {
	        if($('.sidebar').is(":visible")) {
	            $('.sidebar').fadeOut()
	        }
	    }        
	});
}

function searchToggle() {

	$(document).on('click', '.search', function() {
		$('#searchbar').slideToggle({duration: 250, queue: false});

	});
}

