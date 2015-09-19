$(function() {
	var navList, firstItemA;

	navList = $('.nav-list');
	firstItemA = navList.children().first().find('a');
	firstItemA.attr('href', '#1');
});

/*
$(function(){}) - is used for running inner script after loading page,
otherwise '<script src="app.js"></script>' must be included in the end of the <body> tag.
*/