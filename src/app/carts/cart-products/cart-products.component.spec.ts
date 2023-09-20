import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductsComponent } from './cart-products.component';

describe('CartProductsComponent', () => {
  let component: CartProductsComponent;
  let fixture: ComponentFixture<CartProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductsComponent]
    });
    fixture = TestBed.createComponent(CartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
