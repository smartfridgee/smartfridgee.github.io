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

//backgroundChangeSTART
const backgroundChange = setInterval(function(){
	background = document.getElementById("background")
	background.classList.toggle("sunset");
}, 15000)
//backgroundChangeEND

//formOutputValuesSTART
let formOutputOne;
let formOutputTwo;
let formOutputThree;
let formOutputFour;
let formOutputFive;
//formOutputValuesEND

function playAudio(url) {
  new Audio(url).play();
}