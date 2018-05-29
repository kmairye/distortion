`use strict`;

// load the DOM
window.addEventListener(`DOMContentLoaded`, defineInt);



let jsonObj;
let myJson;
let Q;
let fullQ = 25;

let numbers=[];



function defineInt() {
    setInterval(fetchJson, 10000);
}



async function fetchJson() {
    jsonObj = await fetch(`https://kea-alt-del.dk/kata-distortion/`);
    myJson = await jsonObj.json();
    // numbers.push(myJson.inQueue);
    // return spin(myJson.inQueue);
    /*return spin(myJson.inQueue);*/
    // console.log(myJson.inQueue);
    // numbers.push(myJson.inQueue);
    return count(myJson.inQueue);
}

function count(elm){
    numbers.push(elm);
    // console.log(numbers);
    
    if(numbers.length === 3) {
        numbers.shift();
        document.querySelector(`#number`).textContent = numbers[0];
        console.log(numbers);
        
    }
    
}

/* function spin(elm) {
    console.log(elm);

    // document.querySelector("polyline").setAttribute(`points`, numbers);
    /* let op = 1/100*elm;
    console.log(op);
    document.querySelector("circle").style.opacity = op;
    document.querySelector("circle").setAttribute(`r`, elm); 
}*/
