import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class Book {
  id : number;
  title:string;
  year:number;
  author:string;
  constructor(id:number,title:string,year:number,author:string){

    this.id=id;
    this.title=title;
    this.year=year;
    this.author=author;
  }
}
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


 
export class CrudComponent implements OnInit {

  url:string ="../assets/bookslist.json";
  books :Array<Book>=[];

  id1 : number;

  isUpdate :boolean = false;
  book : Book;


  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

this.httpClient.get<Book[]>(this.url).subscribe(
(response)=>{
console.log(response);
this.books = response;

},
(error)=>{
  console.log("Not responded")
}
)

  }

  add(value : any){

    this.books.push(new Book(value.id,value.title,value.year,value.author))
  }

  delete(id : any){

    this.books.splice(id,1)
  }
  update(id:number){

this.id1 = id;
this.isUpdate=true;
this.book = this.books[id]
  }


  updateData(value:any){
    value.id = this.books[this.id1].id
    this.books.splice(this.id1,1,value)
  }


}
