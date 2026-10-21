import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-overview.html',
  styleUrl: './product-overview.css'
})
export class ProductOverviewComponent { @Input() product!: Product; }
