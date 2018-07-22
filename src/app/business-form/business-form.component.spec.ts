import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFormComponent } from './business-form.component';

describe('BusinessCreateComponent', () => {
  let component: BusinessFormComponent;
  let fixture: ComponentFixture<BusinessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});