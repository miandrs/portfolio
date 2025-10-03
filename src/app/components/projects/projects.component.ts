import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'projects.component.html',
  styleUrl: 'projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Task Manager App',
      description: 'A responsive task management application built with React and TypeScript. Features include drag-and-drop functionality, local storage persistence, and a clean, intuitive interface.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'CSS3', 'Local Storage'],
      features: [
        'Create, edit, and delete tasks',
        'Drag & drop task organization',
        'Filter by priority and status',
        'Responsive design for all devices'
      ],
      liveUrl: 'https://example-task-manager.netlify.app',
      githubUrl: 'https://github.com/alexchen/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A modern weather application that provides current conditions and forecasts. Built with vanilla JavaScript and integrates with OpenWeatherMap API for real-time data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['JavaScript', 'CSS3', 'REST API', 'Chart.js'],
      features: [
        'Current weather conditions',
        '5-day weather forecast',
        'Location-based weather data',
        'Interactive weather charts'
      ],
      liveUrl: 'https://example-weather-app.netlify.app',
      githubUrl: 'https://github.com/alexchen/weather-dashboard'
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website you\'re viewing! Built with Angular and showcases modern web development practices with clean design and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Responsive Design'],
      features: [
        'Fully responsive design',
        'Smooth scroll navigation',
        'Interactive project showcase',
        'Contact form validation'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/alexchen/portfolio'
    }
  ];
}