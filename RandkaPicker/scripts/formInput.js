//ONE
const formInputOne = document.getElementById("inputOne").getElementsByClassName("option");

function formInputValueOne(event){
	for(i = 0; i < 2; i++){
		formInputOne[i].style.backgroundColor = "";
	}
	event.currentTarget.style.backgroundColor = "white";
	formOutputOne = event.currentTarget.value;
}

for(i = 0; i < 2; i++){
	formInputOne[i].addEventListener('click', formInputValueOne);
}

//TWO
const formInputTwo = document.getElementById("inputTwo").getElementsByClassName("option");

function formInputValueTwo(event){
	for(i = 0; i < 2; i++){
		formInputTwo[i].style.backgroundColor = "";
	}
	event.currentTarget.style.backgroundColor = "white";
	formOutputTwo = event.currentTarget.value;
}

for(i = 0; i < 2; i++){
	formInputTwo[i].addEventListener('click', formInputValueTwo);
}

//THREE
const formInputThree = document.getElementById("inputThree").getElementsByClassName("option");

function formInputValueThree(event){
	for(i = 0; i < 2; i++){
		formInputThree[i].style.backgroundColor = "";
	}
	event.currentTarget.style.backgroundColor = "white";
	formOutputThree = event.currentTarget.value;
}

for(i = 0; i < 2; i++){
	formInputThree[i].addEventListener('click', formInputValueThree);
}

//FOUR
const formInputFour = document.getElementById("inputFour").getElementsByClassName("option");

function formInputValueFour(event){
	for(i = 0; i < 2; i++){
		formInputFour[i].style.backgroundColor = "";
	}
	event.currentTarget.style.backgroundColor = "white";
	formOutputFour = event.currentTarget.value;
}

for(i = 0; i < 2; i++){
	formInputFour[i].addEventListener('click', formInputValueFour);
}

//FIVE
const formInputFive = document.getElementById("inputFive").getElementsByClassName("option");

function formInputValueFive(event){
	for(i = 0; i < 2; i++){
		formInputFive[i].style.backgroundColor = "";
	}
	event.currentTarget.style.backgroundColor = "white";
	formOutputFive = event.currentTarget.value;
}

for(i = 0; i < 2; i++){
	formInputFive[i].addEventListener('click', formInputValueFive);
}