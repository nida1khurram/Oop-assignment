//1 Problem: Define a class named `Book`. Create an instance of this class.
//2 Problem: Add properties `title` and `author` to the `Book` class. and 
// create an instance of it with title and author properties
//3 Problem: Add a constructor to the `Book` class to initialize
//  `title` and `author` when a new instance is created.
//4 Problem: Create another instance of the `Book` class with a different title and author
//5 Problem: Add a method to the `Book` class that prints the title and author of the book
// 6 Problem: Call the method you added in the previous step on both instances of the `Book`
//  class to display their titles and authors.
// 7 Problem: Create a subclass `EBook` that inherits from the `Book` class and has an 
// additional property `fileSize`
// 8 Problem: Override the method in the `Book` class within the `EBook` subclass to include
//  the `fileSize` in the output.Basically rewrite the displayDetails() method to display filesize.
//9 Problem: Add a class variable to `Book` class to keep track of the created instances and 
// create a method to display them.
class Book{ //1
title: string   //2
author: string  //2

constructor(t:string, a:string){    //3 //4
    this.title = t;
    this.author = a;
}
getPrintBook(){ //5
    console.log(`${this.title} is written by  ${this.author}  `)   
}
}
class Ebook extends Book{   //7
    fileSize:number

    constructor(t:string, a:string, f:number){
        super(t, a)
        this.fileSize = f;
    }
    getEbookPrint(){    //8
        console.log(`${this.title} is written by  ${this.author} and its file size is ${this.fileSize} Mb`)
    }
}

let book = new Book ("Typescript","Sir Zia Khan")   //1     //2
let ebook = new Ebook("Oop", "Ameen Alam", 200)
console.log(book);
console.log(ebook)

book.getPrintBook();    //6
ebook.getEbookPrint();
