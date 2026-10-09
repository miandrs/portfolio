import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: 'projects.component.html',
  styleUrl: 'projects.component.css'
})
export class ProjectsComponent {
  private readonly initialCount = 3;
  private readonly step = 3;
  visibleCount = this.initialCount;
  projects = [
    {
      title: 'Plateforme SaaS Multi-utilisateurs',
      description: 'Développement d\'une plateforme web sécurisée multi-utilisateurs avec Spring Boot, Angular, MySQL et Keycloak, intégrant une authentification sécurisée et un contrôle d\'accès par rôles.',
      image: 'assets/projects/saas.jpeg',
      alt: 'Capture d\'écran de la plateforme SaaS multi-utilisateurs avec authentification et gestion des rôles',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Keycloak', 'JWT', 'OAuth2'],
      features: [
        'Authentification sécurisée (JWT / OAuth2)',
        'Contrôle d\'accès par rôles (RBAC)',
        'Gestion multi-utilisateurs'
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      title: 'Taggéo - Mobilité urbaine',
      description: 'Digitalisation de la mobilité urbaine pour optimiser la gestion des auto-bus. Développement d\'applications web et d\'API RESTful, avec une interface ergonomique conçue en collaboration avec l\'équipe produit.',
      image: 'assets/projects/taggeo.jpeg',
      alt: 'Capture d\'écran de Taggéo, application de mobilité urbaine avec suivi des bus en temps réel',
      technologies: ['Spring Boot', 'Keycloak', 'JPA / Hibernate', 'MySQL', 'Angular', 'MongoDB', 'Express', 'Node.js'],
      features: [
        'Suivi GPS en temps réel des bus',
        'Tableau de bord interactif pour les administrateurs',
        'Billetterie numérique sécurisée',
        'Paiement mobile intégré via MVola'
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      title: 'Jirakaiky - Pipeline de données',
      description: 'Mise en place d\'un pipeline automatisé avec n8n pour synchroniser les données MySQL vers Elasticsearch, et création de dashboards analytiques sous Kibana.',
      image: 'assets/projects/n8n.jpeg',
      alt: 'Workflow n8n synchronisant les données MySQL vers Elasticsearch pour le projet Jirakaiky',
      technologies: ['n8n', 'MySQL', 'Elasticsearch', 'Kibana'],
      features: [
        'Synchronisation automatisée MySQL vers Elasticsearch',
        'Dashboards analytiques sous Kibana',
        'Workflows d\'automatisation avec n8n'
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      title: 'Plateforme E-commerce Agricole',
      description: 'Plateforme de vente en ligne de produits fermiers visant à valoriser le monde rural. Application web et API RESTful développées avec la stack MEAN, dans le cadre de la digitalisation des activités de l\'entreprise.',
      image: 'assets/projects/agrohelp-front-office.jpeg',
      alt: 'Capture d\'écran de la boutique en ligne de produits fermiers Agrohelp',
      technologies: ['MongoDB', 'Express', 'Angular', 'Node.js', 'REST API'],
      features: [
        'Vente en ligne de produits fermiers',
        'Back-office d\'administration (produits, commandes)',
        'Système de paiement intégré avec MVola',
        'Design responsive pour mobile et desktop'
      ],
      liveUrl: 'https://agrohelp-consulting.onrender.com',
      githubUrl: null
    },
    {
      title: 'EQuickAsset - Gestion de patrimoine',
      description: 'Digitalisation de la gestion de patrimoine pour le suivi et la valorisation des actifs, avec une application web et une application Android.',
      image: 'assets/projects/equickasset.jpeg',
      alt: 'Capture d\'écran de EQuickAsset, application de gestion et de valorisation de patrimoine',
      technologies: ['Spring MVC', 'Java EE', 'Angular', 'Java', 'SQLite', 'Android Studio'],
      features: [
        'Application web avec API RESTful',
        'Application Android native (Java & SQLite)',
        'Suivi et valorisation des actifs'
      ],
      liveUrl: null,
      githubUrl: null
    }
  ];

  get visibleProjects() {
    return this.projects.slice(0, this.visibleCount);
  }

  get hasMore(): boolean {
    return this.visibleCount < this.projects.length;
  }

  get canShowLess(): boolean {
    return !this.hasMore && this.projects.length > this.initialCount;
  }

  loadMore(): void {
    this.visibleCount = Math.min(this.visibleCount + this.step, this.projects.length);
  }

  showLess(): void {
    this.visibleCount = this.initialCount;
  }

  trackByTitle(_: number, project: { title: string }) {
    return project.title;
  }
}