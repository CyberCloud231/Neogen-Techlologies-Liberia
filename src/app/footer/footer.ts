import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear: number = new Date().getFullYear();
  email: string = '';

  onSubscribe() {
    if (!this.email) return;
    console.log('Newsletter subscribe:', this.email);
    // TODO: call your API here
    // this.newsletterService.subscribe(this.email).subscribe(...)
    this.email = '';
  }
}
