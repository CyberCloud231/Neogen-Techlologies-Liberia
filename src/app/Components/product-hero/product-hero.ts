import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-hero.html',
  styleUrl: './product-hero.css'
})
export class ProductHeroComponent {
  @Input() product!: Product;
  @Input() tabs: string[] = ['overview','features','pricing','downloads','signup'];
  @Input() activeTab = 'overview';
  @Input() productName = '';
  @Output() tabChange = new EventEmitter<string>();

  fallbacks = [
    '/IMAGES/Neogen API Developer Ecosystem Banner.png',
    '/IMAGES/Neogen Technologies Cloud City.png',
    '/IMAGES/Neogen Technologies Liberia Data Centre.png',
    '/IMAGES/Neogen Technologies Liberia Holographic Office.png'
  ];

  get heroSrc(): string {
    const img = this.product?.heroImage?.trim();
    if(img && img.length > 4) return img;
    // Pick fallback by product slug hash so each product gets consistent image
    const hash = this.product?.slug?.length || 0;
    return this.fallbacks[hash % this.fallbacks.length];
  }

  onImgError(event: any){
    event.target.src = this.fallbacks[0];
  }
}
