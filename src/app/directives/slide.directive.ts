import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[slide]'
})
export class SlideDirective {

    constructor (private element: ElementRef) {}

    @HostListener('mouseenter')
    onMouseEnter() {
        this.element.nativeElement.lastChild.classList.add('show');
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.element.nativeElement.lastChild.classList.remove('show');
    }
  /**
   * $('.dropdown').hover(
        function(){
            $(".dropdown-menu", this).stop(true, true).slideDown().addClass("show")
        },
        function(){
            $(".dropdown-menu", this).stop(true, true).slideUp("fast").removeClass("show")
        }
    );
   */

}
