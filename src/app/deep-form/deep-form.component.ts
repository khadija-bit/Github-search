import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-deep-form',
  templateUrl: './deep-form.component.html',
  styleUrls: ['./deep-form.component.css']
})
export class DeepFormComponent implements OnInit {
searchName: string;

  @Output()searchIn = new EventEmitter<any>()
  
  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchIn.emit(this.searchName);
    this.searchName = "";
  }
}
