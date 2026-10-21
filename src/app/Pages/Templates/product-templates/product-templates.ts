import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../IServices/product.service';
import { Product } from '../../../Models/product.model';
import { ProductHeroComponent } from '../../../Components/product-hero/product-hero';
import { ProductOverviewComponent } from '../../../Components/product-overview/product-overview';
import { ProductFeaturesComponent } from '../../../Components/product-features/product-features';
import { ProductPricingComponent } from '../../../Components/product-pricing/product-pricing';
import { ProductDownloadsComponent } from '../../../Components/product-downloads/product-downloads';
import { ProductSignupComponent } from '../../../Components/product-signup/product-signup';

@Component({
  selector: 'app-product-templates',
  standalone: true,
  imports: [
    CommonModule,
    ProductHeroComponent, // hero now includes subnav inside
    ProductOverviewComponent,
    ProductFeaturesComponent,
    ProductPricingComponent,
    ProductDownloadsComponent,
    ProductSignupComponent
  ],
  templateUrl: './product-templates.html',
  styleUrl: './product-templates.css'
})
export class ProductTemplates implements OnInit, AfterViewInit {
  product: Product | undefined;
  activeTab = 'overview';
  tabs = ['overview','features','pricing','downloads','signup'];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let slug = params.get('slug') || this.route.snapshot.url[0]?.path || 'neogenpay';
      // clean mapping
      const map: any = { 'platforms': 'neogenpay', 'services': 'erp', 'consulting': 'erp' };
      slug = map[slug] || slug;

      this.productService.getProduct(slug).subscribe(p => {
        this.product = p;
        console.log('Loaded:', p?.name, 'Pricing:', p?.pricing?.length);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.observeReveal();
        }, 100);
      });
    });
  }

  ngAfterViewInit(): void {
    this.observeReveal();
  }

  private observeReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPos = window.scrollY + 150;
    for (const tab of this.tabs) {
      const el = document.getElementById(tab);
      if (el) {
        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          this.activeTab = tab;
          break;
        }
      }
    }
  }

  scrollTo(id: string): void {
    this.activeTab = id;
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  }
}
