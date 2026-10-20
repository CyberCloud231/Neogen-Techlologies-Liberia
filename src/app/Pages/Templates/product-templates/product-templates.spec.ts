import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplates } from './product-templates';

describe('ProductTemplates', () => {
  let component: ProductTemplates;
  let fixture: ComponentFixture<ProductTemplates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTemplates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTemplates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
