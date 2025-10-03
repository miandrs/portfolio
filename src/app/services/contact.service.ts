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

  constructor() { 
    init({
      publicKey: process.env.PUB_KEY,
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
    return emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formData);
  }
}
