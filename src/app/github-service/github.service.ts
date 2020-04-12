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
  repository: Repository;
  searchName: string;

  constructor(private http:HttpClient) {
    this.founderUser = new User('','', 0, 0, 0);
    this.repository = new Repository('','','');
   }
 
  getRepos(searchName: string) {
    
    interface ApiResponse{
      name: string;
      html_url: string;
      description: string;
      
    }
    return new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (results) =>{
          this.repository = results;
          resolve();

        },
        (error) =>{
          console.log(error);
          reject();
        }
          );
    });
  }


   getUser(searchName: string){

    interface ApiResponse{
      login: string;
      name: string;
      html_url: string;
      public_repos: number;                       
      followers: number;
      following: number;
      searchName: string;
    }

    
    
    

    return new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users'+searchName+'?access_token='+environment.apiKey).toPromise().then(
      (result) =>{
       this.founderUser = result;
       console.log(this.founderUser);

        resolve()
      },
      error=>{
       console.log(error)
        reject(error);
      })
    })
    // return Promise
  }
}


