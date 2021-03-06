import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
users: string[];
  constructor(public userservice: UserService) { }

  ngOnInit(): void {
    this.users = this.userservice.getInactiveUsers();
  }


  onSetToActive(i: number){
    this.userservice.setToActive(i);
  }
}
