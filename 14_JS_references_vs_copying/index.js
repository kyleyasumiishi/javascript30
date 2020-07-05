// start with string, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100

let name = "Wes";
let name2 = name;
console.log(name, name2); // Wes Wes
name = "Wesley";
console.log(name, name2); // Wesley Wes

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

console.log(players, team);
// You might think we can just do something like this:
team[3] = "Lux"; // modifies the array referenced by both players and teams

console.log(players, team);
console.log(players === team); 
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// why? It's because that is an array reference, not an array copy. They both point to the same array!

// so, how do we fix thsi? We take a copy instead?
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

console.log(team2 === players);
// one way

// or create a new array and concat the old one in

// or use the new ES6 spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Wes Bos", 
    age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;
// console.log(person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2, person);

// The Rest/Sperad properties for ES2018 added spread propertiess (Shallow cloning excluding prototype) to object literals.
const cap3 = {...person};
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: "@wesbos",
        facebook: "wesbos.developer"
    }
}

const wescopy = wes;

const dev = Object.assign({}, wes, { name: "Wesley" }); // only one level deep
console.log(wescopy === wes);
console.log(dev === wes);

const dev2 = JSON.parse(JSON.stringify(wes)); // poor man's deep clone