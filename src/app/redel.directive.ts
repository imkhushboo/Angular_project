import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appRedel]'
})
export class RedelDirective {

  constructor(el : ElementRef) {
    console.log(el.nativeElement);
    el.nativeElement.value = "red";
   }

}
