var blocks = [
	{
		"id" : "learn",
		"icon" : "",
		"img" : "images/learn.jpg",
		"text" : "",
		"number" : 0,
		"interacts" : "",
		"backgroundColor" : ""
	},
	{
		"id" : "about",
		"icon" : "8",
		"img" : "",
		"text" : "Profile",
		"number" : 1,
		"interacts" : "learn",
		"backgroundColor" : "violet"
	},
	{
		"id" : "education",
		"icon" : "l",
		"img" : "",
		"text" : "Education",
		"number" : 2,
		"interacts" : "palmtree",
		"backgroundColor" : "light-teal"
	},
	{
		"id" : "palmtree",
		"icon" : "",
		"img" : "images/palmtree.jpg",
		"text" : "",
		"number" : 3,
		"interacts" : "",
		"backgroundColor" : ""
	},
	{
		"id" : "work",
		"icon" : "w",
		"img" : "",
		"text" : "Work",
		"number" : 4,
		"interacts" : "palmtree",
		"backgroundColor" : "grey"
	},
	{
		"id" : "bear",
		"icon" : "",
		"img" : "images/bear.jpg",
		"text" : "",
		"number" : 5,
		"interacts" : "",
		"backgroundColor" : ""
	},
	{
		"id" : "nameFirst",
		"icon" : "",
		"img" : "",
		"text" : "Kristine",
		"number" : 6,
		"interacts" : "",
		"backgroundColor" : "dark-grey"
	},
	{
		"id" : "me",
		"icon" : "",
		"img" : "images/me.jpg",
		"text" : "",
		"number" : 7,
		"interacts" : "",
		"backgroundColor" : ""
	},
	{
		"id" : "nameLast",
		"icon" : "",
		"img" : "",
		"text" : "Tomlinson",
		"number" : 8,
		"interacts" : "",
		"backgroundColor" : "dark-grey"
	},
	{
		"id" : "life",
		"icon" : "",
		"img" : "images/life.jpg",
		"text" : "",
		"number" : 9,
		"interacts" : "",
		"backgroundColor" : ""
	},
	{
		"id" : "quals",
		"icon" : ")",
		"img" : "",
		"text" : "Skills",
		"number" : 10,
		"interacts" : "board",
		"backgroundColor" : "light-grey"
	},
	{
		"id" : "board",
		"icon" : "",
		"img" : "images/board.jpg",
		"text" : "",
		"number" : 11,
		"interacts" : "",
		"backgroundColor" : ""
	},
	{
		"id" : "awards",
		"icon" : "b",
		"img" : "",
		"text" : "Awards",
		"number" : 12,
		"interacts" : "board",
		"backgroundColor" : "light-violet"
	},
	{
		"id" : "contact",
		"icon" : "e",
		"img" : "",
		"text" : "Contact",
		"number" : 13,
		"interacts" : "explore",
		"backgroundColor" : "teal"
	},
	{
		"id" : "explore",
		"icon" : "",
		"img" : "images/explore.jpg",
		"text" : "",
		"number" : 14,
		"interacts" : "",
		"backgroundColor" : ""
	}
];

var viewModel;

var block_model = function(data){
	var self = this;
	ko.mapping.fromJS(data, {}, self);
}

var resume_model = function(){
	var self = this;
	self.blocks = ko.observableArray();
	self.width = ko.observable(window.innerWidth);

	for(var i = 0; i<blocks.length;i++){
		self.blocks.push(new block_model(blocks[i]));
	}

	self.navigateToBlock = function(){
		console.log("navigate");
		var obj = this;
		var offset = document.getElementById(obj.id()+'Block').offsetTop;
		document.getElementById('home').scrollTop = offset;
	}

	self.expandBlock = function(){
		var obj = this;
		if(obj.interacts() && self.width() > 640){
			console.log("expand");
			$("#"+obj.interacts()).addClass('hide');
			$("#"+obj.id()).addClass('grow');
		}
	}

	self.shrinkBlock = function(){
		var obj = this;
		if(obj.interacts() && self.width() > 640){
			console.log("shrink");
			$("#"+obj.interacts()).removeClass('hide');
			$("#"+obj.id()).removeClass('grow');
		}
	}

	self.goHome = function(){
		document.getElementById('home').scrollTop = 0;
	}

	var loader = document.getElementById("loader");
	
	loader.style.opacity = "0";
	
	//Use delay so that you can see the fade before the loader is destroyed, KAPOW!
	var delay=500;//1 seconds
    setTimeout(function(){
		loader.style.display = "none";
    },delay);

    $(window).resize(function(){
    	self.width(window.innerWidth);
    });
}

//EVENT LISTENER TO INITIATE BEHAVIOURS
$(document).ready(function(){
	viewModel = new resume_model();
	ko.applyBindings(viewModel,document.getElementsByTagName('html')[0]);
});

//ADD HANDLER FUNCTION SO MULTIPLE ACTIONS CAN BE CALLED WHEN PAGE LOADS
// function addHandlers(){

// 	var loader = document.getElementById("loader");
	
// 	loader.style.opacity = "0";
	
// 	//Use delay so that you can see the fade before the loader is destroyed, KAPOW!
// 	var delay=500;//1 seconds
//     setTimeout(function(){
// 		loader.style.display = "none";
//     },delay);
	
// 	/***********************/
// 	/*VARIABLE DECLARATIONS*/
// 	/***********************/

// 	//BLOCKS
// 	var header = document.getElementById("headerTab");
// 	var learn = document.getElementById("learn");
// 	var education = document.getElementById("education");
// 	var about = document.getElementById("about");
// 	var palmtree = document.getElementById("palmtree");
// 	var work = document.getElementById("work");
// 	var bear = document.getElementById("bear");
// 	var nameFirst = document.getElementById("nameFirst");
// 	var nameLast = document.getElementById("nameLast");
// 	var me = document.getElementById("me");
// 	var life = document.getElementById("life");
// 	var quals = document.getElementById("quals");
// 	var board = document.getElementById("board");
// 	var awards = document.getElementById("awards");
// 	var contact = document.getElementById("contact");
// 	var explore = document.getElementById("explore");

// 	//BLOCK ICONS
// 	var educationIcon = document.getElementById("educationIcon");
// 	var aboutIcon = document.getElementById("aboutIcon");
// 	var workIcon = document.getElementById("workIcon");
// 	var nameFirstIcon = document.getElementById("nameFirstIcon");
// 	var nameLastIcon = document.getElementById("nameLastIcon");
// 	var qualsIcon = document.getElementById("qualsIcon");
// 	var awardsIcon = document.getElementById("awardsIcon");
// 	var contactIcon = document.getElementById("contactIcon");

// 	//BODY BLOCKS
// 	var educationBlock = document.getElementById("educationBlock");
// 	var aboutBlock = document.getElementById("aboutBlock");
// 	var workBlock = document.getElementById("workBlock");
// 	var qualsBlock = document.getElementById("qualsBlock");
// 	var awardsBlock = document.getElementById("awardsBlock");
// 	var contactBlock = document.getElementById("contactBlock");

// 	//TAB ICONS
// 	var homeTabIcon = document.getElementById("homeTabIcon");
// 	var educationTabIcon = document.getElementById("educationTabIcon");
// 	var aboutTabIcon = document.getElementById("aboutTabIcon");
// 	var workTabIcon = document.getElementById("workTabIcon");
// 	var qualsTabIcon = document.getElementById("qualsTabIcon");
// 	var awardsTabIcon = document.getElementById("awardsTabIcon");
// 	var contactTabIcon = document.getElementById("contactTabIcon");
	
// 	/*
// 	var squares = document.getElementsByName("square");
// 	if(squares.length>0){
// 		for(var i=0; i<squares.length; i++){
// 			squares[i].style.height = squares[i].style.width + "px";
// 		}
// 	}*/

// 	//SCREEN AND WINDOW PROPERTIES
// 	var width = window.innerWidth;
// 	var height = window.innerHeight;
// 	var rowHeight = Math.floor(height/7);
// 	var rowHeightTablet = Math.floor(height/15);
// 	var rowHeightMenu = Math.floor(height/19);
// 	var widthScreen = screen.width;
// 	var heightScreen = screen.height;

// 	//TESTERS
// 	//nameFirstIcon.innerHTML = width;
// 	//nameLastIcon.innerHTML = height;
// 	//nameFirstIcon.innerHTML = widthScreen;
// 	//nameLastIcon.innerHTML = heightScreen;
	
// 	/*********/
// 	/*ACTIONS*/
// 	/*********/

// 	//ADJUST TAB ICON HEIGHT BASED ON WINDOW SIZE
// 	homeTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	educationTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	aboutTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	workTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	qualsTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	awardsTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	contactTabIcon.style.marginTop = String(rowHeightMenu)+"px";

// 	//ADJUST MIN-HEIGHT OF BODY BLOCKS BASED ON WINDOW SIZE
// 	educationBlock.style.minHeight = String(height)+"px";
// 	aboutBlock.style.minHeight = String(height)+"px";
// 	workBlock.style.minHeight = String(height)+"px";
// 	qualsBlock.style.minHeight = String(height)+"px";
// 	awardsBlock.style.minHeight = String(height)+"px";
// 	contactBlock.style.minHeight = String(height)+"px";

// 	//CHECKS IF PORTRAIT OR LANDSCAPE AND CHANGES VIEW ACCORDINGLY
// 	if(width>height){
		
// 		//SET BLOCKS TO HAVE 20% WIDTH
// 		learn.style.width = "20%";
// 		education.style.width = "20%";
// 		about.style.width = "20%";
// 		palmtree.style.width = "20%";
// 		work.style.width = "20%";
// 		bear.style.width = "20%";
// 		nameFirst.style.width = "20%";
// 		nameLast.style.width = "20%";
// 		me.style.width = "20%";
// 		life.style.width = "20%";
// 		quals.style.width = "20%";
// 		board.style.width = "20%";
// 		awards.style.width = "20%";
// 		contact.style.width = "20%";
// 		explore.style.width = "20%";
		
// 		//SET BLOCKS TO HAVE 33.33% HEIGHT
// 		learn.style.height = "33.33%";
// 		education.style.height = "33.33%";
// 		about.style.height = "33.33%";
// 		palmtree.style.height = "33.33%";
// 		work.style.height = "33.33%";
// 		bear.style.height = "33.33%";
// 		nameFirst.style.height = "33.33%";
// 		nameLast.style.height = "33.33%";
// 		me.style.height = "33.33%";
// 		life.style.height = "33.33%";
// 		quals.style.height = "33.33%";
// 		board.style.height = "33.33%";
// 		awards.style.height = "33.33%";
// 		contact.style.height = "33.33%";
// 		explore.style.height = "33.33%";

// 		//CENTER BLOCK TEXT VERTICALLY
// 		educationIcon.style.marginTop = String(rowHeight)+"px";
// 		aboutIcon.style.marginTop = String(rowHeight)+"px";
// 		workIcon.style.marginTop = String(rowHeight)+"px";
// 		nameFirstIcon.style.marginTop = String(rowHeight)+"px";
// 		nameLastIcon.style.marginTop = String(rowHeight)+"px";
// 		qualsIcon.style.marginTop = String(rowHeight)+"px";
// 		awardsIcon.style.marginTop = String(rowHeight)+"px";
// 		contactIcon.style.marginTop = String(rowHeight)+"px";
		
// 		//SHOW ALL BLOCKS
// 		learn.style.display = "inline-block";
// 		palmtree.style.display = "inline-block";
// 		bear.style.display = "inline-block";
// 		nameFirst.style.display = "inline-block";
// 		nameLast.style.display = "inline-block";
// 		me.style.display = "inline-block";
// 		life.style.display = "inline-block";
// 		board.style.display = "inline-block";
// 		explore.style.display = "inline-block";

// 		//RESET BLOCK ICON INNER HTML TO BLANK
// 		educationIcon.innerHTML = "";
// 		aboutIcon.innerHTML = "";
// 		workIcon.innerHTML = "";
// 		qualsIcon.innerHTML = "";
// 		awardsIcon.innerHTML = "";
// 		contactIcon.innerHTML = "";		
// 	}

// 	else{
		
// 		//SET BLOCK WIDTH TO 100%
// 		learn.style.width = "100%";
// 		education.style.width = "100%";
// 		about.style.width = "100%";
// 		palmtree.style.width = "100%";
// 		work.style.width = "100%";
// 		bear.style.width = "100%";
// 		nameFirst.style.width = "100%";
// 		nameLast.style.width = "100%";
// 		me.style.width = "100%";
// 		life.style.width = "100%";
// 		quals.style.width = "100%";
// 		board.style.width = "100%";
// 		awards.style.width = "100%";
// 		contact.style.width = "100%";
// 		explore.style.width = "100%";
		
// 		//SET BLOCK HEIGHT TO 16.66%
// 		learn.style.height = "16.66%";
// 		education.style.height = "16.66%";
// 		about.style.height = "16.66%";
// 		palmtree.style.height = "16.66%";
// 		work.style.height = "16.66%";
// 		bear.style.height = "16.66%";
// 		nameFirst.style.height = "16.66%";
// 		nameLast.style.height = "16.66%";
// 		me.style.height = "16.66%";
// 		life.style.height = "16.66%";
// 		quals.style.height = "16.66%";
// 		board.style.height = "16.66%";
// 		awards.style.height = "16.66%";
// 		contact.style.height = "16.66%";
// 		explore.style.height = "16.66%";
		
// 		//VERTICALLY CENTER BLOCK TEXT
// 		educationIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		aboutIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		workIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		nameFirstIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		nameLastIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		qualsIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		awardsIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		contactIcon.style.marginTop = String(rowHeightTablet)+"px";
		
// 		//GET RID OF PARTICULAR BLOCKS FOR THIS DISPLAY
// 		learn.style.display = "none";
// 		palmtree.style.display = "none";
// 		bear.style.display = "none";
// 		nameFirst.style.display = "none";
// 		nameLast.style.display = "none";
// 		me.style.display = "none";
// 		life.style.display = "none";
// 		board.style.display = "none";
// 		explore.style.display = "none";

// 		//CHANGE BLOCK ICON INNER HTML TO SHOW NAMES FOR THIS DISPLAY
// 		educationIcon.innerHTML = "Profile";
// 		aboutIcon.innerHTML = " Education";
// 		workIcon.innerHTML = " Work";
// 		qualsIcon.innerHTML = " Volunteer";
// 		awardsIcon.innerHTML = " Skills";
// 		contactIcon.innerHTML = " Contact";
// 	}
	
// 	//ANIMATION ON HOVER
// 	education.onmouseover = expandEducationBlock;
// 	education.onmouseout = shrinkEducationBlock;
// 	about.onmouseover = expandAboutBlock;
// 	about.onmouseout = shrinkAboutBlock;
// 	work.onmouseover = expandWorkBlock;
// 	work.onmouseout = shrinkWorkBlock;
// 	quals.onmouseover = expandQualsBlock;
// 	quals.onmouseout = shrinkQualsBlock;
// 	awards.onmouseover = expandAwardsBlock;
// 	awards.onmouseout = shrinkAwardsBlock;
// 	contact.onmouseover = expandContactBlock;
// 	contact.onmouseout = shrinkContactBlock;

// 	//ANIMATION ON CLICK
// 	education.onmousdown = expandEducationBlock;
// 	education.onmouseup = shrinkEducationBlock;
// 	about.onmousedown = expandAboutBlock;
// 	about.onmouseup = shrinkAboutBlock;
// 	work.onmousedown = expandWorkBlock;
// 	work.onmouseup = shrinkWorkBlock;
// 	quals.onmousedown = expandQualsBlock;
// 	quals.onmouseup = shrinkQualsBlock;
// 	awards.onmousedown = expandAwardsBlock;
// 	awards.onmouseup = shrinkAwardsBlock;
// 	contact.onmousedown = expandContactBlock;
// 	contact.onmouseup = shrinkContactBlock;

// 	//CALL FUNCTION WHEN WINDOW RESIZES SO DISPLAY ADJUSTS AS WINDOW CHANGES
// 	window.onresize = getNewScreenSize;
// }

// //FUNCTION TO HANDLE CHANGES IN WINDOW SIZE
// function getNewScreenSize(){
	
// 	//REINITIALIZE PROPERTIES SINCE THEY HAVE CHANGED
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	rowHeight = Math.floor(height/7);
// 	rowHeightTablet = Math.floor(height/15);
// 	rowHeightMenu = Math.floor(height/19);
	
// 	//TESTERS
// 	//nameFirstIcon.innerHTML = width;
// 	//nameLastIcon.innerHTML = height;
	
// 	//RESET TAB ICON VERTICAL CENTERING
// 	homeTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	educationTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	aboutTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	workTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	qualsTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	awardsTabIcon.style.marginTop = String(rowHeightMenu)+"px";
// 	contactTabIcon.style.marginTop = String(rowHeightMenu)+"px";

// 	//RESET MIN-HEIGHT FOR BODY BLOCKS SO THEY FILL PAGE
// 	educationBlock.style.minHeight = String(height)+"px";
// 	aboutBlock.style.minHeight = String(height)+"px";
// 	workBlock.style.minHeight = String(height)+"px";
// 	qualsBlock.style.minHeight = String(height)+"px";
// 	awardsBlock.style.minHeight = String(height)+"px";
// 	contactBlock.style.minHeight = String(height)+"px";

// 	//CONDITIONAL CHECK TO SEE IF LANDSCAPE OR PORTRAIT
// 	if(width>height){
		
// 		//RESET BLOCKS TO 20% WIDTH WHEN IN LANDSCAPE 
// 		learn.style.width = "20%";
// 		education.style.width = "20%";
// 		about.style.width = "20%";
// 		palmtree.style.width = "20%";
// 		work.style.width = "20%";
// 		bear.style.width = "20%";
// 		nameFirst.style.width = "20%";
// 		nameLast.style.width = "20%";
// 		me.style.width = "20%";
// 		life.style.width = "20%";
// 		quals.style.width = "20%";
// 		board.style.width = "20%";
// 		awards.style.width = "20%";
// 		contact.style.width = "20%";
// 		explore.style.width = "20%";
		
// 		//RESET BLOCKS TO 33.33% HEIGHT WHEN IN LANDSCAPE
// 		learn.style.height = "33.33%";
// 		education.style.height = "33.33%";
// 		about.style.height = "33.33%";
// 		palmtree.style.height = "33.33%";
// 		work.style.height = "33.33%";
// 		bear.style.height = "33.33%";
// 		nameFirst.style.height = "33.33%";
// 		nameLast.style.height = "33.33%";
// 		me.style.height = "33.33%";
// 		life.style.height = "33.33%";
// 		quals.style.height = "33.33%";
// 		board.style.height = "33.33%";
// 		awards.style.height = "33.33%";
// 		contact.style.height = "33.33%";
// 		explore.style.height = "33.33%";

// 		//RESET BLOCK ICON VERTICAL CENTERING TO NEW HEIGHT 
// 		educationIcon.style.marginTop = String(rowHeight)+"px";
// 		aboutIcon.style.marginTop = String(rowHeight)+"px";
// 		workIcon.style.marginTop = String(rowHeight)+"px";
// 		nameFirstIcon.style.marginTop = String(rowHeight)+"px";
// 		nameLastIcon.style.marginTop = String(rowHeight)+"px";
// 		qualsIcon.style.marginTop = String(rowHeight)+"px";
// 		awardsIcon.style.marginTop = String(rowHeight)+"px";
// 		contactIcon.style.marginTop = String(rowHeight)+"px";
		
// 		//SHOW ALL BLOCKS IN LANDSCAPE VIEW
// 		learn.style.display = "inline-block";
// 		palmtree.style.display = "inline-block";
// 		bear.style.display = "inline-block";
// 		nameFirst.style.display = "inline-block";
// 		nameLast.style.display = "inline-block";
// 		me.style.display = "inline-block";
// 		life.style.display = "inline-block";
// 		board.style.display = "inline-block";
// 		explore.style.display = "inline-block";

// 		//SHOW NO TEXT, ONLY ICONS, FOR LANDSCAPE
// 		educationIcon.innerHTML = "";
// 		aboutIcon.innerHTML = "";
// 		workIcon.innerHTML = "";
// 		qualsIcon.innerHTML = "";
// 		awardsIcon.innerHTML = "";
// 		contactIcon.innerHTML = "";
// 	}

// 	else{

// 		//RESET BLOCKS TO HAVE 100% WIDTH IN PORTRAIT VIEW
// 		learn.style.width = "100%";
// 		education.style.width = "100%";
// 		about.style.width = "100%";
// 		palmtree.style.width = "100%";
// 		work.style.width = "100%";
// 		bear.style.width = "100%";
// 		nameFirst.style.width = "100%";
// 		nameLast.style.width = "100%";
// 		me.style.width = "100%";
// 		life.style.width = "100%";
// 		quals.style.width = "100%";
// 		board.style.width = "100%";
// 		awards.style.width = "100%";
// 		contact.style.width = "100%";
// 		explore.style.width = "100%";
		
// 		//RESET BLOCKS TO HAVE 16.66% HEIGHT IN PORTRAIT VIEW
// 		learn.style.height = "16.66%";
// 		education.style.height = "16.66%";
// 		about.style.height = "16.66%";
// 		palmtree.style.height = "16.66%";
// 		work.style.height = "16.66%";
// 		bear.style.height = "16.66%";
// 		nameFirst.style.height = "16.66%";
// 		nameLast.style.height = "16.66%";
// 		me.style.height = "16.66%";
// 		life.style.height = "16.66%";
// 		quals.style.height = "16.66%";
// 		board.style.height = "16.66%";
// 		awards.style.height = "16.66%";
// 		contact.style.height = "16.66%";
// 		explore.style.height = "16.66%";

// 		//READJUST BLOCK ICON VERTICAL CENTERING TO NEW HEIGHT
// 		educationIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		aboutIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		workIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		nameFirstIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		nameLastIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		qualsIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		awardsIcon.style.marginTop = String(rowHeightTablet)+"px";
// 		contactIcon.style.marginTop = String(rowHeightTablet)+"px";
		
// 		//DON'T DISPLAY THESE BLOCKS IN PORTRAIT VIEW
// 		learn.style.display = "none";
// 		palmtree.style.display = "none";
// 		bear.style.display = "none";
// 		nameFirst.style.display = "none";
// 		nameLast.style.display = "none";
// 		me.style.display = "none";
// 		life.style.display = "none";
// 		board.style.display = "none";
// 		explore.style.display = "none";

// 		//DISPLAY NAMES OF BLOCKS IN PORTRAIT VIEW
// 		educationIcon.innerHTML = "About";
// 		aboutIcon.innerHTML = " Education";
// 		workIcon.innerHTML = " Work";
// 		qualsIcon.innerHTML = " Volunteer";
// 		awardsIcon.innerHTML = " Skills";
// 		contactIcon.innerHTML = " Contact";
// 	}
// }

// /***************************************/
// /*FUNCTIONS TO HANDLE HOVERS AND CLICKS*/
// /***************************************/

// function expandEducationBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 		education.style.width = "40%";
// 		learn.style.width = "0%";
// 		educationIcon.innerHTML = "Profile";
// 	}
// 	else{
// 		education.style.backgroundColor = "#7f5ca8";
// 		education.style.color = "CCC";
// 	}
// }

// function shrinkEducationBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 	education.style.width = "20%";
// 	learn.style.width = "20%";
// 	educationIcon.innerHTML = "";
// 	}
// 	else{
// 		education.style.backgroundColor = "#a97be0";
// 		education.style.color = "FFF";
// 	}
// }

// function expandAboutBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 		about.style.width = "40%";
// 		palmtree.style.width = "0%";
// 		aboutIcon.innerHTML = " Education";
// 	}
// 	else{
// 		about.style.backgroundColor = "#53ad99";
// 		about.style.color = "CCC";
// 	}
// }

// function shrinkAboutBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 	about.style.width = "20%";
// 	palmtree.style.width = "20%";
// 	aboutIcon.innerHTML = "";
// 	}
// 	else{
// 		about.style.backgroundColor = "#6ee6cc";
// 		about.style.color = "FFF";
// 	}
// }

// function expandWorkBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 		work.style.width = "40%";
// 		palmtree.style.width = "0%";
// 		workIcon.innerHTML = " Work";
// 	}
// 	else{
// 		work.style.backgroundColor = "#434345";
// 		work.style.color = "CCC";
// 	}
// }

// function shrinkWorkBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 	work.style.width = "20%";
// 	palmtree.style.width = "20%";
// 	workIcon.innerHTML = "";
// 	}
// 	else{
// 		work.style.backgroundColor = "#4d4d51";
// 		work.style.color = "FFF";
// 	}
// }

// function expandQualsBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 		quals.style.width = "40%";
// 		board.style.width = "0%";
// 		qualsIcon.innerHTML = " Volunteer";
// 	}
// 	else{
// 		quals.style.backgroundColor = "#6c6c6f";
// 		quals.style.color = "CCC";
// 	}
// }

// function shrinkQualsBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 	quals.style.width = "20%";
// 	board.style.width = "20%";
// 	qualsIcon.innerHTML = "";
// 	}
// 	else{
// 		quals.style.backgroundColor = "#7a7a7d";
// 		quals.style.color = "FFF";
// 	}
// }

// function expandAwardsBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 		awards.style.width = "40%";
// 		board.style.width = "0%";
// 		awardsIcon.innerHTML = " Skills";
// 	}
// 	else{
// 		awards.style.backgroundColor = "#8069ad";
// 		awards.style.color = "CCC";
// 	}
// }

// function shrinkAwardsBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 	awards.style.width = "20%";
// 	board.style.width = "20%";
// 	awardsIcon.innerHTML = "";
// 	}
// 	else{
// 		awards.style.backgroundColor = "#aa8ce6";
// 		awards.style.color = "FFF";
// 	}
// }

// function expandContactBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 		contact.style.width = "40%";
// 		explore.style.width = "0%";
// 		contactIcon.innerHTML = " Contact";
// 	}
// 	else{
// 		contact.style.backgroundColor = "#038e70";
// 		contact.style.color = "CCC";
// 	}
// }

// function shrinkContactBlock(){
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// 	if(width>height){
// 	contact.style.width = "20%";
// 	explore.style.width = "20%";
// 	contactIcon.innerHTML = "";
// 	}
// 	else{
// 		contact.style.backgroundColor = "#04bd95";
// 		contact.style.color = "FFF";
// 	}
// }
