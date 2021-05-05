//CANVAS
var canvas = document.getElementById("canvas");

var height = window.innerHeight;
var width = window.innerWidth;

canvas.height = height;
canvas.width = width;

//MENU
let rules = document.getElementById("rules");

rules.addEventListener('click', () => {
  document.getElementById("menu").classList.toggle("off");
  document.getElementById("gameover_grad").classList.toggle("on");
})

//START

let start = document.getElementById("start");

start.addEventListener('click', () => {
	let countime = 3;
	
	document.getElementById("menu").classList.toggle("off"); 
	document.getElementById("system").classList.toggle("on"); 
	document.getElementById("odliczanie").classList.toggle("on"); 
  
	xObiekt = Math.floor(Math.random() * width);
	yObiekt = Math.floor(Math.random() * height);
  
	countdown = setInterval(function(){
		/////////ODLICZANIE/////////
		countime--;
		document.getElementById("odliczanie").innerHTML = countime; 
		
		if(countime == 0){
			/////////MOVEMENT/////////
			play = setInterval('draw()',10);
			
			/////////TIMER/////////
			system();
			
			/////////ODLICZANIE/////////
			clearInterval(countdown);
			document.getElementById("odliczanie").classList.toggle("on"); 
			document.getElementById("odliczanie").innerHTML = "3"; 
			
			/////////PAUSE/////////
			pauseBind();
		}
	}, 1000);
})

//GAME
canvas.addEventListener("mousemove", function(e){
    xMyszka = e.pageX;
    yMyszka = e.pageY;
});

var xMyszka = width/2;
var yMyszka = height/2; //myszka

var xObiekt;
var yObiekt;

var speed = 1;
var play;

function draw() {
	if (canvas.getContext) {
		var c = canvas.getContext('2d');
	
		distance = Math.sqrt(Math.pow((xMyszka-xObiekt),2) + Math.pow((yMyszka-yObiekt),2));
		
		xDst = speed*(xMyszka-xObiekt)/distance;
		yDst = speed*(yMyszka-yObiekt)/distance;
		
		angle = ((Math.atan2(yMyszka - yObiekt, xMyszka - xObiekt)) * 180) / Math.PI;

		if(angle < 0){
			angle += 360;
		}
		
		c.fillStyle="white";
		c.fillRect(0,0,width, height);

		if(character == 1){
			characterOne(xObiekt,yObiekt,c,angle);
			dead = "Kot Alojzy";
		}
		else if(character == 2){
			characterTwo(xObiekt,yObiekt,c,angle);
			dead = "Opos Poppy";
		}
		else if(character == 3){
			characterThree(xObiekt,yObiekt,c,angleB);
			angleB++;
			dead = "Boomerang";
		}
		
		xObiekt += xDst;
		yObiekt += yDst;
		
		if((xObiekt > xMyszka-25 && xObiekt < xMyszka+25)  && (yObiekt > yMyszka-25 && yObiekt < yMyszka+25)){
			
			/////////MOVEMENT/////////
			clearInterval(play);
			c.fillStyle="white";
			c.fillRect(0,0,width, height);
			
			/////////TIMER/////////
			clearInterval(timer);
			
			/////////SYSTEM/////////
			goWynik.innerHTML = level-1;
			goRekord.innerHTML = best;
			mRekord.innerHTML = best;
			tLevel = 5;
			level = 1;
			speed = sSpeed;
			licznik.innerHTML = tLevel;
			poziom.innerHTML = level;
			
			/////////GAMEOVER/////////
			document.getElementById("go_character").innerHTML = dead;
			document.getElementById("system").classList.toggle("on");
			document.getElementById("gameover_grad").classList.toggle("on");
			
			/////////PAUSE/////////
			pauseUnBind();
		}
	}
}

//SYSTEM
var licznik = document.getElementById("licznik");
var poziom = document.getElementById("poziom");
var rekord = document.getElementById("rekord");
var goWynik = document.getElementById("go_wynik");
var goRekord = document.getElementById("go_rekord");
var mRekord = document.getElementById("menu_rvalue");

var tLevel = 5;
var sSpeed = 1;
var level = 1;
var sTime = 1;
var best = 0;

var timer;
var time;
		
function system(){
	time = tLevel;
	timer = setInterval(function(){
		time--;
		licznik.innerHTML = time;
		
		if(time == 0){
			tLevel += sTime;
			time = tLevel;
			
			/////////REKORD/////////
			if(level > best){
				best = level;
				rekord.innerHTML = best;
			}
			
			level += 1;
			licznik.innerHTML = time;
			poziom.innerHTML = level;
			
			/////////MOVEMENT/////////
			speed += sSpeed;
			
		}	
	}, 1000);	
}

function pauseSystem(){
	play = setInterval('draw()',10);
	timer = setInterval(function(){
		time--;
		licznik.innerHTML = time;
	
		if(time == 0){
			tLevel += sTime;
			time = tLevel;
			
			/////////REKORD/////////
			if(level > best){
				best = level;
				rekord.innerHTML = best;
			}
			
			level += 1;
			licznik.innerHTML = time;
			poziom.innerHTML = level;
			/////////MOVEMENT/////////
			speed += sSpeed;
		}
	}, 1000);
}

//GAMEOVER
let gameoverMenu = document.getElementById("go_menu");

gameoverMenu.addEventListener('click', () => {
  document.getElementById("menu").classList.toggle("off");
  document.getElementById("gameover_grad").classList.toggle("on");
})

//PAUSE
function pauseBind(){
	document.addEventListener('keydown', escApply);
}

function escApply(event){
	var key = event.which;
		switch(key){
			//0
		 case 27:
			pause();
		}
}

function pauseUnBind(){
	document.removeEventListener('keydown', escApply);
}

let check = 1;

function pause(){
	document.getElementById("pause").classList.toggle("on"); 
	if(check == 1){
		clearInterval(play);
		clearInterval(timer);
		check = 0;
	}
	else if(check == 0){
		document.getElementById("odliczanie").classList.toggle("on"); 
		pauseUnBind();
		countime = 3;
		countdown = setInterval(function(){
			countime--;
			document.getElementById("odliczanie").innerHTML = countime; 
			if(countime == 0){
				pauseSystem();
				check = 1;
				clearInterval(countdown);
				document.getElementById("odliczanie").classList.toggle("on"); 
				document.getElementById("odliczanie").innerHTML = "3"; 
				/////////PAUSE/////////
				pauseBind();
			}
		}, 1000);
	}
}


