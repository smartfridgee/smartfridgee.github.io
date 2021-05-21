// NAV START //

const navBar = document.getElementById("nav");
const navButton = document.getElementById("navbutton");

navButton.addEventListener('click', ()=> {
	nav.classList.toggle("slide");
})

// NAV STOP //
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

function convertValues(){
	inputTypeValue = inputType.value;
	outputTypeValue = outputType.value;
	inputNumberValue = inputNumber.value;
	
	let mm, cm, m, km, output;
	
	if(inputTypeValue == "mm"){
		mm = 1;
		cm = 10;
		m = 1000;
		km = 1000000;
	}
	else if(inputTypeValue == "cm"){
		mm = 0.1;
		cm = 1;
		m = 100;
		km = 100000;
	}
	else if(inputTypeValue == "m"){
		mm = 0.001;
		cm = 0.01;
		m = 1;
		km = 1000;
	}
	else{
		mm = 0.000001;
		cm = 0.00001;
		m = 0.001;
		km = 1;
	}
	
	if(outputTypeValue == "mm"){
		output = inputNumberValue / mm;
	}
	else if(outputTypeValue == "cm"){
		output = inputNumberValue / cm;
	}
	else if(outputTypeValue == "m"){
		output = inputNumberValue / m;
	}
	else{
		output = inputNumberValue / km;
	}
	
	outputNumber.value = output;
	
}

// METRICS STOP //
// WEIGHTS START //

const wSelects = document.getElementById("wghconv").querySelectorAll("select");
let wInputType = document.getElementById("weightsIPT");
let wOutputType = document.getElementById("weightsOPT");
let wInputNumber = document.getElementById("wgharea");
let wOutputNumber = document.getElementById("wghoutput");

wInputNumber.addEventListener('keyup', convertWeightValues);

for(i = 0; i < wSelects.length; i++){
	wSelects[i].addEventListener('change', convertWeightValues);
}

function convertWeightValues(){
	inputTypeValue = wInputType.value;
	outputTypeValue = wOutputType.value;
	inputNumberValue = wInputNumber.value;
	
	let ml, g, dag, l, kg, t, output;
	
	if(inputTypeValue == "g"){
		g = 1;
		ml = 1;
		dag = 10;
		l = 1000;
		kg = 1000;
		t = 1000000;
	}
	else if(inputTypeValue == "ml"){
		g = 1;
		ml = 1;
		dag = 10;
		l = 1000;
		kg = 1000;
		t = 1000000;
	}
	else if(inputTypeValue == "dag"){
		g = 0.1;
		ml = 0.1;
		dag = 1;
		l = 100;
		kg = 100;
		t = 100000;
	}
	else if(inputTypeValue == "l"){
		g = 0.01;
		ml = 0.01;
		dag = 0.01;
		l = 1;
		kg = 1;
		t = 1000;
	}
	else if(inputTypeValue == "kg"){
		g = 0.01;
		ml = 0.01;
		dag = 0.01;
		l = 1;
		kg = 1;
		t = 1000;
	}
	else{
		g = 0.000001;
		ml = 0.000001;
		dag = 0.00001;
		l = 0.001;
		kg = 0.001;
		t = 1;
	}
	
	if(outputTypeValue == "g"){
		output = inputNumberValue / g;
	}
	else if(outputTypeValue == "ml"){
		output = inputNumberValue / ml;
	}
	else if(outputTypeValue == "dag"){
		output = inputNumberValue / dag;
	}
	else if(outputTypeValue == "l"){
		output = inputNumberValue / l;
	}
	else if(outputTypeValue == "kg"){
		output = inputNumberValue / kg;
	}
	else{
		output = inputNumberValue / t;
	}
	
	wOutputNumber.value = output;
	
}

// WEIGHTS STOP //
// SPEEDS START //

const sSelects = document.getElementById("spdconv").querySelectorAll("select");
let sInputType = document.getElementById("speedsIPT");
let sOutputType = document.getElementById("speedsOPT");
let sInputNumber = document.getElementById("spdarea");
let sOutputNumber = document.getElementById("spdoutput");

sInputNumber.addEventListener('keyup', convertSpeedValues);

for(i = 0; i < selects.length; i++){
	sSelects[i].addEventListener('change', convertSpeedValues);
}

function convertSpeedValues(){
	inputTypeValue = sInputType.value;
	outputTypeValue = sOutputType.value;
	inputNumberValue = sInputNumber.value;
	
	let mm, cm, m, km, output;
	
	if(inputTypeValue == "kmh"){
		kmh = 1;
		mph = 0.621371192;
	}
	else{
		kmh = 1.609344;
		mph = 1;
	}
	
	if(outputTypeValue == "kmh"){
		output = inputNumberValue * kmh;
	}
	else{
		output = inputNumberValue * mph;
	}
	
	sOutputNumber.value = output;
	
}