$(function() {
	var paragraphs;
	paragraphs = $('p');
	paragraphs.each(function(index) {
    	var text = $(this).text();
    	var length = text.length;
    	$(this).text(text + length);
	});
});

/*
$(function(){}) - is used for running inner script after loading page,
otherwise '<script src="app.js"></script>' must be included in the end of the <body> tag.
*/