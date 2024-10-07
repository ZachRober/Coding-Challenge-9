class Book {
    constructor(title,author,ISBN,isAvailable=true){
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
        this.isAvailable=isAvailable;
    }
    getDetails(){
        return `The title of the book is ${this.book} written by ${this.author}, ISBN:${this.ISBN}`;
    }
    get isAvailable(){
        return this.isAvailable
    }
    set isAvailable(update){
    if(update===true||update===false){
    this.isAvailable=update;
    }
    else{
    console.log("not valid input");
    }
    }   
}
class Section{
    constructor(name,section){
        this.name=name;
        this.section=section;
        this.books = [];
    }
    addBook(){
        
    }
}