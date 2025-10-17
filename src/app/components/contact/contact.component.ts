import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css'
})
export class ContactComponent {
  // keep the original string URL so we can pass a string to window.open
  pdfUrl: string = 'assets/cv/Rakotomiandrisoa_Jean_Bruno.pdf';
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  showSuccess = false;

  private http = inject(HttpClient);

  constructor(private contactService: ContactService) {}
  
  onSubmit() {
    this.isSubmitting = true;
    
    // Simulate form submission
    this.contactService.sendContactForm(this.formData).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.resetForm();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }, 2000);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );

  }
  
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  openPdfCV() {
    this.http.get(this.pdfUrl, { responseType: 'blob' })
      .subscribe({
        next: (response: Blob) => {
          // 2. Create a temporary URL for the blob
          const fileURL = URL.createObjectURL(response);
          
          // 3. Open a new tab
          window.open(fileURL, '_blank');
        },
        error: (err) => {
          console.error('Error fetching PDF:', err);
          // Handle error, maybe alert the user
        }
    });
  }
}