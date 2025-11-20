import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GolpesPage } from './golpes.page';

describe('GolpesPage', () => {
  let component: GolpesPage;
  let fixture: ComponentFixture<GolpesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GolpesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
