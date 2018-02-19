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
		success: function(data){
			console.log('call was good');
			console.log(data.menu.length);
			
			if(data.menu.length > 0){
				data.menu.forEach(function(item){
					console.log(item);
					$('nav').append('<a href="'+item.MenuLink+'">'+item.MenuName+'</a>');
								  });
			}
			
	},
		error: function(){
			console.log('call was bad');
	}
	});
	
	
	
	
	
}

window.onload = init();