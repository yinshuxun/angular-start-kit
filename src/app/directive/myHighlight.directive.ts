import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({ selector: '[myHighlight]' })


export class MyHighlightDirective {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
