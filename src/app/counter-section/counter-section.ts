import { RouterModule } from '@angular/router';
import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Counter {
  id: string;
  end: number;
  suffix: string;
  label: string;
  sub: string;
  icon: string;
}

@Component({
  selector: 'app-counter-section',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './counter-section.html',
  styleUrls: ['./counter-section.css']
})
export class CounterSection implements AfterViewInit {
  @ViewChild('counterArea') counterArea!: ElementRef<HTMLElement>;

  // Update these numbers to your real numbers
  readonly counters: Counter[] = [
    { id: '01', end: 5, suffix: '+', label: 'Years Experience', sub: 'Enterprise Solutions', icon: 'bi bi-award' },
    { id: '02', end: 97, suffix: '%', label: 'Retention Rate', sub: 'Client Satisfaction', icon: 'bi bi-heart-pulse' },
    { id: '03', end: 120, suffix: '+', label: 'Projects Completed', sub: 'Across Liberia', icon: 'bi bi-kanban' },
    { id: '04', end: 50, suffix: '+', label: 'Happy Clients', sub: 'Trusted Partners', icon: 'bi bi-people' }
    // If you want to keep your original: 25 / 97% / 8K / 19K -> change end to 25,97,8,19 and suffix to '', '%', 'K', 'K'
  ];

  displayValues: number[] = [0,0,0,0];
  private hasAnimated = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting &&!this.hasAnimated) {
        this.hasAnimated = true;
        this.animateAll();
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(this.counterArea.nativeElement);
  }

  private animateAll(): void {
    this.counters.forEach((counter, index) => {
      this.countUp(index, counter.end, 2000);
    });
  }

  private countUp(index: number, end: number, duration: number): void {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      this.displayValues[index] = Math.floor(ease * end);
      this.cdr.markForCheck();
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.displayValues[index] = end;
        this.cdr.markForCheck();
      }
    };
    requestAnimationFrame(animate);
  }

  trackById(_: number, item: Counter): string { return item.id; }
}
