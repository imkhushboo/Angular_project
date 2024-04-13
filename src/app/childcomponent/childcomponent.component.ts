import { AfterViewInit, AfterContentInit, Component, ElementRef, Renderer2, ViewChild, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements AfterViewInit, AfterContentInit {

  @ViewChild('box') box!: ElementRef;
  @ContentChildren('childcomp') childPara!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
  }

  ngAfterContentInit(): void {
    console.log(this.childPara);
    this.childPara.forEach(para => {
      console.log(para);
      this.renderer.setStyle(para.nativeElement, 'color', 'white');
    });
  }
}
