// Can you solve these challenges 😉 ?



// #1 Create a function that takes in a person's name and
// console logs a greeting message
// E.g. input: 'John' --> output: 'Hello John'
// Solution:
const greet = (name) => {
  return `Hello ${name}`;
};

// console.log('#1 greeting:', greet('John'));




// #2 Create a function that takes in an object (e.g. person) and outputs
// a string using that object's properties.
/* E.g. input:
          person = {
            firstName: 'John',
            lastName: 'Doe',
            age: 25

        output: 'Hello, my name is John Doe and I am 25 years old.'
 */
// Solution:
const introduce = (person) => {
  const {firstName, lastName, age} = person;
  return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
};

const personA = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// console.log('#2 introduce:', introduce(personA));


// #3 Create a function that takes in an array of temperatures in fahrenheit
// and return a new array with the temperatures in celsius.
// Here is the conversion formula: T(°C) = (T(°F) - 32) × 5/9
const temperaturesInF = [42, 53, 22, 60]; // input
// output: [5.56, 11.67, -5.55, 15.66]
// Solution:
const convertToCelsius = (tempArr) => {
  return tempArr.map(temp => ((temp - 32) * 5 / 9).toFixed(2));
};

const temperaturesInC = convertToCelsius(temperaturesInF);

// console.log({temperaturesInC});



// #4 Given an array of person object and their ages, return how old the
// people would be after n (positive number) years have passed.
/* E.g.
afterNYears([
    { name: "Joel" : age: 32},
    { name: "Fred" : age: 44},
    { name: "Reginald" : age: 65},
    { name: "Susan" : age: 33},
    { name: "Julian" : age: 13},
  ], 1) ➞ [
    { name: "Joel" : age: 33},
    { name: "Fred" : age: 45},
    { name: "Reginald" : age: 66},
    { name: "Susan" : age: 34},
    { name: "Julian" : age: 14},
  ]
*/
// Solution:
const afterNYears = (peopleArr, n) => {
  return peopleArr.map(person => ({...person, age: person.age + n}))
};

const people = [
  { name: "Joel", age: 32},
  { name: "Fred", age: 44},
  { name: "Reginald", age: 65},
  { name: "Susan", age: 33},
  { name: "Julian", age: 13},
];

const numberOfYears = 1;

const peopleAfterNYears = afterNYears(people, numberOfYears);

// console.log({people, numberOfYears, peopleAfterNYears});





// #5 Write a function that converts an object into an array, where each element represents a key-value pair.
/* toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
  toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
  toArray({}) ➞ []
 */
// Solution:
const obj1 = { a: 1, b: 2 };

const toArray = (obj) => {
  return Object.entries(obj);
};

// console.log(toArray({}));














