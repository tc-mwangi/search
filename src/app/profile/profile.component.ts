import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { RepoService } from '../repo.service';
import { User } from '../user'
import { Repo } from '../repo'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    UserService,
    RepoService
  ]
})
export class ProfileComponent implements OnInit {
  username: any;
  user: User;
  repos:Repo;
  reposArray:any[];


  constructor(private userService: UserService, private repoService: RepoService) { 
    this.repoService.showRepos();
  }

  ngOnInit() {
    this.userService.newUserName(this.username)
    

    this.repoService.newUserName(this.username)
    

    this.userService.userRequest();
    this.user = this.userService.user
    
  }

}
