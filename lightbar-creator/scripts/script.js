const leftLeds = document.querySelector('.left').querySelectorAll('.led');
const rightLeds = document.querySelector('.right').querySelectorAll('.led');
const middleLed = document.querySelector('.center').querySelector('.led');
const allLeds = document.querySelectorAll('.led');

let ledList = [];

let idCounter = 1;

allLeds.forEach(item=>{
	item.id = idCounter++;
})

leftLeds.forEach(item=>{
	ledList.push({id:item.id, color: "red", pattern: 1});
})

ledList.push({id:middleLed.id, color: "none", pattern: 0});

rightLeds.forEach(item=>{
	ledList.push({id:item.id, color: "blue", pattern: 2});
})

let pattern1 = ledList.filter(item => {
	return item.pattern == 1;
})

let pattern2 = ledList.filter(item => {
	return item.pattern == 2;
})

let pattern3 = ledList.filter(item => {
	return item.pattern == 3;
})

const leftWhite = document.querySelector('.left').querySelector('.lamp');
const rightWhite = document.querySelector('.right').querySelector('.lamp');

var pattern1flash;
var pattern2flash;
var pattern3flash;
var strobe1flash;
var strobe2flash;
var strobe3flash;
var auxilaryFlash;
var auxilaryCounter;

function basicRB(code){
	clearIntervals();
	
	ledList.forEach(item=>{
		document.getElementById(item.id).classList.remove(item.color);
	})
	
	if(code == 0){
		
		ledList.forEach(item=>{
			document.getElementById(item.id).classList.add(item.color);
		})
		
	}
	else if(code == 1){
		
		pattern1flash = setInterval(function(){
			pattern1.forEach(item =>{
				document.getElementById(item.id).classList.toggle(item.color);
			})
		},500)
		
		setTimeout(function(){
			pattern2flash = setInterval(function(){
				pattern2.forEach(item =>{
					document.getElementById(item.id).classList.toggle(item.color);
				})
			},500)
		},500)
		
	}
	else if(code == 2){
		
		pattern1flash = setInterval(function(){
			strobe2flash = setInterval(function(){
				pattern1.forEach(item =>{
					document.getElementById(item.id).classList.toggle(item.color);
				})
			}, 150);
			setTimeout(function(){
				clearInterval(strobe2flash);
			},600);
		},1200)
		
		setTimeout(function(){
			pattern2flash = setInterval(function(){
				strobe1flash = setInterval(function(){
					pattern2.forEach(item =>{
						document.getElementById(item.id).classList.toggle(item.color);
					})
				}, 150);
				setTimeout(function(){
					clearInterval(strobe1flash);
				},600);
			},1200)
		},600)
		
		setTimeout(function(){
			pattern3flash = setInterval(function(){
				strobe3flash = setInterval(function(){
					pattern3.forEach(item =>{
						document.getElementById(item.id).classList.toggle(item.color);
					})
				}, 150);
				setTimeout(function(){
					clearInterval(strobe3flash);
				},600);
			},1200)
		},300)
		
	}
	else if(code == 3){

		pattern1flash = setInterval(function(){
			strobe2flash = setInterval(function(){
				pattern1.forEach(item =>{
					document.getElementById(item.id).classList.toggle(item.color);
				})
			}, 87.5);
			setTimeout(function(){
				clearInterval(strobe2flash);
			},350);
		},700)
		
		setTimeout(function(){
			pattern2flash = setInterval(function(){
				strobe1flash = setInterval(function(){
					pattern2.forEach(item =>{
						document.getElementById(item.id).classList.toggle(item.color);
					})
				}, 87.5);
				setTimeout(function(){
					clearInterval(strobe1flash);
				},350);
			},700)
		},350)

	}
	else if(code == 4){
		
		pattern1flash = setInterval(function(){
			pattern1.forEach(item =>{
				document.getElementById(item.id).classList.toggle(item.color);
			})
		},130)
		
		setTimeout(function(){
			pattern2flash = setInterval(function(){
				pattern2.forEach(item =>{
					document.getElementById(item.id).classList.toggle(item.color);
				})
			},130)
		},130)
		
	}
	else if(code == 5){
		
		let counter = 0;
		auxilaryFlash = setInterval(function(){
			if(counter == ledList.length){
				clearInterval(auxilaryCounter);
			}
			auxilaryCounter = setInterval(function(){
				let object = ledList[counter];
				document.getElementById(object.id).classList.add(object.color);
				counter++;
			},150)
			setTimeout(function(){
				ledList.forEach(object => {
					document.getElementById(object.id).classList.remove(object.color);
					counter = 0;
				})
			},1450)
		},1450)
		
	}
	else if(code == 6){
		
		let counter = ledList.length-1;
		auxilaryFlash = setInterval(function(){
			if(counter == -1){
				clearInterval(auxilaryCounter);
			}
			auxilaryCounter = setInterval(function(){
				let object = ledList[counter];
				document.getElementById(object.id).classList.add(object.color);
				counter--;
			},150)
			setTimeout(function(){
				ledList.forEach(object => {
					document.getElementById(object.id).classList.remove(object.color);
					counter = ledList.length-1;
				})
			},1450)
		},1450)
		
	}
	else{

	}
}

function basicWhite(){
	leftWhite.classList.toggle('on');
	rightWhite.classList.toggle('on');
}

function cycle(){
	document.body.classList.toggle('night');
	document.querySelector('h1').classList.toggle('glow');
	document.querySelector('.build').classList.toggle('black');
	document.querySelector('.copy').classList.toggle('black');
}

let ledNumber = document.getElementById('ledNumber');
let ledColor = document.getElementById('ledColor');
let ledPattern = document.getElementById('ledPattern');
let edit = document.querySelector('.edit');

const colorButtons = document.getElementById('colors').querySelectorAll('button');
const patternButtons = document.getElementById('patterns').querySelectorAll('button');
const submitChanges = document.getElementById('submit');

submitChanges.onclick = function(){
	ledList[editedLed].pattern = patternSetting;
	ledList[editedLed].color = colorSetting;
	
	pattern1 = ledList.filter(item => {
		return item.pattern == 1;
	})

	pattern2 = ledList.filter(item => {
		return item.pattern == 2;
	})
	
	pattern3 = ledList.filter(item => {
		return item.pattern == 3;
	})
	edit.classList.add('hidden');
}

colorButtons.forEach(button => {
	button.addEventListener('click', ()=>{
		colorSetting = button.innerHTML.toLowerCase();
		ledColor.innerHTML = colorSetting;
	})
})

patternButtons.forEach(button => {
	button.addEventListener('click', ()=>{
		patternSetting = parseInt(button.value);
		ledPattern.innerHTML = patternSetting;
	})
})

var editedLed;

ledList.forEach(item =>{
	document.getElementById(item.id).addEventListener('click', event =>{
		
		clearIntervals();
		
		ledList.forEach(item=>{
			document.getElementById(item.id).classList.remove(item.color);
		})
		
		ledNumber.innerHTML = item.id;
		ledColor.innerHTML = item.color;
		ledPattern.innerHTML = item.pattern;
		
		colorSetting = item.color;
		patternSetting = item.pattern;

		editedLed = ledList.indexOf(item);
		
		edit.classList.remove('hidden');
	});
})

const activator = document.querySelector('.activator');

activator.onclick = function(){
	edit.classList.add('hidden');
}

function clearIntervals(){
	clearInterval(pattern1flash);
	clearInterval(pattern2flash);
	clearInterval(pattern3flash);
	clearInterval(strobe1flash);
	clearInterval(strobe2flash);
	clearInterval(strobe3flash);
	clearInterval(auxilaryFlash);
	clearInterval(auxilaryCounter);
}