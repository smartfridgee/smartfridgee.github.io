const navBar = document.querySelector('nav');

window.onscroll = function(e) {
	// print "false" if direction is down and "true" if up
	if(this.oldScroll > this.scrollY == false){
		navBar.classList.add('hidden');
		navTrigger.style.pointerEvents = "inherit";
	}
	else{
		navBar.classList.remove('hidden');
		navTrigger.style.pointerEvents = "none";
	}
	this.oldScroll = this.scrollY;
}

const navTrigger = document.querySelector('.trigger');

navTrigger.addEventListener('mouseenter', ()=>{
	navBar.classList.remove('hidden');
	navTrigger.style.pointerEvents = "none";
})

navBar.addEventListener('mouseout', ()=>{
	navBar.classList.add('hidden');
	navTrigger.style.pointerEvents = "inherit";
})

const sections = document.querySelectorAll('section');

let sectionIDs = [];

sections.forEach(item => {
	sectionIDs.push(item.id);
})

let sectionCounter = 0;

function changeSection(direction){
	if(direction == 0){
		window.scrollTo(0,0);
		sectionCounter = 0;
		return;
	}
	
	if(direction == 1 && sectionCounter < sections.length-1){
		let target = document.getElementById(sections[sectionCounter + direction].id);
		target.scrollIntoView({behavior: "smooth", block: "start"});
		sectionCounter += direction;
		return;
	}
	
	if(direction == -1 && sectionCounter > 0){
		let target = document.getElementById(sections[sectionCounter + direction].id);
		target.scrollIntoView({behavior: "smooth", block: "start"});
		sectionCounter += direction;
		return;
	}
	
	
}