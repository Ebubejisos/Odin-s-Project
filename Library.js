let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author  = author;
    this.pages = pages;
}

// we will create extra functions accessible to each new Book

// Note: prototypes gives new objects reuseable properties or method instead of writing it into the constructor itself that results in duplication of codes. Hence, prototypes save space and makes a program run faster 
Book.prototype.info = function(){
    return`${this.title} by ${this.author}, ${this.pages} pages.`
}
Book.prototype.add = function(){
    myLibrary.push(new Book(this.title, this.author, this.pages, this.read));
}


// TIME TO CREATE SOME BOOKS AND ADD TO OUR LIBRARY
new Book("Thor", "Marvel comics", 20).add();
new Book("Loki", "Kahn the conqueror", 120).add();


// console.log(myLibrary[0].info())
// console.log(myLibrary)

// VIEW
// We will create a function that loops through the arrays and displays in the html

// manual adding of books from javascript class constructor
myLibrary.forEach((element) => {
    let card = document.createElement("li");
    card.classList.add("list-group-item");
    card.innerHTML = element.info();
    document.getElementById("listEntry").appendChild(card);
})
// myLibrary.forEach((element) => console.log(element.info()))


// BUTTON CLICK FUNCTION
// appending new book into html library
document.getElementById('add').onclick = ()=> {
        const title = document.getElementById("bookTitle").value;
        const author = document.getElementById("bookAuthor").value;
        const pages = document.getElementById("bookPages").value;
        const newDiv = document.createElement("li");
        newDiv.classList.add("list-group-item");
        newDiv.innerHTML = `${title} by ${author}, ${pages} pages.`
        document.getElementById("listEntry").appendChild(newDiv);
}

// open form
function openForm(){
    let form = document.getElementById("form");
    form.style.display = "block";
}
// close form
function closeForm(){
    let form = document.getElementById("form");
    form.style.display = "none";
}