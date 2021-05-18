// TEXT START //
let textInput = document.getElementById("textinput");
const textButtons = document.getElementById("text").getElementsByClassName("button");

for(i = 0; i < textButtons.length; i++){
	if(textButtons[i].value == "uppercase") upperCase(textButtons[i]);
	if(textButtons[i].value == "lowercase") lowerCase(textButtons[i]);
	if(textButtons[i].value == "startcase") startCase(textButtons[i]);
	if(textButtons[i].value == "sentencecase") sentenceCase(textButtons[i]);
	if(textButtons[i].value == "mixedst") mixedCaseFirst(textButtons[i]);
	if(textButtons[i].value == "mixednd") mixedCaseSecond(textButtons[i]);

}

function upperCase(element){
	element.addEventListener('click', ()=> {
		textInput.value = textInput.value.toUpperCase();
	})
}

function lowerCase(element){
	element.addEventListener('click', ()=> {
		textInput.value = textInput.value.toLowerCase();
	})
}

function startCase(element){
	element.addEventListener('click', ()=> {
		let content = textInput.value;
		let output = "";
		for(i = 0; i < content.length; i++){
			if(content[i] == " "){
				output += content[i] + content[i+1].toUpperCase();
				i++;
			}
			else if(i == 0){
				output += content[i].toUpperCase();
			}
			else{
				output += content[i].toLowerCase();
			}
		}
		textInput.value = output;
	})
}

function sentenceCase(element){
	element.addEventListener('click', ()=> {
		let content = textInput.value;
		let output = "";
		for(i = 0; i < content.length; i++){
			if(i == 0){
				output += content[i].toUpperCase();
			}
			else{
				output += content[i].toLowerCase();
			}
		}
		textInput.value = output;
	})
}

function mixedCaseFirst(element){
	element.addEventListener('click', ()=> {
		let content = textInput.value;
		let output = "";
		for(i = 0; i < content.length; i++){
			if(i % 2 == 0){
				output += content[i].toUpperCase();
			}
			else{
				output += content[i].toLowerCase();
			}
		}
		textInput.value = output;
	})
}

function mixedCaseSecond(element){
	element.addEventListener('click', ()=> {
		let content = textInput.value;
		let output = "";
		for(i = 0; i < content.length; i++){
			if(i % 2 == 0){
				output += content[i].toLowerCase();
			}
			else{
				output += content[i].toUpperCase();
			}
		}
		textInput.value = output;
	})
}

// TEXT STOP //
// METRICS START //

const selects = document.getElementById("mtconv").querySelectorAll("select");
let inputType = document.getElementById("metricsIPT");
let outputType = document.getElementById("metricsOPT");
let inputNumber = document.getElementById("mtarea");
let outputNumber = document.getElementById("mtoutput");

inputNumber.addEventListener('keyup', convertValues);

for(i = 0; i < selects.length; i++){
	selects[i].addEventListener('change', convertValues);
}

let mm, cm, m, km, output;

function convertValues(){
	inputTypeValue = inputType.value;
	outputTypeValue = outputType.value;
	inputNumberValue = inputNumber.value;
	
	
	
	if(inputTypeValue == "mm"){
		mm = 1;
		cm = 0.1;
		m = 0.001;
		km = 0.000001;
	}
	else if(inputTypeValue == "cm"){
		mm = 10;
		cm = 1;
		m = 0.01;
		km = 0.00001;
	}
	else if(inputTypeValue == "m"){
		mm = 1000;
		cm = 100;
		m = 1;
		km = 0.001;
	}
	else{
		mm = 1000000;
		cm = 100000;
		m = 1000;
		km = 1;
	}
	
	if(outputTypeValue == "mm"){
		output = inputNumberValue * mm;
	}
	else if(outputTypeValue == "cm"){
		output = inputNumberValue * cm;
	}
	else if(outputTypeValue == "m"){
		output = inputNumberValue * m;
	}
	else{
		output = inputNumberValue * km;
	}
	
	outputNumber.value = output;
	
}

// METRICS STOP //