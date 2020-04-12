import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { User } from '../user';;
import { Repository } from '../repository';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchUser = true
  users:User;
  repositorys:Repository;
  searchName: string;  
  


  constructor(private githubService:GithubService, private repoService: GithubService) {

   }
   
   search(searchName:string){
    this.githubService.getUser(searchName).then(
      (_success) => {
        this.users = this.githubService.founderUser;
      },
      (error) => {
        console.log(error)
      }
    );
    this.repoService.getRepos(searchName ).then(
      (_results) => {
        this.repositorys = this.repoService.repository
        console.log(this.repositorys)
        
      },
      (error) => {
        console.log(error)
      }
    );
    }
  
   

  ngOnInit() {
    this.search('khadija-bit');
  }

}
