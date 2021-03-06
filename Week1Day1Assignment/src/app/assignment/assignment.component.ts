import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  txtName : string;
  show: boolean = false
  isVisible: boolean = false;
  counter: number = 1
  All: number[] = [];
  oddNumbers: number[] = [1, 3, 5];

  
  
  constructor() { }

  ngOnInit(): void {
  }


  onReset(){
    this.txtName="";
  }
  onButtonClick(){
    this.All.push(this.counter);
    this.isVisible =! this.isVisible
   return this.counter = this.counter +1; 
  }

  OddNumberClick(){
  this.oddNumbers = this.oddNumbers;
  this.show  = true;
  }
}
