import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactiveuser',
  templateUrl: './inactiveuser.component.html',
  styleUrls: ['./inactiveuser.component.css']
})
export class InactiveuserComponent implements OnInit {
  users: string[];
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
   this.userservice.sub2.subscribe(res => {
     this.users = res
   })
  }

  onSetToActive(i){
this.userservice.setToActive(i);
  }
}
