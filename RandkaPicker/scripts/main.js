//loadingScreenSTART
window.onload = setTimeout(function(){
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
let backgroundNumber = 1;

const backgroundChangeFirewatch = setInterval(function(){
	background = document.getElementById("background")
	//0 = firewatch; 1 = sunset; 2 = village;
	
	if(backgroundNumber == 1){
		background.classList.toggle("sunset");
		backgroundNumber = 2;
	}
	else if(backgroundNumber == 2){
		background.classList.toggle("sunset");
		background.classList.toggle("village");
		backgroundNumber = 0;
	}
	else if(backgroundNumber == 0){
		background.classList.toggle("village");
		backgroundNumber = 1;
	}
}, 15000)
//backgroundChangeEND

//formOutputValuesSTART
let formOutputOne;
let formOutputTwo;
let formOutputThree;
let formOutputFour;
let formOutputFive;
//formOutputValuesEND

function checkInput(){
	if(formOutputOne == null) return false;
	if(formOutputTwo == null) return false;
	if(formOutputThree == null) return false;
	if(formOutputFour == null) return false;
	if(formOutputFive == null) return false;
	
	return true;
}

function formSubmit(){
	let error = document.getElementById("title");
	check = checkInput();
	
	if(check == false) return error.innerHTML = "WYBIERZ!", error.style.color = "red", error.style.fontWeight = "bold";
	
	return console.log("jej");
	
}