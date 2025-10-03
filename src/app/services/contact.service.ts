import { Injectable } from '@angular/core';
import emailjs, { init } from '@emailjs/browser';

// Define the shape of your contact form data
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  protected serviceID: string = "service_gxbbfr3";
  protected templateID: string = "template_4h4msfe";
  protected pubKey: string = "6mCGKDXjUx1PU9H_I";

  constructor() { 
    init({
      publicKey: this.pubKey,
      blockHeadless: true,
      blockList: {
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        watchVariable: 'userEmail',
      },
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });
  }

  sendContactForm(formData: any) {
    return emailjs.send(this.serviceID, this.templateID, formData);
  }
}
