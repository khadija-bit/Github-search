import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  founderUser: User;
  repo: Repository;
  access_token: string = environment.access_token;
  searchName: string;

  constructor(private http:HttpClient) {
    this.founderUser = new User('','','','','', 0, 0, 0,new Date());
    this.repo = new Repository('','','',0,0,new Date());
   }
 
  getRepos(searchName: string) {
    
    interface ApiResponse{
      name: string;
      html_url: string;
      description: string;
      watchers: number;
      forks: any;
      created_at: Date;
      
    }
    return new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ searchName + '/repos?access_token=' + environment.access_token).toPromise().then(
        results =>{
          this.repo = results;
          console.log(this.repo)
          resolve();

        },
        (error) =>{
          console.log(error)
          reject();
        }
      );
    });
    
  }


   getUser(searchName: string){

    interface ApiResponse{
      avatar_url: string;
      login: string;
      name: string;
      email: string;
      html_url: string;
      public_repos: number;                       
      followers: number;
      following: number;
      searchName: string;
      created_at: Date;
    }

    
    
    

    return new Promise((resolve,reject)=> {
      this.http.get<ApiResponse>( 'https://api.github.com/users/'+ searchName + '?access_token=' + environment.access_token).toPromise().then(
        (result) => {
       this.founderUser = result;
       console.log(this.founderUser);

        resolve()
      },
      error => {
       console.log(error);

        reject()
      });
    });
    
  }

}
