import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addProductsComponent } from './addproducts.component';

describe('addProductsComponent', () => {
  let component: addProductsComponent;
  let fixture: ComponentFixture<addProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
