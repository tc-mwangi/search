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
  username = "tc-mwangi"
  repoArray;
  



  constructor(private userService: UserService, private repoService: RepoService) { 
    this.repoService.showRepos();
  }

  ngOnInit() {
    this.userService.newUserName(this.username)
    console.log(this.username)

    this.userService.newUserName(this.username)
    console.log(this.username)

    this.userService.newUserName(this.username)
    console.log(this.username)
  }

}
