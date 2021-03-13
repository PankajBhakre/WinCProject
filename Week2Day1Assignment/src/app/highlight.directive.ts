import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
@Input() count: number;

  constructor(private el: ElementRef, private rederer: Renderer2) {
   }

   ngOnInit () {
     if(this.count>=5){
      this.rederer.setStyle(this.el.nativeElement, 'background-color', 'blue') ;
      this.rederer.setStyle(this.el.nativeElement, 'color', 'white') ;
     }
   }

   
   }



