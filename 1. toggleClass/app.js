$(function() {
	var featuredArticle;

	featuredArticle = $('.featured');
	featuredArticle.toggleClass('featured');
});

/*
$(function(){}) - is used for running inner script after loading page,
otherwise '<script src="app.js"></script>' must be included in the end of the <body> tag.
*/