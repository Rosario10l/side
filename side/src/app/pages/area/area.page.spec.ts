import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaPage } from './area.page';

describe('AreaPage', () => {
  let component: AreaPage;
  let fixture: ComponentFixture<AreaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
