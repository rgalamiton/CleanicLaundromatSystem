import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSelfServiceComponent } from './get-self-service.component';

describe('GetSelfServiceComponent', () => {
  let component: GetSelfServiceComponent;
  let fixture: ComponentFixture<GetSelfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSelfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSelfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
