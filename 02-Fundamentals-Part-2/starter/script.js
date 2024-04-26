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



const friends = ['michael','Steven','Peter'];
console.log(friends[0]);

const year = new Array(1991,1984,2008,2020);

console.log(year.length);
console.log(year.length-1);
friends[2]='nimesh';
console.log(friends);


const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[3]);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[3])]
console.log(ages);

// add elements
const friends = ['michael','Steven','Peter'];
console.log(friends); 
friends.push('Jay'); //last 
console.log(friends);

friends.unshift('john');  //first
console.log(friends);

// remove elemets

friends.pop();  //last
console.log(friends);

friends.shift();  //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));


if (friends.includes('Peter')){
    console.log('You have a friend called Steven');
}



function calcTip(bill){
    if (50<=bill && bill<=300){
        return bill*0.15;
    }
    else{
        return bill*0.2;
    }
}
const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
console.log(calcTip(555));

const jonasArray = [
    'jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas ={
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}



const jonas ={
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
} 
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+nameKey]); 
console.log(jonas['last'+nameKey]);
// console.log(jonas[])
// console.log(jonas.'last'+nameKey);

const interestedIn = prompt('What do you want to know about jonas? choose between firstName,lastName,age,job, and friends');

if (jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}
else{
    console.log('Wrong request! What do you want to know about jonas? choose between firstName,lastName,age,job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// delete jonas.twitter;
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

const jonas = {
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    
    // calcAge: function (birthYear){
        //     return 2037-birthYear;
        // }
        // calcAge: function (){
            //     console.log(this);
            //     return 2037-this.birthYear;
            // }
            calcAge: function (){
                // console.log(this);
                this.age=2037 - this.birthYear;
                return this.age;
            },
            getSummary: function(){
                return `${this.firstName} is a ${this.age} old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
            }
        };
        
        // const calcAge = function (birthYear){
            //     return 2037-birthYear;
            // }
            
            console.log(jonas.calcAge());
            console.log(jonas.age);
            console.log(jonas.age);
            console.log(jonas.age);
            console.log(jonas.calcAge());
            console.log(jonas.calcAge());
            // console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));


//challenge 
// jonas is a 46-year old teacher, and he has a driver's license

// console.log(`${jonas.firstName} is a ${jonas.age} old ${jonas.job}, and he ${this.dri}`)
console.log(jonas.getSummary());



const BMIJohn ={
    firstName: 'John',
    lastName: 'Smith',
    mass: 78,
    height : 1.69,

    calcBMI: function(){
        this.BMI = this.mass /(this.height*this.height);
        return this.BMI;
    }
};
const BMIMark ={
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 92,
    height : 1.95,

    calcBMI: function(){
        this.BMI = this.mass /(this.height*this.height);
        return this.BMI;
    }
};


BMIJohn.calcBMI();
BMIMark.calcBMI();


console.log(BMIJohn.calcBMI(),BMIMark.calcBMI());
console.log(`${BMIJohn.BMI > BMIMark.BMI ? 'a' : 'b'}`);
console.log(`${BMIJohn.BMI > BMIMark.BMI ? `${BMIJohn.firstName+BMIJohn.lastName}'s BMI (${BMIJohn.calcBMI()}) is higher than ${BMIMark.firstName+BMIMark.lastName} (${BMIMark.calcBMI()})` : `${BMIMark.firstName+BMIMark.lastName}'s BMI (${BMIMark.calcBMI()}) is higher than ${BMIJohn.firstName+BMIJohn.lastName} (${BMIJohn.calcBMI()})` }`);

// console.log(BMIJohn.calcBMI());

for (let i =1; i<=10; i++){
    console.log(`Lifting weight repetition ${i} 💪`)
}

const jonasArray = [
    'jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const types = []
for (let i=0; i<jonasArray.length; i++){
    // console.log(jonasArray[i], typeof jonasArray[i]);
    // types[i] = typeof jonasArray[i];
    // console.log(types[i]);
    types.push(typeof jonasArray[i]);
    // console.log(types[i]);
}
console.log(types);

const years = [1991,2007,1969,2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037- years[i]);
}
console.log(ages);

// continue and break
for (let i=0; i<jonasArray.length; i++){
    if( typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
};
console.log('........number.......')
for (let i=0; i<jonasArray.length; i++){
    if( typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/