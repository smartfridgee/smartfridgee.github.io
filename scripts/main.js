const navBar = document.querySelector('nav');

window.onscroll = function(e) {
	// print "false" if direction is down and "true" if up
	console.log(this.oldScroll > this.scrollY);
	if(this.oldScroll > this.scrollY == false){
		navBar.classList.add('hidden');
	}
	else{
		navBar.classList.remove('hidden');
	}
	this.oldScroll = this.scrollY;
}

const sections = document.querySelectorAll('section');

let sectionIDs = [];

sections.forEach(item => {
	sectionIDs.push(item.id);
})

const upButton = document.getElementById('up');