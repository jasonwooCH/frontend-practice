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
	var masthead = document.createElement("div");
	masthead.className = "masthead";
	shell.appendChild(masthead);	

	var cap = document.createElement("div");
	cap.className = "masthead-cap";

	masthead.appendChild(cap);

	var quicknav = document.createElement("div");
	quicknav.id = "quick-nav"

	var usernav = document.createElement("div");
	usernav.id = "user-nav";

	cap.appendChild(quicknav);
	cap.appendChild(usernav);

	// quicknav - sections and search
	var sectionbtn = document.createElement("button");
	sectionbtn.className = "sections";
	var icon1 = document.createElement("i");
	icon1.className = "glyphicon glyphicon-menu-hamburger";
	sectionbtn.appendChild(icon1);
	var sectiontxt = document.createTextNode(" Sections");
	sectionbtn.appendChild(sectiontxt);
	quicknav.appendChild(sectionbtn)

	var searchbtn = document.createElement("button");
	searchbtn.className = "search";
	var icon2 = document.createElement("i");
	icon2.className = "glyphicon glyphicon-search";
	searchbtn.appendChild(icon2);
	var searchtxt = document.createTextNode(" Search");
	searchbtn.appendChild(searchtxt);
	quicknav.appendChild(searchbtn);

	// usernav - subscribe, login, settings
	var subbtn = document.createElement("button");
	subbtn.className = "btn btn-primary btn-sm";
	subbtn.textContent = "Subscribe Now";
	usernav.appendChild(subbtn);

	var loginbtn = document.createElement("button");
	loginbtn.className = "btn btn-primary btn-sm";
	loginbtn.textContent = "Log In";
	usernav.appendChild(loginbtn);

	var setbtn = document.createElement("button");
	setbtn.id = "settings";
	var seticon = document.createElement("i");
	seticon.className = "glyphicon glyphicon-cog";
	setbtn.appendChild(seticon);
	usernav.appendChild(setbtn);

	// meta - for logo
	var meta = document.createElement("div");
	meta.id = "meta";
	meta.textContent = "The New York Times";
	masthead.appendChild(meta);

	//navigation menu
	var mininav = document.createElement("nav");
	mininav.id = "mini-nav";
	var navmenu = document.createElement("ul");
	navmenu.id = "min-nav-menu";
	masthead.appendChild(mininav);
	mininav.appendChild(navmenu);

	var menuList = ["World", "U.S.", "Politics", "N.Y.", "Business", 
					"Opinion", "Tech", "Science", "Health", "Sports",
					"Arts", "Style", "Food", "Travel", "Magazine",
					"T Magazine", "Real Estate"];

	for (var i = 0; i < menuList.length; i++) {
		var item = document.createElement("li");
		var link = document.createElement("a");
		link.href = "#";


		link.appendChild(document.createTextNode(menuList[i]));
		item.appendChild(link);
		navmenu.appendChild(item);
	}
}

function renderMain() {

	var main = document.createElement("div");
	main.id = "main";
	shell.appendChild(main);

	var narrow = document.createElement("div");
	narrow.className = "col-narrow col-mobile";
	main.appendChild(narrow);
	
	for (var j = 0; j < 15; j++) {
		var par = document.createElement("p");
		par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rem cumque ratione unde saepe quos voluptates placeat accusantium, esse aut officia quisquam a cupiditate quidem sunt debitis tempore maxime recusandae!";
		narrow.appendChild(par);
	}

	var mid1 = document.createElement("div");
	var mid2 = document.createElement("div");
	mid1.className = "col-mid col-mobile";
	mid2.className = "col-mid col-mobile";

	main.appendChild(mid1);
	main.appendChild(mid2);

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
	sidebar.className = "sidebar";
	document.body.appendChild(sidebar);
	//sidebar.class = "expandable";

	for (var i = 0; i < 2; i++)
	{
		var sectionDiv = document.createElement("div");
		sectionDiv.id = "section_" + i;
		$(sectionDiv).css({'padding-left': '15px','padding-top': '10px',
							'padding-right': '15px', 
							'border-top': '1px solid #e5e5e5' });

		var sectionList = document.createElement("ul");
		$(sectionList).css({'padding-left': 0});
		sectionDiv.appendChild(sectionList);
		sidebar.appendChild(sectionDiv);
	}

	var sectionsContent = [["Home Page", "World", "U.S.", "Politics", "N.Y.", 
							"Business", "Opinion", "Tech", "Science", "Health", "Sports"],
							["Arts", "Fashion & Style", "Food", "Travel", "Magazine", "T Magazine", 
							"Real Estate", "Obituaries", "Video", "The Upshot", "Conferences"]];


	var more = "More";

	for (var i = 0; i < 2; i++)
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
	searchbar.id = "searchbar";
	$("#mini-nav").append(searchbar);

	var searchbox = document.createElement("input");
	searchbox.type = "text";
	searchbox.id = "searchbox";
	searchbar.appendChild(searchbox);

	var searchSubmit = document.createElement("button");
	searchSubmit.type = "submit";
	searchSubmit.textContent = "GO";
	searchbar.appendChild(searchSubmit);	

	searchToggle();

}

function sectionsSide() {
	
	var sidebar = $(".sidebar");
	console.log("sectionsSide");

	$(document).on('click', '.sections', function() {
		$(sidebar).fadeToggle({duration: 250, queue: false});
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

