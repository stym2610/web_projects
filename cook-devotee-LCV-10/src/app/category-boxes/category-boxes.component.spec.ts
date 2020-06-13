import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBoxesComponent } from './category-boxes.component';

describe('CategoryBoxesComponent', () => {
  let component: CategoryBoxesComponent;
  let fixture: ComponentFixture<CategoryBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
