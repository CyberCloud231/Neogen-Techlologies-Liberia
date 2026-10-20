import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: string; name: string; role: string; company: string; companyInitials: string; feedback: string; rating: number; image: string;
}

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cestimonial-section.html',
  styleUrls: ['./cestimonial-section.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialSection implements OnInit, OnDestroy {
  readonly testimonials: Testimonial[] = [
    { id: '01', name: 'James K. Kollie', role: 'CEO', company: 'LibFinance Ltd', companyInitials: 'LF', rating: 5, feedback: 'Neogen Technologies delivered our NeogenPay integration in 3 weeks. Secure, fast and exactly what our business needed. Their team is enterprise-grade.', image: '/IMAGES/systemSupport1.jpg' },
    { id: '02', name: 'Sarah M. Johnson', role: 'Operations Manager', company: 'Monrovia Logistics', companyInitials: 'ML', rating: 5, feedback: 'From school management system to real estate platform, Neogen has been our trusted tech partner. Professional, responsive and very reliable.', image: '/IMAGES/systemSupport1.jpg' },
    { id: '03', name: 'Emmanuel T. Doe', role: 'Founder', company: 'Liberia Mart', companyInitials: 'LM', rating: 5, feedback: 'Best IT company in Liberia. They transformed our idea into a live e-commerce platform with inventory, payments and delivery tracking.', image: '/IMAGES/CeoImage1.png' },
    { id: '04', name: 'Ruth A. Williams', role: 'Director', company: 'Hope Academy', companyInitials: 'HA', rating: 5, feedback: 'Our school management system is now fully automated. Parents, students and teachers love it. Neogen really understands business challenges.', image: '/IMAGES/Co-funder.jpeg' }
  ];

  activeIndex = 0;
  isAnimating = false;
  private timer: any = null;

  constructor(private cdr: ChangeDetectorRef) {}
  get activeItem(): Testimonial { return this.testimonials[this.activeIndex]; }

  ngOnInit(): void { this.startAutoSlide(); }
  ngOnDestroy(): void { this.stopAutoSlide(); }

  startAutoSlide(): void { this.stopAutoSlide(); this.timer = setInterval(() => this.next(), 5500); }
  stopAutoSlide(): void { if (this.timer) { clearInterval(this.timer); this.timer = null; } }

  private changeTo(index: number): void {
    if (this.isAnimating) return;
    const newIndex = (index + this.testimonials.length) % this.testimonials.length;
    if (newIndex === this.activeIndex) return;
    this.isAnimating = true;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.activeIndex = newIndex;
      this.isAnimating = false;
      this.cdr.markForCheck();
    }, 300);
  }

  next(): void { this.changeTo(this.activeIndex + 1); }
  prev(): void { this.changeTo(this.activeIndex - 1); }
  goTo(i: number): void { this.changeTo(i); this.startAutoSlide(); }
  onImageError(e: Event): void { const img = e.target as HTMLImageElement; img.onerror = null; img.src = 'assets/img/team/team-placeholder.jpg'; }
}
