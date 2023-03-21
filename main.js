/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//Images:
let d6roll = document.querySelector("#d6roll");
let droll1 = document.querySelector("#d6roll1");
let droll2 = document.querySelector("#d6roll2");
let d12roll = document.querySelector("#d12roll");
let d20roll = document.querySelector("#d20roll");

//Reset button:
let resetButton = document.querySelector("#reset-button");

//Mean:
let d6mean = document.querySelector("d6-rolls-mean");
let double6mean = document.querySelector("double-d6-rolls-mean");
let d12mean = document.querySelector("d12-rolls-mean");
let d20mean = document.querySelector("d20-rolls-mean");


/*******************
 * EVENT LISTENERS *
 *******************/

d6roll.addEventListener('click', function(){
    console.log("d6 clicked!")
    d6rollFunction();})

droll1.addEventListener('click', function(){
    console.log("d6-1 clicked!")
    d61and2rollFunction();})

droll2.addEventListener('click', function(){
    console.log("d6-2 clicked!")
    d61and2rollFunction();})

d12roll.addEventListener('click', function(){
    console.log("d12 clicked!")
    d12rollFunction()})

d20roll.addEventListener('click', function(){
    console.log("d20 clicked!")
    d20rollFunction()})

resetButton.addEventListener('click', function(){
    console.log("reset clicked!")
    reset()})

/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    
    d6roll.src = "./images/start/d6.png"
    droll1.src = "./images/start/d6.png"
    droll2.src = "./images/start/d6.png"
    d12roll.src = "./images/start/d12.jpeg"
    d20roll.src = "./images/start/d20.jpg"
    sixes = []
    d6rollsmean.innerText = "N/A"
    doubleSixes = []
    doubled6rollsmean.innerText = "N/A"
    twelves = []
    d12rollsmean.innerText = "N/A"
    twenties = []
    d20rollsmean.innerText = "N/A"
    console.log(`The array is empty = ${sixes}`)
    console.log(`The array is empty = ${doubleSixes}`)
    console.log(`The array is empty = ${twelves}`)
    console.log(`The array is empty = ${twenties}`)

}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6rollFunction(){
    let random = getRandomNumber(6);
    console.log(random);
    d6roll.src = `./images/d6/${random}.png`;
    sixes.push(random);
    if(sixes.length >= 1){
        let d6reduce = sixes.reduce(function(total, num){
            let a = total + num
            return a
        })
        let a = d6reduce / sixes.length
        d6rollsmean.innerText = a
        console.log(`The mean is ${a}`)
    }
    
}

function d61and2rollFunction(){
    let random1 = getRandomNumber(6);
    let random2 = getRandomNumber(6)
    console.log(random1);
    console.log(random2);
    droll1.src = `./images/d6/${random1}.png`;
    droll2.src = `./images/d6/${random2}.png`;
    doubleSixes.push(random1, random2);
    console.log(doubleSixes)
    if(doubleSixes.length >= 1){
        let double6reduce = doubleSixes.reduce(function(total, num){
            let a = total + num
        return a 
        })
        let a = double6reduce / doubleSixes.length
        doubled6rollsmean.innerText = a
        console.log(`The mean is ${a}`)
    }
    
}
function d12rollFunction(){
    let random = getRandomNumber(12);
    console.log(random);
    d12roll.src = `./images/numbers/${random}.png`;
    twelves.push(random);
    console.log(twelves)
    if(twelves.length >= 1){
        let twelvesreduce = twelves.reduce(function(total, num){
        return total + num 
        })
        let a = twelvesreduce / twelves.length
        d12rollsmean.innerText = a
        console.log(`The mean is ${a}`)
    }
    
}
function d20rollFunction(){
    let random = getRandomNumber(20);
    console.log(random);
    d20roll.src = `./images/numbers/${random}.png`;
    twenties.push(random);
    console.log(twenties)
    if(twenties.length >= 1){
        let twentiesreduce = twenties.reduce(function(total, num){
        return total + num 
        })
        let a = twentiesreduce /  twenties.length
        d20rollsmean.innerText = a
        console.log(`The mean is ${a}`)
    }
    
}
