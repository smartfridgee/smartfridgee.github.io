//CHARACTER
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

window.onload = img1.style.border = "3px solid #00fcc2";

var angleB = 1;

var character = 1;

img1.addEventListener('click', () => {
  img1.style.border = "3px solid #00fcc2";
  img2.style.border = "";
  img3.style.border = ""; 
  character = 1;
});

img2.addEventListener('click', () => {
  img2.style.border = "3px solid #00fcc2";
  img1.style.border = "";
  img3.style.border = ""; 
  character = 2;
});

img3.addEventListener('click', () => {
  img3.style.border = "3px solid #00fcc2";
  img1.style.border = "";
  img2.style.border = ""; 
  character = 3;
});

//

function characterOne(x, y, c, angle){
	//rotation 
		c.translate(x, y);
		c.rotate((Math.PI / 180) * angle);
		c.translate(-x, -y);
	
	//main
		c.fillStyle="#ccffcc";
		c.beginPath();
		c.arc(x,y,35,0,2*Math.PI);
		c.fill();
		c.stroke();
		
	//head
		c.fillStyle="#ffffcc";
		c.beginPath();
		c.arc(x+25,y,25,0,2*Math.PI);
		c.fill();
		c.stroke();
		
	//eyes
		c.fillStyle="black";
		c.beginPath();
		c.arc(x+35,y-10,3,0,2*Math.PI);
		c.fill();
		
		c.beginPath();
		c.arc(x+35,y+10,3,0,2*Math.PI);
		c.fill();
		
	//moustache
		c.fillStyle="black";
		c.beginPath();
		c.moveTo(x+47, y-25)
		c.lineTo(x+53, y+25)
		c.lineWidth = 2;
		c.stroke();
		
		c.beginPath();
		c.moveTo(x+53, y-25)
		c.lineTo(x+47, y+25)
		c.lineWidth = 2;
		c.stroke();
		
	//ears
		c.fillStyle="black";
		c.beginPath();
		c.moveTo(x+11, y+2)
		c.bezierCurveTo(x-2, y+3, x-2, y+13, x+11, y+14)
		c.lineWidth = 2;
		c.stroke();
		
		c.beginPath();
		c.moveTo(x+11, y-2)
		c.bezierCurveTo(x-2, y-3, x-2, y-13, x+11, y-14)
		c.lineWidth = 2;
		c.stroke();
		
	//tail
		c.fillStyle="black";
		c.beginPath();
		c.moveTo(x-35, y)
		c.bezierCurveTo(x-45, y-15, x-55, y+15, x-65, y)
		c.lineWidth = 2;
		c.stroke();
		
	//rotation
		c.translate(x, y);
		c.rotate(-(Math.PI / 180) * angle);
		c.translate(-x, -y);
}

function characterTwo(x, y, c, angle){
	//rotation 
		c.translate(x, y);
		c.rotate((Math.PI / 180) * angle);
		c.translate(-x, -y);
		
	//main
		c.lineWidth = 1;
		c.fillStyle="#858585"; 
		c.beginPath();
		c.arc(x,y,35,0,2*Math.PI);
		c.fill();
		c.stroke();
		
	//nose
		c.fillStyle="pink";
		c.beginPath();
		c.moveTo(x+48, y+8);
		c.lineTo(x+67, y);
		c.lineTo(x+48, y-8);
		c.fill();
		c.stroke();
		
	//moustache
		c.fillStyle="black";
		c.beginPath();
		c.moveTo(x+72, y-15)
		c.lineTo(x+62, y+15)
		c.lineWidth = 2;
		c.stroke();
		
		c.beginPath();
		c.moveTo(x+62, y-15)
		c.lineTo(x+72, y+15)
		c.lineWidth = 2;
		c.stroke();
		
	//boop
		c.lineWidth = 1;
		c.fillStyle="#fc03a9";
		c.beginPath();
		c.arc(x+67,y,3,0,2*Math.PI);
		c.fill();
		c.stroke();
		
	//head
		c.fillStyle="#f5f5f5";
		c.beginPath();
		c.arc(x+25,y,25,0,2*Math.PI);
		c.fill();
		c.stroke();
		
	//eyes
		c.fillStyle="black";
		c.beginPath();
		c.arc(x+32,y-7,3,0,2*Math.PI);
		c.fill();
		
		c.beginPath();
		c.arc(x+32,y+7,3,0,2*Math.PI);
		c.fill();
		
	//tail
		c.fillStyle="black";
		c.beginPath();
		c.moveTo(x-35, y)
		c.lineTo(x-65, y)
		c.lineWidth = 2;
		c.stroke();
		
	//ears
		c.fillStyle="black";
		c.beginPath();
		c.moveTo(x+11, y+12)
		c.bezierCurveTo(x+10, y+20, x+15, y+22, x+20, y+18)
		c.lineWidth = 2;
		c.stroke();
		
		c.beginPath();
		c.moveTo(x+11, y-12)
		c.bezierCurveTo(x+10, y-20, x+15, y-22, x+20, y-18)
		c.lineWidth = 2;
		c.stroke();
		
	//rotation	
		c.translate(x, y);
		c.rotate(-(Math.PI / 180) * angle);
		c.translate(-x, -y);
}

var randomColor = "green";

setInterval(function(){
	randomColor = Math.floor(Math.random()*16777215).toString(16);
}, 400);

function characterThree(x, y, c, angleB){
	
	//rotation
		c.translate(x, y);
		c.rotate((Math.PI / 180) * angleB);
		c.translate(-x, -y);
	
	//boomerang
	
		c.fillStyle="#"+randomColor;
		c.beginPath();
		c.moveTo(x-25,y+35);
		c.bezierCurveTo(x+40,y+10, x+40, y-10, x-25, y-35);
		c.bezierCurveTo(x-27,y-33, x-27, y-32, x-25, y-30);
		c.bezierCurveTo(x+25, y-10, x+25,y+10, x-25,y+30);
		c.bezierCurveTo(x-27,y+33, x-27, y+32, x-25, y+35);
		c.fill();
		c.stroke();
	
	//rotation
		c.translate(x, y);
		c.rotate(-(Math.PI / 180) * angleB);
		c.translate(-x, -y);
}