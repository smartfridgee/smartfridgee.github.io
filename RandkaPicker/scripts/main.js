//loadingScreenSTART
const loadingScreen = setTimeout(function(){
	overlay = document.getElementById("loadingScreen");
	shark = document.getElementById("loadingShark");
	overlay.classList.toggle("off");
	shark.classList.toggle("off");
	setTimeout(function(){
		overlay.remove();
	}, 1000)
}, 500)
//loadingScreenEND

//formOutputValuesSTART
let formOutputOne;
let formOutputTwo;
let formOutputThree;
let formOutputFour;
let formOutputFive;
//formOutputValuesEND