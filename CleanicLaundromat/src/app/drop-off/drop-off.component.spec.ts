import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropOffComponent } from './drop-off.component';

describe('DropOffComponent', () => {
  let component: DropOffComponent;
  let fixture: ComponentFixture<DropOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
