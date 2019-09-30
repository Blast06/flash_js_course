//Javascript ES6 COURSE

console.log('JAVASCRIPT ES6 COURSE');

//VAR AND LET
let var_let = "var and let are different, var is not limited by scope, but let instead ,it is. Let's see: ";
console.log(var_let);

console.log('js value outside scope');
let js = 6;
console.log('js :', js);
{
    let js = 5;
    console.log('js :', js);
    console.log('Here, js value is different than the earlier js value which was 6 instead of 5');
    console.log('this happens because this value is in another scope');
}

//TEMPLATE LITERAL STRINGS
console.warn("TEMPLATE LITERAL STRINGS:");

//examples
let wr = "world";
let tlr = "Hello ${w}";
console.log('tlr :', tlr);

//CAN WE MANIPULATE CONSTANTS?
console.log("CAN WE MANIPULATE CONSTANTS? , let's see");

// /examples
const PAR = [1,2,3,4];
console.warn(PAR);
PAR.push(5,6,7);
console.warn(PAR);

console.log('We can add to the constant, what we cant do is reassign them');


//SPREAD OPERATOR
console.log('SPREAD OPERATOR');
console.log("Spread individual values and insert them into an array");
//examples
let z1 = [100,200,300];
let d = [...z1,400,500];
console.log('d :', d);

//example 2
let a1 = [7,8,9];
let a2 = [6, ...a1, 10];

console.log('a2 :', a2);

//example 3
function print(...z) {
    console.log('z :', z);
}
let z = [1,2,3];
print(1,2,3,4,5,6); // you can add as many values as you can..

//ARRAY DESTRUCTURING ASSIGNMENT 
console.log(' ARRAY DESTRUCTURING ASSIGNMENT');
let c = [200,300];
let [a,b] = c;

console.log('c :', a,b);

//DESTRUCTURING ASSIGNMENT WITH OBJECTS
console.log('DESTRUCTURING ASSIGNMENT WITH OBJECTS');

//examples
let julio = {
    height: 5,
    age: 23,
    nationality: 'dominican'
};

let {height,nationality} = julio;

console.log(height,nationality);

//ARROW FUNCTIONS
console.log('ARROW FUNCTIONS');
console.log(" It's a short function..without the function keyword: ");

//examples
const blastoff = () => {
    console.log('blastoff has launched..');
};

blastoff();

//NOTE 
//ARROW FUNCTION IGNORE THIS(DOES NOT HAVE BINDED A THIS, LET'S SEE..)
//this part wont work because of babel using strict

// let ab = 25;

// let printThis = function() {
//     this.ab = 50;
//     console.log('this.a :', this.a);

// }

// printThis();

// let arrowPrint = () => {
//     console.log("this.a in arrrowPrint ", this.ab);
// }

//Assign from value or by reference
console.log('ASSIGN BY VALUE OR REFERENCE :');
console.log("here's the difference with assign by value or reference:");
console.log("Primitive does not take assign by reference, only by their value, it means, if you modify one, the other keeps its value:");

let value1 = 5;
let value2 = value1;

console.log('value2 :', value2);
console.warn("Now, look when we change the value of the var value2");
value2 = 9;
console.log('value2 :', value2);
console.log("Let's print the value1 variable: ", value1 );

console.warn("Now by reference:");
let value3 = [1,2,3,4];
let value4 = value3;

console.log('value3 :', value3);
console.warn("Now, look what happens when we change the value of value4");
value4.push(5);
console.log('value4 has this value :', value4);
console.log('value3 has this value :', value3);
console.log("What happened here?, primite data does not get reference, they get value, but none primitive they do get value by reference");


console.log("TYPE COERTION");
console.log("Is how JS recognize the data type");

let number1 = 5;

console.log( 5 + 5 + '5');
console.log( 5 + '5');
console.log( '5' + '5');
console.log( '5' + 5);
console.log( "Hola" + "5");
console.log( '4' * 5);
console.log( '4' + 5);
console.log( true + 5);


console.log("Operators");
console.log("Highlighting the non common ones:");
console.log("The == & the ===");
console.log("== compares data at a value level, let's see: ");
console.log("5 == '5'");
console.log(5 == '5');
console.log('Returns true because of the VALUE, not the data!');
console.log("5 === '5'");
console.log(5 === '5');
console.log("Returns false because the data TYPE is not the same so the values are different");
console.log("The != & the !==");
console.log("5 != '5'");
console.log(5 != '5');
console.log("Returns false because it compares the value, not the data type");
console.log("5 !== '5'");
console.log(5 !== '5');
console.log("Returns true because they are really different, one is a number and the other a string");
console.log("Whe it comes to compare, it is better to use these four to those tasks...");

console.log(" ======================= ");
console.log("Single operators");
console.log(" ! , typeof:");

console.log(typeof "jorge");
console.log(typeof 6);
console.log(" ======================= ");

console.log("Binary operators:");
console.log(" --, ++");
console.log("We can use them after or before of execution");

console.log("If we use it after, the value will be applied for the next execution, let's see:");

//example
let binary1 = 10;
console.log('binary1++ :', binary1++);
binary1++;
console.log('binary1++ :', binary1);

console.log("If we use it before, the value will be applied before execution, let's see:");
//example
let binary2 = 10;
console.log('++binary2 :', binary2);
console.log('++binary2 :', ++binary2);

console.log(' ====================== ');
console.log(" Ternary operator");
console.log(" It's an operator that needs three parameters: ");
console.log(" statement ? 'true' : 'false' ");

let age = prompt("Tell me your age");

let isAdult = age >= 18 ? "You're an adult" : "You're a teenager";

alert(isAdult);

console.log(' ====================== ');
console.log(" Short circuit operator ");


console.log(" let shortCircuit = shortC || 56; ");

let shortC;
let shortCircuit = shortC || 56;
console.log("This operator is like a short way to use the OR...");
console.log("It takes the true value, it means that it will take either the first value or the second value or the value that is not false..");

console.log("Short circuit using &&")
console.log("With the && it's kind of the opposite");


console.log(' ====================== ');
console.log(" Numbers ");

console.log(" toFixed() ");
console.log(" specifies the number of decimals and also uses round through the process ");

//examples
let number2Fixed = 5;
console.log(number2Fixed);
console.log('number2Fixed :', number2Fixed.toFixed(2));
number2Fixed = 5.873456;
console.log(number2Fixed);
console.log('number2Fixed :', number2Fixed.toFixed(3));

console.log(" parseInt and parseFloat ");
console.log(" parseInt converts string into a valid integer number ");
console.log(" parseFloat converts string into a valid float number ");
let parseNumber = "20";
console.log('parseInt :', parseInt(parseNumber));
parseNumber = "20.567";
console.log('parseFloat(parseNumber) :', parseFloat(parseNumber)); 



console.log('================');
console.log(' TEXT MANIPULATION');
console.log('replace :');
console.log(' replace(original,replacement) :');
console.log("hola mundo".replace("mundo","edTeam"));

console.log('substr :');
console.log(' substr(start,length) :');
console.log("hola mundo".substr(2,4));

console.log('replace :');
console.log(' replace(original,replacement) :');


console.log("========================");
console.log("Truthy and Falsy values");
console.log("Falsy values: ");
console.log(` 0, NaN, undefined, null, ""  `);
console.log("Truthy values: ");
console.log("not empty string, number different from cero, arrays and objects");



//function examples(Js in gral)
console.log("Js in gral - function example");

function saludar(persona,sexo) {
    let saludo = sexo === 'm' ? 'bienvenido' : 'bienvenida';
    return `${saludo} ${persona} a EDTeam`;
    
}

console.log(saludar("Maria","f"));
console.log(saludar("Mario","m"));


console.log("==========================");

//function examples(Js in gral)
console.log("Multiple parameters with spread operator(parameter rest):");

const sumarTodos = (...numeros) => {
    let resultado = 0;
    numeros.map(x => resultado += x);
    console.log(resultado);
    
}
sumarTodos(1,3,4,5,56,6,7,67,88,76);

console.log("==========================");

console.log("NOTES ABOUT FUNCTIONS");

console.log("Functions can be stored in vars or constants:");
console.log("-Functions of expresions");

const clo = console.log; //if you use the () you call the console.log function, without it, you assign the function to 'clo'
clo("Proof that this work");

console.log("They can be passed as argument in another function:");
console.log("They're called => callbacks");

function sumar(x) {
    return function (y) {
        return x + y;
    }
}

//also, there's a closure there
clo(sumar(4)(5));

//also, with arrow functions
const suma = x => y => x + y
clo(suma(4)(7))

//Tricky one
const doSomething = x => y => x * y
const ab = doSomething(2)(2); // 4
const bb = doSomething(3) // y => 3 * y
clo(doSomething(ab)(bb(3))) // doSomething(4)(9) = 36

clo("===========================")

console.log("They can be returned from another function: ");
console.log("They're called: => closures");

function aumentar() {
    let numer0 = 0;
    return function(){
        numer0++;
        clo(numer0)
    }
}
aumentar()()

console.log("They can have methods or properties: ");
console.log("That's POO");



clo("===========================")

//ASSIGN TO MORE THAN 1 VARIABLE MORE THAN 1 VALUES
console.log("DESTRUCTURING DATA - ARRAYS:");

let array_amigos = ["holra","hey","dimelo","more"];
let [s1,s2,s3,s4] = array_amigos;
clo(s1);




// MAP METHOD
console.log('MATH METHOD :');
console.log("The math method goes on every element on the array and creates a new one, let's see: ");

let points = [10,20,30];

points = points.map( x => x + 1 );
console.log('points :', points);




//FILTER METHOD
console.log('FILTER METHOD :');
console.log('Allows you to filter the elements of an array and creates a new one :');

let notes = [30,44,55,56,78,60,90,21,14,43,32,33];

let goodNotes = notes.filter( n => n > 56);

console.log('goodNotes :', goodNotes);

console.log("==================");
console.log("STRINGS");

let capital = prompt("Ingresa la capital de Peru").toLowerCase().trim();

let message = capital === 'lima' ? 'Correcto!' : 'Te equivocaste, la capital es Lima';

alert(message);

console.log("Methods");


// SORT METHOD

clo("===========================")

console.log("SORT METHOD");
//IT DOES NOT WORK WITH NUMBER 
let mama = "hola mama"
let new_mama = mama.split('').reverse();
let reverse_mama;


//TRICK TO WORK WITH NUMBERS
let numbers2 = [1,3,5,7,2,3,4,6,90];
clo(numbers2.sort( (a,b) => a - b))

// INDEXOF METHOD
clo("Index of method - find in array whatever you passed in and returns the index of it")
let arrayFind = [1,2,3,4,5,6,7,8,8,8];
clo(arrayFind.indexOf(4))

// FIND METHOD (callback)
// returns the first one that meets the condition
arrayFind.find( number => number > 4)

//FINDINDEX METHOD
//returns the index o fthe first one that meets the condition
arrayFind.findIndex( number => number > 4)

//DELETE DUPLICATE ELEMENTS IN ARRAY
clo(arrayFind);
clo( new Set(arrayFind))

//CONVERT OBJECT TO ARRAY WITH SPREAD OPERATOR
clo([...new Set(arrayFind)])

//SPREAD OPERATOR ... 
clo("Consist in introduce more than one parameter into something")

clo(Math.min(...arrayFind))
clo(Math.max(...arrayFind))



let arrTest = ["Julio","Pedo","Juan", "Jose"]
// FOREACH METHOD

// REDUCE METHOD
//it makes the whole array list into one value


// SOME METHOD
//searchs for at least one value that meets the requirements asked and returns a boolean
clo("SOME METHOD");
arrTest.some(el => el.includes('a'))

//EVERY METHOD
//search for a requirement in every item in the array and returns a boolean
arrTest.every( el => el.length > 2)
// KEYS METHOD

// VALUES METHOD

