import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebuttonsComponent } from './homebuttons.component';

describe('HomebuttonsComponent', () => {
  let component: HomebuttonsComponent;
  let fixture: ComponentFixture<HomebuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
