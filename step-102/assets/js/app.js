function init() {
	window.addEventListener('scroll', function (e) {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 300,
			header = document.querySelector("header");
		if (distanceY > shrinkOn) {
			classie.add(header, "smaller");
		} else {
			if (classie.has(header, "smaller")) {
				classie.remove(header, "smaller");
			}
		}
	});

	$.ajax({
		method: 'GET',
		url: 'assets/data/menu.json',
		dataType: 'json',
		success: function (data) {

			menuBuilder(data.menu);


		},
		error: function () {
			console.log('call was bad');
		}
	});





}

window.onload = init();

function menuBuilder($obj) {

	if ($obj.length > 0) {
		var theMenu = '<ul>';
		$obj.forEach(function (item) {

			theMenu = theMenu + '<li><a href="' + item.MenuLink + '">' + item.MenuName + '</a></li>';
		});
		theMenu = theMenu + '</ul>';
		$('#primary_nav_wrap').html(theMenu);
	}

}
