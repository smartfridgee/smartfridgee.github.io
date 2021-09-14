//https://www.zditm.szczecin.pl/pl/pasazer/rozklady-jazdy,tablica,slupek,13211

    let iframeRJ1 = document.getElementById('rj1');
    let iframeRJ2 = document.getElementById('rj2');

    let textRJ1 = document.getElementById('trj1');
    let textRJ2 = document.getElementById('trj2');

function loadSelected(){
    iframeRJ1.setAttribute('src', `https://www.zditm.szczecin.pl/pl/pasazer/rozklady-jazdy,tablica,slupek,${localStorage.getItem("rj1")}`);
    iframeRJ2.setAttribute('src', `https://www.zditm.szczecin.pl/pl/pasazer/rozklady-jazdy,tablica,slupek,${localStorage.getItem("rj2")}`);

    textRJ1.innerText = localStorage.getItem("trj1");
    textRJ2.innerText = localStorage.getItem("trj2");
}

function changeStops(){

    let selectedRJ1 = document.getElementById('slrj1').value;
    let selectedRJ2 = document.getElementById('slrj2').value;

    let selectedRJ1Text = document.getElementById('slrj1').options[document.getElementById('slrj1').selectedIndex].text
    let selectedRJ2Text = document.getElementById('slrj2').options[document.getElementById('slrj2').selectedIndex].text

    iframeRJ1.setAttribute('src', `https://www.zditm.szczecin.pl/pl/pasazer/rozklady-jazdy,tablica,slupek,${selectedRJ1}`);
    iframeRJ2.setAttribute('src', `https://www.zditm.szczecin.pl/pl/pasazer/rozklady-jazdy,tablica,slupek,${selectedRJ2}`);

    textRJ1.innerText = selectedRJ1Text;
    textRJ2.innerText = selectedRJ2Text;

    localStorage.setItem("rj1", selectedRJ1);
    localStorage.setItem("rj2", selectedRJ2);
    localStorage.setItem("trj1", selectedRJ1Text);
    localStorage.setItem("trj2", selectedRJ2Text);
}

window.onload = loadSelected();