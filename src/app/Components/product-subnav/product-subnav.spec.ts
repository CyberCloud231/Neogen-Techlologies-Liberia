import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubnav } from './product-subnav';

describe('ProductSubnav', () => {
  let component: ProductSubnav;
  let fixture: ComponentFixture<ProductSubnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSubnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSubnav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
