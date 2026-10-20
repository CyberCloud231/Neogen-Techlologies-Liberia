import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamSection } from '../team-section/team-section';
import { CounterSection } from '../counter-section/counter-section';
import { ContactCtaSection } from '../contactsection/contactsection';
import { TestimonialSection } from '../cestimonial-section/cestimonial-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TeamSection, CounterSection, TestimonialSection, ContactCtaSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {

  /* ================================
     SCROLL REVEAL SETUP
  ================================= */
  @ViewChildren('revealSection') revealSections!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    this.revealSections.forEach(section => {
      this.observer.observe(section.nativeElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /* ================================
     HERO SLIDER - NEOGEN TECHNOLOGIES LIBERIA
     Liberian-owned SaaS & Platform Provider
  ================================= */
  images = [
    {
      src: '/IMAGES/Neogen Technologies Cloud City.png',
      subTitle: '🇱🇷 Liberian-Owned • Enterprise SaaS & Platform Provider',
      title: 'Building Secure, Scalable Digital Platforms for Liberia',
      description: 'Neogen Technologies is a Liberian-owned enterprise technology company. We design, build and operate secure SaaS platforms and digital infrastructure that power businesses, institutions and government across Liberia.',
      buttonText: 'Explore Platforms'
    },
    {
      src: '/IMAGES/NeogenTechnologies Liberia Tech Banner.png',
      subTitle: 'SaaS Product Engineering • Cloud Native',
      title: 'From Idea to Enterprise-Grade SaaS Platform',
      description: 'We transform complex business challenges into secure, scalable SaaS products. From NeogenPay to NeoDrive and custom enterprise systems engineered for performance, security and growth.',
      buttonText: 'View Platforms'
    },
    {
      src: '/IMAGES/NeogenTechnologies trusted services.png',
      subTitle: 'GovTech & Institutional Platforms',
      title: 'Trusted Technology Partner for Public Sector Innovation',
      description: 'We build compliant, secure and interoperable systems for government and institutions improving transparency, service delivery and citizen experience across Liberia.',
      buttonText: 'Our Solutions'
    },
    {
      src: '/IMAGES/NeoSmartCampus School Management.png',
      subTitle: 'EdTech SaaS • NeoSmartCampus',
      title: 'SaaS Platform for Education & Institutional Management',
      description: 'Our flagship EdTech SaaS, NeoSmartCampus, streamlines student lifecycle, academic management, finance and communication trusted by schools and institutions.',
      buttonText: 'Explore EdTech'
    },
    {
      src: '/IMAGES/Neogen Technologies Liberia Holographic Office.png',
      subTitle: 'Enterprise SaaS for Growing Businesses',
      title: 'Platforms That Power Business Operations',
      description: 'We deliver enterprise-grade SaaS solutions ERP, CRM, and custom business platforms that automate operations, secure data and accelerate growth for Liberian enterprises.',
      buttonText: 'Enterprise Solutions'
    },
    {
      src: '/IMAGES/Neogen Technologies Liberia Data Centre.png',
      subTitle: 'Managed Cloud & Infrastructure • 99.9% Uptime',
      title: 'Secure, Compliant Cloud Infrastructure',
      description: 'From cloud deployment to infrastructure monitoring and cybersecurity, we provide managed infrastructure services designed for reliability, compliance and enterprise scale.',
      buttonText: 'Infrastructure Services'
    },
    {
      src: '/IMAGES/Neogen API Developer Ecosystem Banner.png',
      subTitle: 'API-First • Developer Ecosystem',
      title: 'Build With Neogen Payments, Identity & Communications APIs',
      description: 'Integrate NeogenPay, NeogenNotify and Neogen Auth via secure, well-documented APIs. Join developers and businesses building on Liberia\'s growing SaaS ecosystem.',
      buttonText: 'Developer Portal'
    },
    {
      src: '/IMAGES/Neogen Technologies Cloud City copy.png',
      subTitle: 'Capacity Building • Made in Liberia',
      title: 'Empowering Liberia\'s Next Generation of Tech Talent',
      description: 'As a proudly Liberian-owned company, we invest in local talent through hands-on training in software engineering, cloud and cybersecurity building sustainable digital expertise.',
      buttonText: 'Join Training'
    },
    {
      src: '/IMAGES/Neogen Technologies Dashboard Presentation.png',
      subTitle: 'Payments & Communications SaaS',
      title: 'NeogenPay & NeogenNotify Built for Liberian Businesses',
      description: 'Accept payments, send bulk SMS and engage customers at scale with our homegrown SaaS platforms secure, affordable and designed for the Liberian market.',
      buttonText: 'Start With Neogen'
    }
  ];

  homeServices = [
    {
      icon: 'fa-solid fa-code',
      title: 'Web & SaaS Development',
      description: 'We architect and build modern, secure, cloud-native web and SaaS applications. Our platforms are engineered for scalability, performance and enterprise compliance powering operations and growth.'
    },
    {
      icon: 'fa-solid fa-mobile-screen',
      title: 'Mobile & Platform Apps',
      description: 'High-performance iOS and Android applications that connect seamlessly to our SaaS ecosystem. Designed for speed, security and intuitive user experience from customer apps to enterprise mobility.'
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'Enterprise SaaS Engineering',
      description: 'We deliver custom enterprise SaaS platforms from NeogenPay and NeoDrive to ERP and CRM systems. Secure, API-first architecture built for integration, automation and scale.'
    },
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Managed Cloud & Infrastructure',
      description: 'Proactive monitoring, 24/7 support and secure cloud operations. We manage your infrastructure for 99.9% uptime, data protection and compliance — so you can focus on growth.'
    }
  ];

  projects = [
    {
      image: '/IMAGES/NeoSmartCampus School Management.png',
      title: 'NeoSmartCampus',
      description: 'Flagship EdTech SaaS for student lifecycle, academics, finance and institution-wide communication deployed across Liberia.',
      tags: ['SaaS', 'EdTech']
    },
    {
      image: '/IMAGES/Bus ticketing system.jpeg',
      title: 'Neogen Mobility Platform',
      description: 'SaaS ticketing and fleet management platform with real-time booking, scheduling and passenger insights for transport operators.',
      tags: ['SaaS', 'Transport Tech']
    },
    {
      image: '/IMAGES/ID system for Government.jpeg',
      title: 'Secure ID & GovTech Platform',
      description: 'Enterprise-grade identity and verification platform for secure citizen registration, authentication and public service delivery.',
      tags: ['GovTech', 'Platform']
    }
  ];
}
