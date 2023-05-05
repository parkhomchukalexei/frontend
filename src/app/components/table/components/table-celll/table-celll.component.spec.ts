import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCelllComponent } from './table-celll.component';

describe('TableCelllComponent', () => {
  let component: TableCelllComponent;
  let fixture: ComponentFixture<TableCelllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCelllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCelllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
