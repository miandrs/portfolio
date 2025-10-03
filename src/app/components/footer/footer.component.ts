import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: 'footer.component.html',
  styleUrl: 'footer.component.css'
})
export class FooterComponent {
  downloadResume() {
    alert('Resume download would start here. Please add your actual resume file.');
  }
}