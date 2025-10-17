import { APP_INITIALIZER, Component, DOCUMENT, HostListener, Inject, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { AboutComponent } from './app/components/about/about.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { inject } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    CommonModule
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main class="main-content">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
      <button *ngIf="windowScrolled" class="scroll-to-top" (click)="scrollToTop()">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M13 20h-2V8h-3L12 3l4 5h-3z" /> 
        </svg>
      </button>
    </div>
  `,
  styles: [`
    html {
      scroll-behavior: smooth;
    }
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .main-content {
      flex: 1;
    }

    .scroll-to-top {
      position: fixed; /* Keep it in the same place when scrolling */
      bottom: 30px; /* Distance from the bottom of the viewport */
      right: 30px; /* Distance from the right of the viewport */
      z-index: 1000; /* Ensure it is above other content */
      
      /* Styling */
      background-color: #007bff; /* Blue background */
      color: #ffffff; /* White icon color */
      border: none;
      border-radius: 50%; /* Makes it a circle */
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: opacity 0.3s, transform 0.3s;
    }

    .scroll-to-top:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }

    /* Style the SVG icon inside the button */
    .scroll-to-top svg {
      width: 24px;
      height: 24px;
    }
  `]
})
export class App implements OnInit {
  // Flag to control the button's visibility
  windowScrolled: boolean = false; 
  
  // Inject DOCUMENT to access the window/document in a clean way
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    // You can optionally call a check here if the user loads the page mid-way
  }

  // Use @HostListener to bind to the 'window:scroll' event
  @HostListener("window:scroll", [])
  onWindowScroll() {
    // Check if the scroll position is past a certain threshold (e.g., 200px)
    if (window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop > 200) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }

  // Function to perform the scroll animation
  scrollToTop() {
    // Use the browser's native smooth scroll behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
}

bootstrapApplication(App,{  
  providers: [
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        inject();
      }
    }
  ]
}).catch(err => console.error(err));