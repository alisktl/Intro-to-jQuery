$(function() {
	var madison, hunter, bruce, family2, family1;

	madison = $('<div id="madison"><h3>Madison</h3></div>');
	hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

	bruce = $('<div id="bruce"><h2>Bruce</h2></div>');

	family2 = $('<div id="family2"><h1>Family 2</h1></div>');

	bruce.append(madison);
	bruce.append(hunter);
	family2.append(bruce);

	family1 = $('#family1');
	family2.insertAfter(family1);
});

/*
$(function(){}) - is used for running inner script after loading page,
otherwise '<script src="app.js"></script>' must be included in the end of the <body> tag.
*/