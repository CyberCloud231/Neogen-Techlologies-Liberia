import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-pricing.html',
  styleUrl: './product-pricing.css'
})
export class ProductPricingComponent {
  @Input() pricing: any[] = [];
  @Input() productName: string = '';
}
