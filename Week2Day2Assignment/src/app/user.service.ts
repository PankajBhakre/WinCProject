import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers =  ['Chris', 'Manu'];
  
  sub1=new BehaviorSubject(this.activeUsers)
  sub2=new BehaviorSubject(this.inactiveUsers)
  
  constructor() { }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
  }

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
  }

  getActiveUsers() {
   return this.sub1.next(this.activeUsers)
  }

  getInactiveUsers() {
    return this.sub2.next(this.inactiveUsers)
      }
}
