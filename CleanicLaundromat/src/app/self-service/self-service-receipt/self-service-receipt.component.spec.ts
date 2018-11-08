import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServiceReceiptComponent } from './self-service-receipt.component';

describe('SelfServiceReceiptComponent', () => {
  let component: SelfServiceReceiptComponent;
  let fixture: ComponentFixture<SelfServiceReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfServiceReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfServiceReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
