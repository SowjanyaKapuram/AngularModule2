import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Book {
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

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient : HttpClient) { }

  url:string ="../assets/bookslist.json";
  books :Array<Book>=[];


  ngOnInit() {

     let obs = this.httpClient.get<Book[]>(this.url).subscribe(Response);
 
 
    
      }
    
}



    