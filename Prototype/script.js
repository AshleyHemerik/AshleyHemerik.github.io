/*var instance = M.ScrollSpy.getInstance(elem);

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.scrollspy');
	var instances = M.ScrollSpy.init(elems, options);
});

// Or with jQuery
*/
$(document).ready(function(){
	$('.scrollspy').scrollSpy();
});
/*
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.dropdown-trigger');
	var instances = M.Dropdown.init(elems, options);
});

// Or with jQuery

$('.dropdown-trigger').dropdown();*/
