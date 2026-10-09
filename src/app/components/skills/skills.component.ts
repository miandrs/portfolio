import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

interface Tool {
  name: string;
  icon?: string;   // image path (optional)
  emoji?: string;  // fallback when no image
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: 'skills.component.html',
  styleUrl: 'skills.component.css'
})
export class SkillsComponent {
  coreStack = ['Java', 'Spring Boot', 'Angular', 'Node.js'];

  skillCategories: SkillCategory[] = [
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java / Spring Boot', level: 80 },
        { name: 'Spring MVC / Java EE', level: 70 },
        { name: 'JPA / Hibernate', level: 75 },
        { name: 'Node.js / Express', level: 70 }
      ]
    },
    {
      title: 'Frontend & Mobile',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 70 },
        { name: 'Android (Java)', level: 68 }
      ]
    },
    {
      title: 'Sécurité & Authentification',
      icon: '🔐',
      skills: [
        { name: 'Keycloak', level: 75 },
        { name: 'JWT / OAuth2', level: 80 },
        { name: 'RBAC (contrôle par rôles)', level: 80 }
      ]
    },
    {
      title: 'Bases de données & Data',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQLite', level: 65 },
        { name: 'Elasticsearch / Kibana', level: 60 }
      ]
    },
    {
      title: 'API & Automatisation',
      icon: '🧰',
      skills: [
        { name: 'API RESTful', level: 85 },
        { name: 'n8n (automatisation)', level: 65 }
      ]
    }
  ];

  tools: Tool[] = [
    { name: 'UML', icon: 'assets/icons/uml.png' },
    { name: 'Mérise', icon: 'assets/icons/dbschema.png' },
    { name: 'MySQL', icon: 'assets/icons/mysql.png' },
    { name: 'MongoDB', icon: 'assets/icons/compass.ico' }
  ];

  getSkillColor(level: number): string {
    if (level >= 80) return 'linear-gradient(135deg, #10b981, #059669)';
    if (level >= 70) return 'linear-gradient(135deg, #2563eb, #1d4ed8)';
    if (level >= 60) return 'linear-gradient(135deg, #f59e0b, #d97706)';
    return 'linear-gradient(135deg, #ef4444, #dc2626)';
  }

  getLevelLabel(level: number): string {
    if (level >= 85) return 'Expert';
    if (level >= 75) return 'Avancé';
    if (level >= 65) return 'Intermédiaire';
    return 'Notions solides';
  }
}