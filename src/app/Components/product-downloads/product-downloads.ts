import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-downloads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-downloads.html',
  styleUrl: './product-downloads.css'
})
export class ProductDownloadsComponent { @Input() downloads: any[] = []; @Input() productName = ''; }
