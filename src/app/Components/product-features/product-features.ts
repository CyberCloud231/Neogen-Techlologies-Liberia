import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-features.html',
  styleUrl: './product-features.css'
})
export class ProductFeaturesComponent {
  @Input() features: any[] = [];
  @Input() productName: string = ''; // <-- ADD THIS
}
