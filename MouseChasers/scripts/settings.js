//SETTINGS
function getSpeed(event){
	value = event.currentTarget.innerHTML;
	$(".optionSpeed").css("background-color","");
	$(".optionSpeed").css("text-shadow","");
	event.currentTarget.style.backgroundColor = "dodgerblue";
	event.currentTarget.style.textShadow = "0px 0px 1px black";
	console.log(value);
	speed = parseFloat(value);
	sSpeed = parseFloat(value);
}

function getTimer(event){
	value = event.currentTarget.innerHTML;
	$(".optionTime").css("background-color","");
	$(".optionTime").css("text-shadow","");
	event.currentTarget.style.backgroundColor = "dodgerblue";
	event.currentTarget.style.textShadow = "0px 0px 1px black";
	console.log(value);
	sTime = parseInt(value);
}