$(document).ready(function() {

	var screen = $('.screen');
	var clear = $('.clear');
	var equals = $('.equals');
	var buttons = $('.button:not(.equals):not(.clear)');

	buttons.click(function() {
		var value = $(this).text();
		screen.text(screen.text() + value);
	});

	clear.click(function() {
		screen.text('');
	});

	equals.click(function() {
		var result = eval(screen.text());
		screen.text(result);
	});

});
