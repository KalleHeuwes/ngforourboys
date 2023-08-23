import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRowComponent } from './filter-row.component';

describe('FilterRowComponent', () => {
  let component: FilterRowComponent;
  let fixture: ComponentFixture<FilterRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterRowComponent]
    });
    fixture = TestBed.createComponent(FilterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
