import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

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
  
  downloadResume() {
    // In a real application, this would download an actual resume file
    alert('Resume download would start here. Please add your actual resume file.');
  }
}