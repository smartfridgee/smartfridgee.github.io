const mainElement = document.getElementById("main-mover");
const mainBackground = document.getElementById("bkg-main");

const icon = document.querySelector("i");

let arrowMove = setInterval(()=>{
	icon.classList.toggle("icon-move");
}, 1000)

document.addEventListener('scroll', event => {
	let value = window.scrollY;
	icon.classList.remove("icon-move");
	clearInterval(arrowMove);
	
	if (value > 8500)
    {
        let ending = document.getElementById('end');
		end.classList.remove("hidden");
    }
	
	mainElement.style.transform = "translateY("+value * 0.70 + "px)";
	mainBackground.style.transform = "translateY("+value * 0.80 + "px)";
})