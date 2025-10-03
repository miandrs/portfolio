import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'skills.component.html',
  styleUrl: 'skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'Bootstrap', level: 75 },
        { name: 'JavaScript', level: 85 },
        { name: 'Angular', level: 70 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'Express', level: 70 },
        { name: 'Node.js', level: 80 },
        { name: 'Nest.js', level: 60 }
      ]
    },
    {
      title: 'Outils De Développement',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'npm - maven', level: 85 },
        { name: 'REST API', level: 90 },
        { name: 'Swagger(OpenAPI)', level: 85 },
      ]
    }
  ];

  tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman/Bruno', icon: '📮' },
    { name: 'DBSchema', icon: '💾' },
    { name: 'MongoDB Compass', icon: '🗂️' },
    { name: 'MySQL', icon: '🛢' }
  ];

  getSkillColor(level: number): string {
    if (level >= 80) return 'linear-gradient(135deg, #10b981, #059669)';
    if (level >= 70) return 'linear-gradient(135deg, #2563eb, #1d4ed8)';
    if (level >= 60) return 'linear-gradient(135deg, #f59e0b, #d97706)';
    return 'linear-gradient(135deg, #ef4444, #dc2626)';
  }
}