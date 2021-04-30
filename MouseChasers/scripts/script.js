//CANVAS
var canvas = document.getElementById("canvas");

var height = window.innerHeight;
var width = window.innerWidth;

canvas.height = height;
canvas.width = width;

//MENU
$("#rules").click(function(){
	$("#rulestab").toggleClass("on");
});

//START
$("#start").click(function(){
	let countime = 3;
	$("#menu").toggleClass("off");
	$("#system").toggleClass("on");
	$("#odliczanie").toggleClass("on");
  
	xObiekt = Math.floor(Math.random() * width);
	yObiekt = Math.floor(Math.random() * height);
  
	countdown = setInterval(function(){
		countime--;
		$("#odliczanie").html(countime);
		
		if(countime == 0){
			/////////MOVEMENT/////////
			play = setInterval('draw()',10);
			
			/////////TIMER/////////
			system();
			
			/////////ODLICZANIE/////////
			clearInterval(countdown);
			$("#odliczanie").toggleClass("on");
			$("#odliczanie").html("3");
			
			/////////PAUSE/////////
			pauseBind();
		}
  }, 1000);
});

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
			console.log("zgon");
			clearInterval(play);
			c.fillStyle="white";
			c.fillRect(0,0,width, height);
			
			/////////TIMER/////////
			clearInterval(timer);
			
			/////////SYSTEM/////////
			goWynik.innerHTML = level-1;
			goRekord.innerHTML = best;
			mRekord.innerHTML = best;
			tlevel = 5;
			level = 1;
			speed = sSpeed;
			licznik.innerHTML = tlevel;
			poziom.innerHTML = level;
			
			/////////GAMEOVER/////////
			$("#go_character").html(dead);
			$("#system").toggleClass("on");
			$("#gameover_grad").toggleClass("on");
			
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

var tlevel = 5;
var sSpeed = 1;
var level = 1;
var sTime = 1;
var best = 0;

var timer;
var time;
		
function system(){
	time = tlevel;
	timer = setInterval(function(){
		time--;
		licznik.innerHTML = time;
		
		if(time == 0){
			tlevel += sTime;
			time = tlevel;
			
			/////////REKORD/////////
			if(level > best){
				best = level;
				rekord.innerHTML = best;
				Cookies.set("best", best);
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
$("#go_menu").click(function(){
  $("#menu").toggleClass("off");
  $("#gameover_grad").toggleClass("on");
  $("body").css("cursor", "default");
});

//PAUSE
function pauseBind(){
	$(document).bind('keydown', function (e) {
	   var key = e.which;
		switch(key){
			//0
		 case 27:
			pause();
			console.log("pause");
		}
	});
}

function pauseUnBind(){
	$(document).unbind('keydown');
}

var check = 1;

function pause(){
	$("#pause").toggleClass("on");
	if(check == 1){
		clearInterval(play);
		clearInterval(timer);
		check = 0;
	}
	else if(check == 0){
		$("#odliczanie").toggleClass("on");
		countime = 3;
		countdown = setInterval(function(){
			countime--;
			$("#odliczanie").html(countime);
			if(countime == 0){
				play = setInterval('draw()',10);
				timer = setInterval(function(){
					time--;
					licznik.innerHTML = time;
				
					if(time == 0){
						tlevel += sTime;
						time = tlevel;
						
						/////////REKORD/////////
						if(level > best){
							best = level;
							rekord.innerHTML = best;
							Cookies.set("best", best);
						}
						
						level += 1;
						licznik.innerHTML = time;
						poziom.innerHTML = level;
						/////////MOVEMENT/////////
						speed += sSpeed;
					}	
				}, 1000);	
				check = 1;
				clearInterval(countdown);
				$("#odliczanie").toggleClass("on");
				$("#odliczanie").html("3");
			}
		}, 1000);
	}
}

//cookies
window.onload = function(){
	best = parseInt(Cookies.get("best"));
}
