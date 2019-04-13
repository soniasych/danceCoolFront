import { UserService } from '../common/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../common/Models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    return this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
