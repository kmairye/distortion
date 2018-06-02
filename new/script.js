`use strict`;

window.addEventListener(`DOMContentLoaded`, init);

let queueArr=[];

function init() {
    setInterval(fetchJson, 10000);
}

async function fetchJson() {
    let jsonObj = await fetch (`https://kea-alt-del.dk/kata-distortion/`);
    let myJson = await jsonObj.json();
    let inQueue = myJson.inQueue;
    createArr(inQueue);
}

function createArr(elm) {
    queueArr.push(elm);
    if(queueArr.length > 2) {
        queueArr.shift();
        console.log(queueArr);
    }
    let oldQnumber = Number(queueArr[0]);
    let newQnumber = Number(queueArr[1]);
    if(newQnumber > oldQnumber) {
        console.log(`new is bigger than old`);
        document.querySelector(`#foss`).style.width = `6vw`;
    } else if(newQnumber < oldQnumber) {
        console.log(`new is smaller than old`);
        document.querySelector(`#foss`).style.width = `0vw`; 
    }
    createDivs(newQnumber);
}

function createDivs(elm) {
   let beerHeight = elm/25*100;
   document.querySelector(`#beer`).style.height = `${beerHeight}%`;
}