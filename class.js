
/*
// PROTOTYPE INHERITANCE
function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
    this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
console.log(carl.grade) // 8
*/

/*
class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author  = author;
        this.pages = pages;
        this.read = read;
        // this.info = function(){
        //     console.log(`${title} by ${author}, ${pages} pages, ${read}`)
        // }
        this.info = function(){
            return `${title} by ${author}, ${pages} pages, ${read}`
        }
    }
}
const book1 = new Book("Thor: Love and Thunder","Marvel comics", 123, "not read yet");
// book1.info();
console.log(book1.info());
*/

// FACTORY CONSTRUCTORS
/*
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
  // return {name: name, age: age, sayHello: sayHello};
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'
*/

// a little game

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName};
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
console.log(jimmie.name) //this returns undefined because 'name' was not returned


// INHERITANCE WITH FACTORY FUNCTIONS
/*
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};//only what was returned will have access to any other variable within this function
}

const Nerd = (person) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName} = Person(person);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
}

const jeff = Nerd('jeff');

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
*/

// SIMPLE CALCULATOR
/*
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})() ;//you can delete the last sets of parenthesis and uncomment the lines below and everything works as expected

// const calc = calculator();
// calc.add(3,5); // 8
// calc.sub(6,2); // 4
// console.log(calc.mul(14,5534)); // 77476

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
console.log(calculator.mul(14,5534)); // 77476
*/