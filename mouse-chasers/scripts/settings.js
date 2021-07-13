//SETTINGS
function getSpeed(event){
	value = event.currentTarget.innerHTML;
	optionSpeed = document.getElementsByClassName("optionSpeed");
	for(i = 0; i < optionSpeed.length; i++){
		optionSpeed[i].style.backgroundColor = "";
		optionSpeed[i].style.textShadow = "";
	}
	event.currentTarget.style.backgroundColor = "dodgerblue";
	event.currentTarget.style.textShadow = "0px 0px 1px black";
	speed = parseFloat(value);
	sSpeed = parseFloat(value);
}

function getTimer(event){
	value = event.currentTarget.innerHTML;
	optionTime = document.getElementsByClassName("optionTime");
	for(i = 0; i < optionSpeed.length; i++){
		optionTime[i].style.backgroundColor = "";
		optionTime[i].style.textShadow = "";
	}
	event.currentTarget.style.backgroundColor = "dodgerblue";
	event.currentTarget.style.textShadow = "0px 0px 1px black";
	sTime = parseInt(value);
}