import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() boxcolor : string = ""
  @Input() placeholder:string = ""
  @Output() inputEvent = new EventEmitter()

  @Input() users : number = 0

  onCreate(value:string){
    if(value.length > 0)
      {
        this.inputEvent.emit(value);
      }
  }

}
