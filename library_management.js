class Book {
    constructor(title,author,ISBN,isAvailable=true){
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
        this._isAvailable=isAvailable;
    }
    getDetails(){
        return `The title of the book is ${this.book} written by ${this.author}, ISBN:${this.ISBN}`;
    }
    get isAvailable(){
        return this._isAvailable//returns private value
    }
    set isAvailable(update){
    if(update===true||update===false){
    this._isAvailable=update;//returns whether book is available or not
    }
    else{
    console.log("not valid input");//checks whether it exists
    }
    }   
}
class Section{
    constructor(sectionName){
        this.sectionName=sectionName;
        this.books = [];
    }
    addBook(book){
    this.books.push(book);//pushes new book to our books array
    }
    calculateTotalBooksAvailable(){
    let newarr = this.books.filter(x=>x.isAvailable===true);//calculates total books that are available
    let length = newarr.length;
    return length;
    }//I did not include a get available books because it does the same thing as the method above
    listBooks(){
    this.books.forEach(x=>{console.log(`${x.title} written by ${x.author}, ISBN ${x.ISBN}, Availability:${x.isAvailable}`)});//list books in the section
    }
   
}
class Patron{
    constructor(name){
        this.name=name;
        this.borrowBooks=[];
    }
borrowBook(book){
if (book.isAvailable===true){
    console.log(`You have borrowed ${book.title}`);
    this.borrowBooks.push(book);
    book.isAvailable=false;//checks if book is available then makes it unavailable 
    
}
else{console.log(`${book.title} is not available`)};
}
returnBook(book){
let index = this.borrowBooks.findIndex(x=>book.title===x.title);
delete this.borrowBooks[index];
console.log(`${book.title} is now available`)
book.isAvailable=true;//allows the book to be returned
}
}
class VIPPatron extends Patron{
    constructor(name,priority){//extends the parent and gives priority
        super(name);
        this.priority=priority;
    }
    borrowBook(book){//overides the original method giving priority
    super.borrowBook(book);    
    }
}
// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");
// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");
// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);
// Create patrons
const Jeff = new Patron("Jeff Goldstein");
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);
// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);
// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);
// Return the book
regularPatron.returnBook(book1);
// List books and availability
fiction.listBooks();
// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Science: ${science.calculateTotalBooksAvailable()}`);
