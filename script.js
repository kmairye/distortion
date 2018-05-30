`use strict`;
window.addEventListener(`DOMContentLoaded`, defineInt);


let jsonObj;
let myJson;
let Q;
let fullQ = 25;
let numbers=[];
let countUpBy;
let countDownBy;
let msInterval;


// DEFINE THE INTERVAL BY WHICH THE JSON SHOULD BE FETCHED
function defineInt() {
    // DONE
    setInterval(fetchJson, 10000);
}
// GET THE JSON AND RETURN THE NUMBER OF PEOPLE IN QUEUE
async function fetchJson() {
    // DONE
    jsonObj = await fetch(`https://kea-alt-del.dk/kata-distortion/`);
    myJson = await jsonObj.json();
    addToArray(myJson.inQueue);
}
// ADD THE NUMBER TO AN ARRAY NUMBERS=[]. KEEP THE NUMBERS.LENGTH AT TWO
function addToArray(elm){
    // DONE
    numbers.push(elm);
    document.querySelector(`#number`).textContent = elm;
    if(numbers.length > 2) {
        numbers.shift();
    }
    if(numbers.length === 2) {
        findDifference();
    }
}
// FIND THE DIFFERENCE BETWEEN NUMBERS[0] AND NUMBERS[1] - THE OLDEST AND THE YOUNGEST ITEM
function findDifference() {
    // DONE    
    document.querySelector(`#number`).textContent = numbers[0];
    let oldestValue = Number(numbers[0]);
    let youngestValue = Number(numbers[1]);
    
    if(oldestValue<youngestValue) {
        countUpBy = youngestValue-oldestValue;
        defineIntUp();

    } else if(oldestValue>youngestValue) {
        countDownBy = oldestValue-youngestValue;
        defineIntDown();
    }
}
// DEFINE THE INTERVAL BY WHICH THE DISPLAYED NUMBER SHOULD BE COUNTING UP
function defineIntUp() {
    msInterval = Number(10000 / countUpBy);
    //setInterval(beginCountingUp, msInterval);
}
// DEFINE THE INTERVAL BY WHICH THE DISPLAYED NUMBER SHOULD BE COUNTING DOWN
function defineIntDown() {
    msInterval = Number(10000 / countDownBy);
    //setInterval(beginCountingDown, msInterval);
}



function beginCountingUp() {
    console.log(`Up by 1`);
}



function beginCountingDown() {
    console.log(`Down by 1`);
}


