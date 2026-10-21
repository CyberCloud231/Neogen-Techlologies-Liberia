import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDownloads } from './product-downloads';

describe('ProductDownloads', () => {
  let component: ProductDownloads;
  let fixture: ComponentFixture<ProductDownloads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDownloads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDownloads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
