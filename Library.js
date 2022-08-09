let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author  = author;
    this.pages = pages;
    this.isRead = (isRead) => isRead == true ? "Book completed" : "Not yet read" 
}

// we will create extra functions accessible to each new Book

// Note: prototypes gives new objects reuseable properties or method instead of writing it into the constructor itself that results in duplication of codes. Hence, prototypes save space and makes a program run faster 
Book.prototype.info = function(){
    return`${this.title} by ${this.author}, ${this.pages} pages`
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


myLibrary.forEach((element) => {
    let card = document.createElement("li");
    card.classList.add("list-group-item");
    card.innerHTML = element.info();
    document.getElementById("listEntry").appendChild(card);
})
// myLibrary.forEach((element) => console.log(element.info()))


// BUTTON CLICK FUNCTION
document.getElementById('add').onclick = ()=> { 
        const newDiv = document.createElement("li");
        newDiv.classList.add("list-group-item");
        newDiv.innerHTML = document.getElementById("addBook").value;
        document.getElementById("listEntry").appendChild(newDiv);  
}
// background changing onclick
document.getElementById('btn1').onclick = () => {
    var body = document.getElementById('html');
    body.style = 'background: #333a398e'
}
document.getElementById('btn2').onclick = () => {
    var body = document.getElementById('html');
    body.style = 'background: white'
}