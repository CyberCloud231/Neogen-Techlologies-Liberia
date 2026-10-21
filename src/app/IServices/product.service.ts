import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../Data/products.data';
import { Product } from '../Models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // Later when backend ready: inject HttpClient and call API
  // private apiUrl = 'https://api.neogentechnologies.com/api/products';

  getProduct(slug: string): Observable<Product | undefined> {
    const cleanSlug = slug.toLowerCase().trim();
    console.log('Fetching product:', cleanSlug);

    // Mock fallback mapping
    const map: any = {
      'services': 'erp',
      'consulting': 'erp',
      'platforms': 'neogenpay',
      'all': 'neogenpay'
    };

    const finalSlug = map[cleanSlug] || cleanSlug;
    const found = PRODUCTS.find(p => p.slug.toLowerCase() === finalSlug);

    if(!found) {
      console.warn('Product not found for slug:', cleanSlug, 'trying neogenpay');
      return of(PRODUCTS[0]);
    }
    return of(found);
  }

  getAll(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
