import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css']
})
export class ActiveuserComponent implements OnInit {
  users : string[];
  constructor(private userservice: UserService) {}

  ngOnInit(){
    return this.userservice.sub1.subscribe(res => {
      this.users = res
    })
    
  }


  onSetToInactive(i){
    this.userservice.setToInactive(i);
  }
}
