//ONE
const formInputOne = document.getElementById("inputOne").getElementsByClassName("option");

function formInputValueOne(event){
	for(i = 0; i < 2; i++){
		formInputOne[i].style.fontWeight = "";
	}
	event.currentTarget.style.fontWeight = "bold";
	formOutputOne = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputOne[i].addEventListener('click', formInputValueOne);
}

//TWO
const formInputTwo = document.getElementById("inputTwo").getElementsByClassName("option");

function formInputValueTwo(event){
	for(i = 0; i < 2; i++){
		formInputTwo[i].style.fontWeight = "";
	}
	event.currentTarget.style.fontWeight = "bold";
	formOutputTwo = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputTwo[i].addEventListener('click', formInputValueTwo);
}

//THREE
const formInputThree = document.getElementById("inputThree").getElementsByClassName("option");

function formInputValueThree(event){
	for(i = 0; i < 2; i++){
		formInputThree[i].style.fontWeight = "";
	}
	event.currentTarget.style.fontWeight = "bold";
	formOutputThree = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputThree[i].addEventListener('click', formInputValueThree);
}

//FOUR
const formInputFour = document.getElementById("inputFour").getElementsByClassName("option");

function formInputValueFour(event){
	for(i = 0; i < 2; i++){
		formInputFour[i].style.fontWeight = "";
	}
	event.currentTarget.style.fontWeight = "bold";
	formOutputFour = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputFour[i].addEventListener('click', formInputValueFour);
}

//FIVE
const formInputFive = document.getElementById("inputFive").getElementsByClassName("option");

function formInputValueFive(event){
	for(i = 0; i < 2; i++){
		formInputFive[i].style.fontWeight = "";
	}
	event.currentTarget.style.fontWeight = "bold";
	formOutputFive = event.currentTarget.innerHTML;
}

for(i = 0; i < 2; i++){
	formInputFive[i].addEventListener('click', formInputValueFive);
}