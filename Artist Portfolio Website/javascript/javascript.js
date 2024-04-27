function myFunctionOne() {
    document.getElementById('div-one').style.display = 'none';
}

function myFunctionTwo() {
    document.getElementById('div-two').style.display = 'none';
}

function myFunctionThree() {
    document.getElementById('div-three').style.display = 'none';
}

function myFunctionFour() {
    document.getElementById('div-four').style.display = 'none';
}

let count = 0;
let four = 4;
    
function countUp () {
        count++;
}


const pOne = document.body.style.backgroundImage = "url('img/free-nature-images.jpg')"
const pTwo = document.body.style.backgroundImage = "url('img/nature-image-for-website.jpg')"
const pThree = document.body.style.backgroundImage = "url('img/painting-mountain-lake-with-mountain-background_188544-9126.png')";
const pFour = document.body.style.backgroundImage = "url('img/tree-736885_1280.jpg')"

document.body.style.backgroundImage = 'none';

let arr = [pOne, pTwo, pThree, pFour];
 

function reloadPage () {
    window.location.reload()
}

function countIf() {
    if (count == four) {
        document.getElementById('mainMain').style.display = 'none';
        document.getElementById('body').style.backgroundImage = arr[(Math.floor(Math.random() * arr.length))];
        document.body.style.backgroundSize = 'cover';
        setTimeout(reloadPage, 5000);
    } else {
        console.log(count);
    }
}

const button = document.getElementById("toggleLightDark");

function toggle(button) {
    if (button.value == "off") {
      button.value = "on";
      document.querySelector("link").href = "css/lightmode.css";
    } else {
      button.value = "off";
      document.querySelector("link").href = "css/default.css";
    }
  }


