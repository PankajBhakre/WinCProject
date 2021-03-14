import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week2Day2Assignment';
  data:any;
  constructor(private userservice:UserService){
this.userservice.sub2.subscribe(res1=>{
  console.log(res1);
  this.data=res1;
})

    this.userservice.sub1.subscribe(res=>{
    console.log(res);
    })
  }
}
