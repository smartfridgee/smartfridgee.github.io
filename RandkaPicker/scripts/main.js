//loadingScreen
const loadingScreen = setTimeout(function(){
	overlay = document.getElementById("loadingScreen");
	overlay.classList.toggle("off");
	setTimeout(function(){
		overlay.remove();
	}, 1000)
}, 500)

