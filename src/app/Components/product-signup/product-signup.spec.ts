import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSignup } from './product-signup';

describe('ProductSignup', () => {
  let component: ProductSignup;
  let fixture: ComponentFixture<ProductSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
