let now = "menu"
speed = "fast"

function react_1() {
	if(now != "menu") {
		$("#react_1").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#react_1").fadeIn(speed)
			now = "css"
		});
	}
	
}

function react_2() {
	if(now != "menu") {
		$("#react_2").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#react_2").fadeIn(speed)
			now = "js"
		});
	}
	
}

function react_3() {
	if(now != "menu") {
		$("#react_3").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#react_3").fadeIn(speed)
			now = "xml"
		});
	}
	
}