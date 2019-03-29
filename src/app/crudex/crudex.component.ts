import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../service.service';
import { Services } from '@angular/core/src/view';

 
 
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


 
export class CrudComponent implements OnInit {

 
  id1 : number;

  isUpdate :boolean = false;
  book : Book;
  books :Array<Book>


  constructor( private service: Services ) { }

  ngOnInit() {

 

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
