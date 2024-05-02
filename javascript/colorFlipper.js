let colors = ["black", "red", "green", "blue", "yellow", "white", "orange", "cyan", "purple"];

let colorRand;

function randColorSel() {
    colorRand = colors[(Math.floor(Math.random() * colors.length))];
    colorChange();
}


function colorChange() {
    let change = document.getElementById('mainMain')
    change.style.backgroundColor = colorRand;





};

let toggle = document.getElementById('toggleFlash')

let time = () => setInterval(randColorSel, 1000);

toggle.addEventListener("change", () => {
    if (toggle.checked == true) {
        time();
    } else {
        clearInterval(time);
        location.reload();
    }});