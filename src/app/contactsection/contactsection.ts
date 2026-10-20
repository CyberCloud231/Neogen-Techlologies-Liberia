
import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnDestroy
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contactsection.html',
  styleUrls: ['./contactsection.css']
})
export class ContactCtaSection implements OnDestroy {
  isVideoOpen = false;

  form = {
    fullName: '',
    email: '',
    service: '',
    message: ''
  };

  private previousBodyOverflow = '';

  openVideo(): void {
    if (this.isVideoOpen) {
      return;
    }

    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.isVideoOpen = true;
  }

  closeVideo(): void {
    if (!this.isVideoOpen) {
      return;
    }

    this.isVideoOpen = false;
    document.body.style.overflow = this.previousBodyOverflow;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeVideo();
  }

  onSubmit(contactForm: NgForm): void {
    if (contactForm.invalid) {
      contactForm.form.markAllAsTouched();
      return;
    }

    const contactRequest = {
      fullName: this.form.fullName.trim(),
      email: this.form.email.trim(),
      service: this.form.service,
      message: this.form.message.trim()
    };

    if (
      !contactRequest.fullName ||
      !contactRequest.email ||
      !contactRequest.service ||
      !contactRequest.message
    ) {
      return;
    }

    // Replace this placeholder with your contact API/service call.
    console.log('Neogen Contact Request:', contactRequest);

    alert(
      'Thank you for contacting Neogen Technologies. ' +
      'Your form is valid, but the message has not been sent yet.'
    );

    this.resetForm(contactForm);
  }

  private resetForm(contactForm: NgForm): void {
    this.form = {
      fullName: '',
      email: '',
      service: '',
      message: ''
    };

    contactForm.resetForm(this.form);
  }

  ngOnDestroy(): void {
    document.body.style.overflow = this.previousBodyOverflow;
  }
}
