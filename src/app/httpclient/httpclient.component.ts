import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
 

  username : string;
  httpResponse : any;
  isFetched : boolean = false;
  constructor( private httpClient: HttpClient) { }

  ngOnInit() {

this.httpClient.get("http://api.github.com/users/"+this.username).subscribe(
(response)=>{
console.log(response)

},
(error) => {
console.log("not responded")
}
);

  }
  submit(){

    this.httpClient.get("http://api.github.com/users/"+this.username).subscribe(
(response)=>{
 console.log(response);
this.httpResponse = response;
this.isFetched = true;

},
(error) => {
console.log("not responded")
}
);
  }

}
