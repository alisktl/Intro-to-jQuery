$(function() {
	var article2, article3;

	article2 = $('.featured');
	article2.toggleClass('featured');

	article3 = article2.next();
	article3.toggleClass('featured');
});

/*
$(function(){}) - is used for running inner script after loading page,
otherwise '<script src="app.js"></script>' must be included in the end of the <body> tag.
*/