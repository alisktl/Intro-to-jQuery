$(function() {
	var articleItems;

	articleItems = $('.article-item');
	var firstItem = articleItems.first();
	var ulToRemove = firstItem.find('ul');
	ulToRemove.remove();
});

/*
$(function(){}) - is used for running inner script after loading page,
otherwise '<script src="app.js"></script>' must be included in the end of the <body> tag.
*/