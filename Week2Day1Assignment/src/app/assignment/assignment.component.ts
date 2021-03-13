import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  isVisible: boolean = false;
  counter: number = 1
  All: number[] = [];
  oddNumbers: number[] = [1, 3, 5];
  show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.All.push(this.counter);
    this.isVisible =! this.isVisible
   return this.counter = this.counter +1; 

  }

  OddNumberClick(){
    this.oddNumbers = this.oddNumbers;
    this.show  = !this.show;
    }

}
