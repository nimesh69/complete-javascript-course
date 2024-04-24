/*
let js = 'js is not available';
// if (js == 'js is not available') alert('js is available');
4 + 7 + 5 + 89 - 5 + 5;
console.log(4 + 7 + 5 + 89 - 5 + 5);
let jhs = "js is not available";
// comments
/* multiline comments 
let firstName="nimesh";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let jonas_matilda ="jm";   
let $function=27;
console.log($function);

let person="jonas"; //normal declaration first_person_name
let PI=3.1415;  //for constants declaration
let Person="person"; //usually USED IN oop
let myFirstJob='Programmer';
let myCurrentJob='teacher';
let javascriptIsFun= true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof myFirstJob);

javascriptIsFun= 'yes'; //dynamic typing
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year=1991;
console.log(typeof year);

concole.log(typeof null);
const now= 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageSarah/10, 2 ** 3); //2**3 means 2*2*2

const firstName = 'Jonas';
const lastName = 'schmedtmann';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

const now= 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;
console.log(now - 1991 > now - 2018); 

const markMass=78;
const johnMass=92;
const markHeight=1.69;
const johnHeight=1.95;
BMIMark=markMass/ (markHeight ** 2);
BMIJohn=johnMass/ (johnHeight ** 2);
console.log(BMIMark);
console.log(BMIJohn);
markHigherBMI=BMIMark>BMIJohn;
console.log(markHigherBMI);

const firstName = 'jonas';
const job = 'teacher';
const birthYear=1991;
const year = 2037;
const jonas ="I'm " + firstName + ", a " + (year-birthYear) + 'years old' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
 multiple \n\
 lines');

console.log(`String
multiple
lines`); 

const age = 15;
const isOldEnough = age >=18;
console.log(isOldEnough);
if(isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if(birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}

console.log(century);


const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear)+ 18);



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(NaN));

const age = 18;
if (age ===18) console.log('you just became an adult(strict)');

if (age ==18) console.log('you just became an adult(loose)');


// const favourite = prompt("What is your favourite number?");
const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);


const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision){
    console.log('Sarah is able to drive');
}
else{
    console.log('Someone else should drive');
}

const isTried = true;
console.log(hasDriverLicense || hasGoodVision ||isTried);

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 81;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 86;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAverage);
console.log(koalasAverage);

// if (koalasAverage >dolphinsAverage) {
//     console.log('Koalas win the trophy 🏆');
// }
// else if (koalasAverage === dolphinsAverage) {
    //     console.log('Dolphins win the trophy 🏆');
    // }
    // else {
        //     console.log('No win the trophy!');
// }


if (koalasAverage >dolphinsAverage && koalasAverage >=100) {
    console.log('Koalas win the trophy 🏆');
}
else if (koalasAverage < dolphinsAverage && dolphinsAverage >=100) {
    console.log('Dolphins win the trophy 🏆');
}
else if(koalasAverage === dolphinsAverage && (koalasAverage >=100 && dolphinsAverage >=100)){
    console.log("It's a draw");
}
else{
    console.log('No win the trophy!');
}



const day ='wednesday';
 switch(day){
    case 'thursday': // day === 'thursday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case'saturday':
    case'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
        break;
 }
 
 const age = 23;
 age >= 18 ? console.log('I like to drink wine'): console.log('I like to drink water');
 
 const drink = age >= 18 ? 'wine' : 'water';
 
 console.log(drink);
 
 console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
 */

 const bill = 275;
 const tip = 50<=bill<=300 ? 0.15*bill: 0.20*bill;
 console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`)
