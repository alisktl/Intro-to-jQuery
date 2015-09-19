$(function() {
	$('#input').on('change', function() {
    	var val;
    	val = $('#input').val();
    	$('.articles').find('h1').text(val);
	});
});

/*
$(function(){}) - is used for running inner script after loading page,
otherwise '<script src="app.js"></script>' must be included in the end of the <body> tag.
*/