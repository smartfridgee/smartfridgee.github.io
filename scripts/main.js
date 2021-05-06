const helloSection = document.getElementById("hello");
const starsSection = document.getElementById("stars");

document.addEventListener('scroll', () => {
	let value = window.scrollY;
	let helloValue = 300;
	let headerValue = 159;
	helloSection.style.top = helloValue + value * 0.60 + 'px';
	starsSection.style.top = value * 0.70 + 'px';
})