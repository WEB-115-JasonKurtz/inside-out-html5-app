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
		dataType:'json',
		success: function(){
			console.log('call was good');
	},
		error: function(){
			console.log('call was bad');
	}
	});
	
	
	
	
	
}

window.onload = init();