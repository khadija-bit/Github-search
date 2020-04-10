import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

 user: User;
 UserName:string;
 repository: Repository;

  constructor(private http:HttpClient) {
    // this.user = new User ('', '', '');
    // this.repository = new Repository('','','');
    this.UserName = 'Khadija-bit';
   }
   getUser(){
    interface ApiResponse{
      user:string;
      repository:string;
    }

    
    
    interface ApiResponse{
      login: string;
      uri: string;
      name: string;
      repo: number;
      followers: number;
      following: number;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users'+'?access_token='+environment.apiKey).toPromise().then(response=>{
        // this.user.login = response.login;
        // this.user.url = response.uri;
        this.user.name = response.name;
        // this.user.followers = response.followers;
        // this.user.following = response.following;
        // this.user.repo = response.repo;

        resolve()
      },
      error=>{
       
        reject(error);
      })
    })
    return promise
  }
}

