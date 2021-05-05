//SETTINGS
function getSpeed(event){
	value = event.currentTarget.innerHTML;
	optionSpeed = document.getElementsByClassName("optionSpeed");
	optionSpeed.forEach((item) => {
		item.style.backgroundColor = "";
		item.style.textShadow = "";
	});
	event.currentTarget.style.backgroundColor = "dodgerblue";
	event.currentTarget.style.textShadow = "0px 0px 1px black";
	speed = parseFloat(value);
	sSpeed = parseFloat(value);
}

function getTimer(event){
	value = event.currentTarget.innerHTML;
	optionTime = document.getElementsByClassName("optionTime");
	optionTime.forEach((item) => {
		item.style.backgroundColor = "";
		item.style.textShadow = "";
	});
	event.currentTarget.style.backgroundColor = "dodgerblue";
	event.currentTarget.style.textShadow = "0px 0px 1px black";
	sTime = parseInt(value);
}