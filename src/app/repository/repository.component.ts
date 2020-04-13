import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GithubService } from '../github-service/github.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  searchUser = true;
  repositorys:Repository;

 
  constructor(public repoService: GithubService) { }

  searchRepo(searchName){
    this.repoService.getRepos('searchName').then( results =>{
        this.repositorys = this.repoService.repository
        console.log(this.repositorys);

      },
      (error)=>{
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.searchRepo('khadija-bit');
  }
}
