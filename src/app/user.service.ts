import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user'
import { Repo } from './repo'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // my user profile
  private username:string;
  user:User;
  repo:Repo;
  reposArray:any;

  BaseUrl = environment.BaseUrl;
  FinalUrl = environment.FinalUrl;

  constructor(private http:HttpClient) { 
    this.username = "tc-mwangi";
    this.user = new User ('', '', '', '', '', '', 0, 0, 0, '');
    this.repo = new Repo('','','');
    this.reposArray = [];
  }

  userRequest(){

    interface ApiResponse{
      name: string;
      login: string;
      location: string;
      avatar_url: string;
      bio: string;
      email: string;
      followers: number;
      following: number;
      public_repos: number;
      html_url: string;

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(this.BaseUrl + this.username + this.FinalUrl).toPromise().then(response=>{
            
          this.user.name = response.name;
          this.user.login = response.login; 
          this.user.location = response.location;
          this.user.avatar_url = response.avatar_url;
          this.user.bio = response.bio;    
          this.user.email = response.email;
          this.user.followers = response.followers;
          this.user.following = response.following;
          this.user.public_repos = response.public_repos;
          this.user.html_url = response.html_url;
          resolve()
          console.log("Woooohooooo");
          console.log(this.user);

            resolve()
        },
        error=>{
                this.user.login="tc-mwangi"
                this.user.avatar_url="https://avatars3.githubusercontent.com/u/45211962?v=4"
                reject(error)
            }
        )
    })

    return promise
  }

  
}
