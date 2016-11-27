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
		"id" : "work",
		"icon" : "w",
		"img" : "",
		"text" : "Work",
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
		"id" : "education",
		"icon" : "l",
		"img" : "",
		"text" : "Education",
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
		"text" : "Projects",
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
		"text" : "Skills",
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
	self.height = ko.observable(window.innerHeight);

	for(var i = 0; i<blocks.length;i++){
		self.blocks.push(new block_model(blocks[i]));
	}

	self.touchNavigateToBlock = function(data, event){
		var obj = data;
		var offset = $('#'+obj.id()+'Block').offset().top;
		$(document).scrollTop(offset);
		event.stopPropagation();
	}

	self.navigateToBlock = function(data, event){
		console.log(data);
		console.log("reg nav");
		var obj = this;
		var offset = $('#'+obj.id()+'Block').offset().top;
		$(document).scrollTop(offset);
	}

	self.expandBlock = function(obj){
		console.log(obj);
		if(obj.interacts() && self.width() > 640){
			console.log("expand");
			$("#"+obj.interacts()).addClass('hide');
			$("#"+obj.id()).addClass('grow');
		}
	}

	self.shrinkBlock = function(obj){
		// var obj = this;
		if(obj.interacts() && self.width() > 640){
			console.log("shrink");
			$("#"+obj.interacts()).removeClass('hide');
			$("#"+obj.id()).removeClass('grow');
		}
	}

	self.goHome = function(){
		$(document).scrollTop(0);
	}

	self.goToContact = function(){
		var offset = $('#contactBlock').offset().top;
		console.log(offset);
		$(document).scrollTop(offset);
	}

    $(window).resize(function(){
    	self.width(window.innerWidth);
    	self.height(window.innerHeight);
    });

    $(document.body).bind('touchmove', function(event) {
		event.preventDefault();
	}, false); 

    self.hideCondensedContent = function(){
		var collapsibles = $('.condensed');
		for(var i = 0; i<collapsibles.length; i++){
			$('#'+collapsibles[i].id).children('.condensed-content').hide();
			$('#'+collapsibles[i].id).children('.condensed-controller').click(function(){
				if($(this).html() == '+'){
					$(this).siblings().next('div').slideDown(500);
					$(this).html('-');
				}
				else{
					$(this).siblings().next('div').slideUp(500);
					$(this).html('+');
				}
			});
		}
	}
}



//EVENT LISTENER TO INITIATE BEHAVIOURS
$(document).ready(function(){
	viewModel = new resume_model();
	ko.applyBindings(viewModel,document.getElementsByTagName('html')[0]);
	// var blocks = $('.block');
	// console.log(blocks);
	// for(var i = 0; i<blocks.length;i++){
	// 	if(blocks[i].className.indexOf('interacts') != -1){
	// 		console.log(blocks[i].id);
	// 		console.log(blocks[i].className);

	// 		// blocks[i].onmouseover = viewModel.expandBlock(blocks[i]);
	// 		// blocks[i].onmouseleave = viewModel.shrinkBlock(blocks[i]);
	// 	}
	// }
	viewModel.hideCondensedContent();
});

$(window).on("load", function(){
	var loader = document.getElementById("loader");
	loader.style.opacity = "0";
	//Use delay so that you can see the fade before the loader is destroyed, KAPOW!
	var delay=500;//1 seconds
	setTimeout(function(){
		loader.style.display = "none";
	},delay);
});