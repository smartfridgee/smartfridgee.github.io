//loadingScreenSTART
window.onload = loadingScreen;

function loadingScreen(){
	setTimeout(function(){
		overlay = document.getElementById("loadingScreen");
		shark = document.getElementById("loadingShark");
		overlay.classList.toggle("off");
		shark.classList.toggle("off");
		setTimeout(function(){
			overlay.remove();
		}, 1000)
	}, 500)
}
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


//checkInputSTART
function checkInput(){
	if(formOutputOne == null) return false;
	if(formOutputTwo == null) return false;
	if(formOutputThree == null) return false;
	if(formOutputFour == null) return false;
	if(formOutputFive == null) return false;
	
	return true;
}
//checkInputSTOP


//formSubmitSTART
function formSubmit(){
	let error = document.getElementById("title");
	check = checkInput();
	
	if(check == false) return error.innerHTML = "WYBIERZ!", error.style.color = "red", error.style.fontWeight = "bold";
	
	clearResult();
	innerResult();
	
	let resultWindow = document.getElementById("formResult");
	resultWindow.classList.add("on");
	
	return error.innerHTML = "WYBIERZ", error.style.color = "black", error.style.fontWeight = "normal";
}
//formSubmitSTOP


//closeButtonSTART
const closeButton = document.getElementById("closeButton");

closeButton.addEventListener('click', () => {
	let resultWindow = document.getElementById("formResult");
	resultWindow.classList.remove("on");
})
//closeButtonSTOP


//innerResultSTART
function innerResult(){
	let list = document.getElementById("formResultList");
	let newcontent = document.createElement('div');
	
	let alone = formOutputOne.toLowerCase();
	let anxiety = formOutputTwo.toLowerCase();
	let weather = formOutputThree.toLowerCase();
	let strong = formOutputFour.toLowerCase();
	let food = formOutputFive.toLowerCase();

	dateList.filter((item) => {
		if(item.alone == alone && item.anxiety == anxiety && item.weather == weather && item.strong == strong && item.food == food){
			
			newcontent.innerHTML = '<div class="formResultOption">'+item.name+'</div>';

			while (newcontent.firstChild) {
				list.appendChild(newcontent.firstChild);
			}
			
		}
	});
}
//innerResultSTOP


//clearResultSTART
function clearResult(){
	let list = document.getElementById("formResultList");
	list.innerHTML = "";
}
//clearResultSTOP


//playAudioSTART
function playAudio(url) {
  new Audio(url).play();
}
//playAudioSTOP