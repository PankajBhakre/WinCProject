import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor() { }


  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
  }

  
  getActiveUsers(){
    return this.activeUsers;
  }

  getInactiveUsers(){
    return this.inactiveUsers;
  }
}
