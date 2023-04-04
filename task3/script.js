const trafficLightE1 = document.querySelector('#trafficLight');
const trafficLightE2 = document.querySelector('#trafficLight');
const trafficLightE3 = document.querySelector('#trafficLight');

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
}

trafficLightE2.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightE3.style.background = ('Red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
}

trafficLightE3.addEventListener('click', makeRed);

function makeGreen() {
    trafficLightE1.style.background = ('green');
    trafficLightE1.removeEventListener('click', makeGreen);
    trafficLightE1.addEventListener('click', makeYellow);
}

trafficLightE1.addEventListener('click', makeGreen);








