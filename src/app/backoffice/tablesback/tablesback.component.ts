import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../core/Model/User";

@Component({
  selector: 'app-tablesback',
  templateUrl: './tablesback.component.html',
  styleUrls: ['./tablesback.component.css']
})
export class TablesbackComponent implements OnInit{
  constructor(private userService:UserService) { }
  listUsers!:User[]
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      {
        next: (data)=> this.listUsers=data,
      }
    )
  }

}
