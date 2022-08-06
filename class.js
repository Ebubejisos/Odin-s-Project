
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


let myLibrary = [
    // {
    //     title: "Thor",
    //     author: "Marvel"
    // },
    // {
    //     title: "Loki",
    //     author: "Marvel"
    // }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author  = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(){
    // we will create a prototype next that allows new Books created to access the addBookToLibrary function using Object.create
}

addBookToLibrary.prototype.add = function(){
    myLibrary.push(new Book(this.title, this.author, this.pages, this.read));
}
// we will now join the book object to the addBookToLibrary prototype

Book.prototype = Object.create(addBookToLibrary.prototype);
// we are creating an extra function for new Books just incase we want to see an easy description of the book

Book.prototype.info = function(){
    return`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}


// TIME TO CREATE SOME BOOKS AND ADD TO OR LIBRARY
const book1 = new Book("Thor", "Marvel comics", 20, "completed");
const book2 = new Book("Loki", "Kahn the conqueror", 120, "not yet read");

// next line adds the new books into the library array
book1.add();
book2.add();

// console.log(myLibrary[0].info())
// console.log(myLibrary)

// VIEW
// We will create a function that loops through the arrays and displays in the html

myLibrary.forEach((element) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = element.info();
    document.getElementById("body").appendChild(newDiv);
})

// myLibrary.forEach((element) => console.log(element.info()))