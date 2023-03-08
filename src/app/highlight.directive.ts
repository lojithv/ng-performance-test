import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('dragover') onMouseEnter(event:MouseEvent) {
    // event.preventDefault();
    this.highlight('1px solid red');
  }
  
  @HostListener('dragleave') onMouseLeave() {
    this.highlight('1px solid black');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.border = color;
  }
}
