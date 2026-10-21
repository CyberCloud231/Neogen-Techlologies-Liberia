import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-signup.html',
  styleUrl: './product-signup.css'
})
export class ProductSignupComponent {
  @Input() product!: Product;
  form = { name:'', email:'', company:'', phone:'' };
  submit(){ alert(`Registered for ${this.product.name}: ${this.form.name}`); }
}
