import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { PdfCvService } from '../../services/pdf-cv.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  constructor(
    private contactService: ContactService,
    private pdfCVService: PdfCvService
  ) {}

  onSubmit(form: NgForm) {
    if (form.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    this.showError = false;

    this.contactService.sendContactForm(this.formData).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.isSubmitting = false;
        this.showSuccess = true;

        // Clears the values AND the touched/dirty state, so no error messages appear
        form.resetForm({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => (this.showSuccess = false), 5000);
      },
      (error) => {
        console.log('FAILED...', error);
        this.isSubmitting = false;
        this.showError = true;
        setTimeout(() => (this.showError = false), 7000);
      }
    );
  }

  openPdfCV() {
    this.pdfCVService.openPdfCV();
  }
}