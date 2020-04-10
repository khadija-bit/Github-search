import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { User } from '../user';
import { Repository } from '../repository';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // users:User[] = [
  //   new User('','b', '', 0, 0, 0),
  // ];

  // repository:Repository[] = [
  //   new Repository('b','','',),
  // ];

  


  constructor() {
    
   }
   search(){

   }

  ngOnInit() {
    
  }

}
