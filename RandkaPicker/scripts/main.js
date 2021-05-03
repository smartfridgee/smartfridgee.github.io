//loadingScreen
const loadingScreen = setTimeout(function(){
	overlay = document.getElementById("loadingScreen");
	shark = document.getElementById("loadingShark");
	overlay.classList.toggle("off");
	shark.classList.toggle("off");
	setTimeout(function(){
		overlay.remove();
	}, 1000)
}, 500)

