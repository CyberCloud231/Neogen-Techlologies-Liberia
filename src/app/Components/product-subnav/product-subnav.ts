import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-subnav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-subnav.html',
  styleUrl: './product-subnav.css'
})
export class ProductSubnavComponent {
  @Input() productName = ''; @Input() tabs: string[] = []; @Input() activeTab = 'overview';
  @Output() tabChange = new EventEmitter<string>();
  isSticky = false;
  @HostListener('window:scroll', []) onScroll(){ this.isSticky = window.scrollY > 320; }
}
