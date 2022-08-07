
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
