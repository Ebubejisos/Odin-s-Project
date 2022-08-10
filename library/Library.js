//* MODEL
let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author  = author;
    this.pages = pages;
    return(this.title, this.author, this.pages)
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
render(); // renders books to html

//* CONTROLLER

// Button click functions
// appending new book into html library
document.getElementById('add').onclick = ()=> {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPages").value;
    Number(pages);
    if(pages < 0){
        pages = 0 //restricts value of pages to numbers >= 0
    }
    const book= new Book(title,author,pages);
    book.add();
    render();
}
// deleting book
function deleteBook(event){
    const btn = event.target;// this selects the element this function is run with i.e the button that is clicked
    myLibrary = myLibrary.filter((element)=>{
        if(element.title === btn.id){
            return false;
        }
        else{
            return true
        }
    })
    render()
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

//* VIEW

// We will create a function that loops through the arrays and displays in the html
function render(){
    document.getElementById('listEntry').innerHTML = '' //this clears the DOM before inserting to avoid multiple display whenever the function is called
    myLibrary.forEach((element) => {
    const card = document.createElement("li");
    card.classList.add("list-group-item");
    card.innerHTML = element.info() + "<br>";
    // button
    const btn = document.createElement("button")
    btn.innerText = "remove";
    btn.id = element.title;// assigns <button id="element.title">
    btn.onclick = deleteBook;
    // appending everything
    card.appendChild(btn);
    document.getElementById("listEntry").appendChild(card);
    return {btn}
})
}