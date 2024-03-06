// Ways to declare a variable
// var, let, const

let firstName ='Gidi'
let lastName = 'Mutai'

console.log(firstName, lastName, age);

var age = 30;

console.log(age);
/*
Naming conventions
-Only lettrs, numbers, underscores and dollat signs
-Can't start with a number

Multi-Word Formating
firstName = camelCase
first_name = underscore
FirstName  = PascalCase
firstname = lowercase

*/

//re-assigning variables

age = 31;
console.log(age)

let score;

score = 1;

console.log(score)

if(true){
  score = score + 1
}
console.log(score)

const x = 100

//x = 200
// a constant can't be  reassigned but it's value can change

const arr = [1,2,3,4,5]
arr.push(6) 
// we can still use the push method to add new items in an array
console.log(arr)
const person ={
  name: 'Gidi'
};

person.name ='Gmutai'
person.email='gig.com'

console.log(person)

//use const unless you are gonna directly reassign something

//declare multiple values at the same time
let a, b, c;

const d = 10, e = 20, f=30;

console.log(f);
console.log(a)