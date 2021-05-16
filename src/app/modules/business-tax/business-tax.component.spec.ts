import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTaxComponent } from './business-tax.component';

describe('BusinessTaxComponent', () => {
  let component: BusinessTaxComponent;
  let fixture: ComponentFixture<BusinessTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessTaxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
