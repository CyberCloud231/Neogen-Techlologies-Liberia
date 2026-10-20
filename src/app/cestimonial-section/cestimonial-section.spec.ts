import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestimonialSection } from './cestimonial-section';

describe('CestimonialSection', () => {
  let component: CestimonialSection;
  let fixture: ComponentFixture<CestimonialSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestimonialSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestimonialSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
