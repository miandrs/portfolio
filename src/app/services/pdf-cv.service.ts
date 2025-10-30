import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfCvService {
  pdfUrl: string = 'assets/cv/Rakotomiandrisoa_Jean_Bruno.pdf';
  private http = inject(HttpClient);

  constructor() { }

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
