import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input() set appUnless(show: boolean) {
      if (!show) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else if (show) {
        this.viewContainer.clear();
    }
  }
}
