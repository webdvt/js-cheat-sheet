// Can you solve these challenges 😉 ?


/* #1 Create a function that takes in a person's name and
   console logs a greeting message.
   E.g. input: 'John' --> output: 'Hello John'
 */
const greet = (name) => {
  // TODO: Type your code here.
  return null;
};

// Uncomment this line below to test your function.
// console.log('#1 greeting:', greet('John'));


/* #2 Create a function that takes in an object (e.g. person) and outputs
   a string using that object's properties.
   E.g. input:
          person = {
            firstName: 'John',
            lastName: 'Doe',
            age: 25

        output: 'Hello, my name is John Doe and I am 25 years old.'
 */
const introduce = (person) => {
  // TODO: Type your code here.
  return null;
};

const personA = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// console.log('#2 introduce:', introduce(personA));


/* #3 Create a function that takes in an array of temperatures in fahrenheit
   and return a new array with the temperatures in celsius.
   Here is the conversion formula: T(°C) = (T(°F) - 32) × 5/9
   E.g.
        input: [42, 53, 22, 60];
        output: [5.56, 11.67, -5.55, 15.66]

 */
const convertToCelsius = (tempArr) => {
  // TODO: Type your code here.
  return [];
};

const temperaturesInF = [42, 53, 22, 60];
const temperaturesInC = convertToCelsius(temperaturesInF);

// console.log({temperaturesInC});



/* #4 Given an array of person object with their name and  ages, return how old the
   persons would be after n (positive number) years have passed.
   E.g.
   input:
      people: [
          { name: "Joel" : age: 32},
          { name: "Fred" : age: 44},
          { name: "Reginald" : age: 65},
          { name: "Susan" : age: 33},
          { name: "Julian" : age: 13},
        ],
        n: 1
   output:
        [{ name: "Joel" : age: 33},
          { name: "Fred" : age: 45},
          { name: "Reginald" : age: 66},
          { name: "Susan" : age: 34},
          { name: "Julian" : age: 14}]
*/
// Solution:
const afterNYears = (peopleArr, n) => {
  // TODO: Type your code here.
  return [];
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














