import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user'
import { Repo } from './repo'

@Injectable({
  providedIn: 'root'
})
export class RepoService {

    username = 'tc-mwangi';
    reposArray;
    user = new User ('', '', '', '', '', '', 0, 0, 0, '');
    private client_id = '04fd0bb96c393d7b7105';
    private client_secret = 'B27f9a03fb39dc52557e8827d7b59c65c2a2c9bd';
    repos = new Repo('','','');
    
  constructor(private http:HttpClient) { }

  newUserName(username: string){
    this.username = username;
  }

  showRepos() {

    interface ApiResponse {
      name: any;   
      description: any;
      html_url: any
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/"+ this.username + "/repos" + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).toPromise().then(response => {
        this.reposArray = response;
        console.log(this.repos.name);
        
        resolve()
      }, error => {

        reject(error)
      }
      )
    })

    return promise
  }
}



