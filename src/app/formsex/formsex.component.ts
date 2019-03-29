import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsex',
  templateUrl: './formsex.component.html',
  styleUrls: ['./formsex.component.css']
})
export class FormsexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(value:any){
    alert(value.name);
  }
}
