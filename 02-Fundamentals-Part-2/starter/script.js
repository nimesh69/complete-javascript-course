/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :d');


// const interface = 'Audio';
// const private = 534;

function logger(){
    console.log('MY name is nimesh');
}
// calling / running / incvoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    // console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5,0);
console.log(fruitProcessor(5,0));
// console.log(fruitProcessor('juice','juice with'));
const result=fruitProcessor(5,1);
console.log(result);

//function declaration
function calcAge1(birthYear){
    // const age = 2037 - birthYear;
    // return age;
    return 2037-birthYear;
}

//function expression
const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1,age2);

// arrow function 
const calcAge3 = birthYear => 2037 - birthYear;

const age3=calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037-birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

// console.log(yearsUntilRetirement);
console.log(yearsUntilRetirement(1991,'nimesh'));


//calling a function inside function
function cutFruitPieces(fruit){
    return fruit *4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    // console.log(apples,oranges);
    const juice = `juice with ${applePieces} apples and ${orangesPieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,2));
*/


const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

const averageDolphins = calcAverage(44,23,71);
const averageKoalas = calcAverage(65,54,49);

function checkWinner(averageDolphins,averageKoalas){
    console.log(averageDolphins, averageKoalas);
    if (averageDolphins >= 2*averageKoalas){
        console.log(`Dolphins wins with ${averageDolphins} vs ${averageKoalas}`);
    }
    else if (averageKoalas >= 2*averageDolphins) {
        console.log(`Koalas wins with ${averageKoalas} vs ${averageDolphins}`);
    }
    else{
        console.log('No team wins');
    }
}

checkWinner(averageDolphins,averageKoalas);
