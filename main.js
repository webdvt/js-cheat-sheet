// --- Primitive data types ---
// string, number, boolean, null, undefined
const name = 'John'; // string
const age = 27; // number
const isMarried = false; // boolean
const height = 5.6; // number
const x = null; 
const y = undefined;
let z;

// How to check the type of a variable?
console.log('Type of z:', typeof z); // undefined
console.log('Type of name:', typeof name);
console.log('Type of age:', typeof age);
console.log('Type of isMarried:', typeof isMarried);
console.log('Type of height:', typeof height);
console.log('Type of y:', typeof y);

// There are 3 ways to declare variables --> const, let and var.

// What is the difference between let and const?
//    Use const when you know you will not reassign a variable,
//    otherwise, use let.
// DON't use var!
const student1 = 'John';
student1 = 'Jane'; // TypeError: Assignment to constant variable.

let student2 = 'Sam';
student2 = 'Jack'; // :)

// --- String ---

// String concatenation
console.log("My name is " + name + " and I am " + age + " years old.");
// String Interpolation: lets you to inject variables & logic directly into a string
console.log(`My name is ${name} and I am ${age} years old.`);

// String operations and properties
const str = "Hello World";
console.log(`The length of str is: ${str.length}`);
console.log('Str substring: ', str.substring(0, 5)); // From index 0 to index 4 (2nd parameter exclusive)
let nums = "1,2,3,4,5";
console.log(nums.split(',')); // Splits string by delimiter

// --- Arrays ---
const integers = new Array(1, 2, 3, 4);
console.log({integers});
const fruits = ['apples', 'oranges', 'bananas', 'mangoes'];
console.table({fruits});
console.log(`The length of fruits is ${fruits.length}`);
const mixArr = ['1', 2, true]; // Array with different data types
console.log({mixArr});
// Accessing elements in array
console.log(fruits[1]); // index starts at 0
// Add element to array if you know array size
fruits[4] = 'grapes';
console.log({fruits});
// Add element to end of array if size is unknown
fruits.push('pears');
console.log({fruits});
// fruits = []; is illegal since it is being assigned to a different array
// Add element to beginning of array
fruits.unshift('strawberries');
console.log({fruits});
// Remove last element in array
fruits.pop();
console.log({fruits});
// Remove from beginning of array
fruits.shift();
console.log({fruits});
// Remove element at specific index
fruits.splice(0,0);
console.log({fruits});
// Remove range of elements
fruits.splice(1, 3);
console.log(fruits);

// --- Object Literals ---

// What is Object literal in JS?
//      Object literal is a comma-separated list of name-value pairs
//      wrapped in curly braces.
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 70,
    hobbies: ['hiking', 'drinking', 'science', 'inventing'],
    address: {
        street: '123 main st',
        city: 'Blacksburg',
        state: 'Virginia'
    }
};
console.log({person});
// Access single value
console.log(person.firstName);
console.log(person.hobbies[2]);
console.log(person.address.street);
// Destructuring - create variables
const {firstName, lastName, address: {state}} = person;
console.log(firstName, lastName, state);
// Add property to object
person.email = 'johndoe@gmail.com';
console.log(person);

// --- Better way to console.log ---

const foo  = 23;
const bar = 24;
// Bad way:
console.log(foo, bar);
// Better way:
console.log({foo, bar});
// Alternative way:
console.table([foo, bar]);


//  --- For loops ---
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'finish hw',
        isComplete: false
    },
    {
        id: 3,
        text: 'meet with adviser',
        isComplete: false
    }
];

// Array traversal
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.id);
}

// forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

// Array map
// Creates a new array A2 by calling a function on each element in the input array A1.
const users = [
    { firstName: 'John', lastName: 'Doe'},
    { firstName: 'Sarah', lastName: 'Smith'},
    { firstName: 'Sam', lastName: 'Williams'},
];

// Old school imperative approach: use statements to mutate (aka change) state
const firstNames = [];

for(const user of users) {
    firstNames.push(user.firstName);
}

console.table([firstName]);

// Declarative approach: use function to describe state
const firstNames2 = users.map((user) => user.firstName);
console.table([firstNames2]);


// How to merge arrays or object literal?
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27
};

const job = {jobTitle: 'developer', company: 'companyX'};

const person1Merged = {...person1, ...job};
console.log({person1Merged});

const tasks = ['do homework', 'grocery shopping', 'do laundry'];
const tasks1 = ['take out the trash', ...tasks];
const tasks2 = [...tasks, 'take out the trash'];
console.log({tasks, tasks1, tasks2});

// --- Double equal sign '==' vs triple equal sign '===' ---

// '==' --> converts the type before running the comparison
const x = '23' == 23;
const y = '23' === 23;
console.log({x, y});


// --- Functions ---

// 'function' syntax
function isEven(num) {
    return num % 2 === 0;
}

// modern ES6 arrow syntax
const isEven2 = (num) => {
    return num % 2 === 0;
};

console.log('isEven():', isEven(4));
console.log('isEven2():', isEven2(4));




