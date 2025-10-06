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
        { name: 'Angular', level: 80 },
        { name: 'Flutter', level: 65 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'React', level: 70 }
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
      title: 'Toolchain',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'NPM - Maven', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Swagger(OpenAPI)', level: 85 },
      ]
    }
  ];

  tools = [
    { name: 'MySQL', icon: 'assets/icons/mysql.png' },
    { name: 'MongoDB', icon: 'assets/icons/compass.ico' },
    { name: 'UML', icon: 'assets/icons/dbschema.png' },
    { name: 'Mérise', icon: 'assets/icons/dbschema.png' }
  ];

  getSkillColor(level: number): string {
    if (level >= 80) return 'linear-gradient(135deg, #10b981, #059669)';
    if (level >= 70) return 'linear-gradient(135deg, #2563eb, #1d4ed8)';
    if (level >= 60) return 'linear-gradient(135deg, #f59e0b, #d97706)';
    return 'linear-gradient(135deg, #ef4444, #dc2626)';
  }
}