import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomponentComponent } from './childcomponent.component';

describe('ChildcomponentComponent', () => {
  let component: ChildcomponentComponent;
  let fixture: ComponentFixture<ChildcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcomponentComponent]
    });
    fixture = TestBed.createComponent(ChildcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
