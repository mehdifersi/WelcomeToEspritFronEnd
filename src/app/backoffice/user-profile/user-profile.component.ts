import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../core/Model/User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  user : User = new User();
  id = 3;
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {

    this.userService.getUser(this.id).subscribe({
      next:(data)=> this.user = data,
    })


  }

}
