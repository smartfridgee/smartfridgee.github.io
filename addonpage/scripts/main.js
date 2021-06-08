const searchButton = document.getElementById('search-nav');
const cancelSearchButton = document.querySelector('.container-nav').querySelector('.cancel');
const searchBar = document.querySelector('.search-area');
const linksToHide = document.querySelector('.split-row-nav').querySelectorAll('a');
const moblieMenu = document.querySelector('.nav-mobile');
const mobileDropdown = document.querySelector('.container-nav-mobile');

cancelSearchButton.onclick = function(){
	linksToHide.forEach(item => {
		item.classList.remove('hidden');
	})
	cancelSearchButton.classList.add('hidden');
	searchBar.classList.add('hidden');
}

searchButton.onclick = function(){
	linksToHide.forEach(item => {
		item.classList.add('hidden');
	})
	cancelSearchButton.classList.remove('hidden');
	searchBar.classList.remove('hidden');
}

moblieMenu.onclick = function(){
	mobileDropdown.classList.toggle('hidden-menu');
	moblieMenu.classList.toggle('fa-bars');
	moblieMenu.classList.toggle('fa-times');
	document.body.classList.toggle('block');
}