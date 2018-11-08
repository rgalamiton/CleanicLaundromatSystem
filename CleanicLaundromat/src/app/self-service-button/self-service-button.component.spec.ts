import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServiceButtonComponent } from './self-service-button.component';

describe('SelfServiceButtonComponent', () => {
  let component: SelfServiceButtonComponent;
  let fixture: ComponentFixture<SelfServiceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfServiceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfServiceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
