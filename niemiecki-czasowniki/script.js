const czaspl = document.getElementById('czasow');
const count = document.getElementById('count');
let counter = 1;
let ans_inf = "";
let ans_prat = "";
let ans_pzip = "";

function loadNewCzas() {
    document.getElementById('inf').value = "";
    document.getElementById('prat').value = "";
    document.getElementById('pzip').value = "";
    czaspl.textContent = czasowniki[counter].pl;
    ans_inf = czasowniki[counter].inf;
    ans_prat = czasowniki[counter].prat;
    ans_pzip = czasowniki[counter].pzip;
    count.textContent = `${counter} / ${czasowniki.length}`;
    counter++;
    if(counter == czasowniki.length) { counter = 1; }
}

function checkIfCorrect() {
    let user_inf = document.getElementById('inf');
    let user_prat = document.getElementById('prat');
    let user_pzip = document.getElementById('pzip');

    if(user_inf.value !== ans_inf) {
        user_inf.style.borderColor = "red";
        user_inf.style.boxShadow = "0px 0px 5px 1px red";
        setTimeout(()=> {
            user_inf.style.borderColor = "grey";
            user_inf.style.boxShadow = "none";
        },2000)
    }
    else if(user_prat.value !== ans_prat) {
        user_prat.style.borderColor = "red";
        user_prat.style.boxShadow = "0px 0px 5px 1px red";
        setTimeout(()=> {
            user_prat.style.borderColor = "grey";
            user_prat.style.boxShadow = "none";
        },2000)
    }
    else if(user_pzip.value !== ans_pzip) {
        user_pzip.style.borderColor = "red";
        user_pzip.style.boxShadow = "0px 0px 5px 1px red";
        setTimeout(()=> {
            user_pzip.style.borderColor = "grey";
            user_pzip.style.boxShadow = "none";
        },2000)
    }
    else {
        loadNewCzas();
    }
}

window.addEventListener('keypress', (e)=> {
    if(e.key === "enter") {
        checkIfCorrect();
    }
})

window.onload = loadNewCzas;