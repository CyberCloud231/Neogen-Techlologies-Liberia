import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PRODUCTS, Product } from '../../../Data/products.data';

@Component({
  selector: 'app-product-templates',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-templates.html',
  styleUrl: './product-templates.css'
})
export class ProductTemplates implements OnInit {
  product: Product | undefined;
  activeTab = 'overview';
  tabs = ['overview', 'features', 'benefits'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let slug = params.get('slug') || this.route.snapshot.url[0]?.path || '';
      if(slug === 'platforms') slug = 'neogenpay';

      this.product = PRODUCTS.find((p: Product) => p.slug === slug);
      this.activeTab = 'overview';
      window.scrollTo(0, 0);
    });
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }
}
