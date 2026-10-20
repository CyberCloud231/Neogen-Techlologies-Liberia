import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TeamMember {
  id: string; name: string; role: string; specialty: string; biography: string; image: string;
  linkedin?: string; facebook?: string; instagram?: string; email?: string;
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team-section.html',
  styleUrls: ['./team-section.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSection implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;

  readonly teamMembers: TeamMember[] = [
    { id: '01', name: 'Abraham Darius Paye', role: 'Founder & Tech Lead', specialty: 'Technology & Innovation', biography: 'Leads Neogen’s technical vision, enterprise architecture and engineering standards. Focused on building secure, scalable SaaS platforms for Liberia and global markets.', image: '/IMAGES/CeoImage1.png', linkedin: '#', facebook: '#', instagram: '#', email: 'info@neogentechnologies.com' },
    { id: '02', name: 'Stephen S. Gaypia', role: 'Co-Founder & Developer', specialty: 'Software Engineering', biography: 'Drives product development, application engineering and system integration across NeogenPay, NeoNotify and NeoDrive platforms.', image: '/IMAGES/Developer.png', linkedin: '#', facebook: '#', instagram: '#', email: 'info@neogentechnologies.com' },
    { id: '03', name: 'Marcus Karmoh', role: 'Marketing & Operations', specialty: 'Business & Operations', biography: 'Coordinates marketing, client success and business operations to ensure enterprise delivery and long-term client partnerships.', image: '/IMAGES/operation Manager.jpeg', linkedin: '#', facebook: '#', instagram: '#' },
    { id: '04', name: 'Board Chairman', role: 'Executive Board Chairman', specialty: 'Executive Leadership', biography: 'Provides strategic governance, risk oversight and long-term growth guidance for Neogen Technologies Liberia.', image: '/IMAGES/systemSupport1.jpg', linkedin: '#', facebook: '#', instagram: '#' }
  ];

  activeIndex = 0;
  isAnimating = false;
  private autoSlideTimer: any = null;

  constructor(private cdr: ChangeDetectorRef) {}

  get activeMember(): TeamMember { return this.teamMembers[this.activeIndex]; }

  ngOnInit(): void { this.startAutoSlide(); }
  ngOnDestroy(): void { this.stopAutoSlide(); }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideTimer = setInterval(() => this.next(), 5000);
    this.restartProgress();
  }

  stopAutoSlide(): void {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }

  private restartProgress(): void {
    const bar = this.progressBar?.nativeElement || document.querySelector('.nt-team-progress__bar') as HTMLElement;
    if (!bar) return;
    bar.style.animation = 'none';
    void bar.offsetWidth; // force reflow
    bar.style.animation = '';
  }

  private changeTo(index: number): void {
    if (this.isAnimating) return;
    const newIndex = (index + this.teamMembers.length) % this.teamMembers.length;
    if (newIndex === this.activeIndex) return;

    this.isAnimating = true;
    this.cdr.markForCheck();
    this.restartProgress();

    setTimeout(() => {
      this.activeIndex = newIndex;
      this.isAnimating = false;
      this.cdr.markForCheck(); // <-- THIS FIXES OnPush
    }, 300);
  }

  next(): void { this.changeTo(this.activeIndex + 1); }
  prev(): void { this.changeTo(this.activeIndex - 1); }
  goTo(index: number): void { this.changeTo(index); this.startAutoSlide(); }

  trackById(_: number, m: TeamMember): string { return m.id; }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = 'assets/img/team/team-placeholder.jpg';
  }
}
