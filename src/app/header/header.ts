import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  isSticky = false;
  hideMiniNav = false;

  constructor(private readonly router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 80) {
      this.isSticky = true;
      this.hideMiniNav = true;
    } else {
      this.isSticky = false;
      this.hideMiniNav = false;
    }
  }

  closeMegaMenus(): void {
    (document.activeElement as HTMLElement)?.blur();
    document.querySelectorAll('.mega-menu').forEach((m) => {
      m.classList.add('is-closing');
      setTimeout(() => m.classList.remove('is-closing'), 300);
    });
  }

  closeAllOffcanvas(): void {
    this.closeMegaMenus();
    const els = document.querySelectorAll('.offcanvas.show');
    els.forEach((el: any) => {
      const bs = (window as any).bootstrap?.Offcanvas?.getInstance(el);
      if (bs) bs.hide();
    });
  }

  navigateToTeam(event: MouseEvent): void {
    event.preventDefault();
    this.closeAllOffcanvas();
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        document.getElementById('teamSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    });
  }
}
