import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdValoremTaxComponent } from './ad-valorem-tax.component';

describe('AdValoremTaxComponent', () => {
  let component: AdValoremTaxComponent;
  let fixture: ComponentFixture<AdValoremTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdValoremTaxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdValoremTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
