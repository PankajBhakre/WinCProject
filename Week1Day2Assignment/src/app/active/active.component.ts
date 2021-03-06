import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
users: string[];
  constructor(public userservice: UserService) { }

  ngOnInit(): void {
    this.users = this.userservice.getActiveUsers();
  }

  onSetToInactive(i){
    this.userservice.setToInactive(i);
  }
}
