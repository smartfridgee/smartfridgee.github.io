const textShadow = "0px 0px 5px #466f94"
const fontWeight = "bold";

//formOutputValuesSTART
let formOutputOne;
let formOutputTwo;
let formOutputThree;
let formOutputFour;
let formOutputFive;
//formOutputValuesEND

//ONE
const formInputOne = document.getElementById("inputOne").getElementsByClassName("option");

function formInputValueOne(event){
	for(i = 0; i < 2; i++){
		formInputOne[i].style.textShadow = "";
		formInputOne[i].style.fontWeight = "";
	}
	event.currentTarget.style.textShadow = textShadow;
	event.currentTarget.style.fontWeight = fontWeight;
	formOutputOne = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputOne[i].addEventListener('click', formInputValueOne);
}

//TWO
const formInputTwo = document.getElementById("inputTwo").getElementsByClassName("option");

function formInputValueTwo(event){
	for(i = 0; i < 2; i++){
		formInputTwo[i].style.textShadow = "";
		formInputTwo[i].style.fontWeight = "";
	}
	event.currentTarget.style.textShadow = textShadow;
	event.currentTarget.style.fontWeight = fontWeight;
	formOutputTwo = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputTwo[i].addEventListener('click', formInputValueTwo);
}

//THREE
const formInputThree = document.getElementById("inputThree").getElementsByClassName("option");

function formInputValueThree(event){
	for(i = 0; i < 2; i++){
		formInputThree[i].style.textShadow = "";
		formInputThree[i].style.fontWeight = "";
	}
	event.currentTarget.style.textShadow = textShadow;
	event.currentTarget.style.fontWeight = fontWeight;
	formOutputThree = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputThree[i].addEventListener('click', formInputValueThree);
}

//FOUR
const formInputFour = document.getElementById("inputFour").getElementsByClassName("option");

function formInputValueFour(event){
	for(i = 0; i < 2; i++){
		formInputFour[i].style.textShadow = "";
		formInputFour[i].style.fontWeight = "";
	}
	event.currentTarget.style.textShadow = textShadow;
	event.currentTarget.style.fontWeight = fontWeight;
	formOutputFour = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputFour[i].addEventListener('click', formInputValueFour);
}

//FIVE
const formInputFive = document.getElementById("inputFive").getElementsByClassName("option");

function formInputValueFive(event){
	for(i = 0; i < 2; i++){
		formInputFive[i].style.textShadow = "";
		formInputFive[i].style.fontWeight = "";
	}
	event.currentTarget.style.textShadow = textShadow;
	event.currentTarget.style.fontWeight = fontWeight;
	formOutputFive = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputFive[i].addEventListener('click', formInputValueFive);
}