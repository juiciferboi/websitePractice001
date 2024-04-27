
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


const pOne = document.body.style.backgroundImage = "url('/img/free-nature-images.jpg')"
const pTwo = document.body.style.backgroundImage = "url('/img/nature-image-for-website.jpg')"
const pThree = document.body.style.backgroundImage = 'none';


let arr = [pOne, pTwo];
 

function countIf() {
    if (count == four) {
        document.getElementById('mainMain').style.display = 'none';
        document.getElementById('body').style.backgroundImage = arr[(Math.floor(Math.random() * arr.length))];
        document.body.style.backgroundSize = 'cover';
        console.log('IT WORKS:', count)
    } else {
        console.log(count);
    }
}

