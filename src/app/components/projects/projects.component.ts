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
      title: 'Bus Manager App',
      description: 'C\'est une solution web et mobile complète développée pour moderniser la gestion des transports urbains. Elle vise à améliorer la mobilité en rendant les services de transport plus efficaces, traçables et accessibles, tout en intégrant des outils numériques modernes.',
      image: 'assets/projects/taggeo.jpeg',
      technologies: ['Spring Boot', 'MySQL', 'MongoDB', 'Express', 'Angular', 'Node.js', 'TypeScript', 'REST API', 'Flutter'],
      features: [
        'Suivi GPS en temps réel des bus',
        'Tableau de bord intéractif pour les administrateurs',
        'Billetterie numérique sécurisée',
        'Paiement mobile intégré via MVola',
        //'Application mobile pour les: Passagers | Receveurs | Cash Points'
      ],
      liveUrl: null,
      githubUrl: null
    },
    // {
    //   title: 'Site Vitrine De MI.KS Agency',
    //   description: 'C\'est un site vitrine professionnel conçu pour une agence marketing souhaitant promouvoir ses services, ses réalisations et attirer de nouveaux clients. Le site met en avant une identité visuelle forte, une navigation fluide et une expérience utilisateur optimisée, grâce au framework Angular.',
    //   image: 'assets/projects/mi-ks.png',
    //   technologies: ['Angular', 'Typescript', 'Responsive Design'],
    //   features: [
    //     'Interface responsive',
    //     'Présentation des services',
    //     'Formulaire de contact intélligent avec validation en temps réel',
    //     'Intégration des réseaux sociaux',
    //     'Optimisation SEO pour le référencement naturel'
    //   ],
    //   liveUrl: 'https://example-weather-app.netlify.app',
    //   githubUrl: null
    // },
    {
      title: 'E-Commerce',
      description: 'Développement d\'une application e-commerce complète, composée d\'un Front-Office pour les utilisateurs, d\'un Back-Office pour l\'administration et d\'une API REST sécurisée. Le projet est conçu pour offrir une expérience fluide, mobile-friendly, et une gestion efficace des produits et commandes.',
      image: 'assets/projects/agrohelp-front-office.png',
      technologies: ['MongoDB', 'Express', 'Angular', 'React', 'Node.js', 'TypeScript', 'Responsive Design'],
      features: [
        'Interface utilisateur fluide avec React',
        'Dashboard avec Angular (gestion des produits, commandes)',
        'API RESTFUL documentée avec Swagger',
        'Système de paiement intégré avec MVola',
        'Design responsive pour mobile et desktop'
      ],
      liveUrl: 'https://agrohelp-consulting.onrender.com',
      githubUrl: null
    },
    {
      title: 'Portfolio Website',
      description: 'Ce portfolio est une application web dynamique développée avec Angular, qui me permet de présenter mon parcours, mes compétences, mes projets et mes services de manière professionnelle et interactive. Il reflète à la fois mon identité visuelle et mes compétences techniques, tout en offrant une expérience utilisateur fluide, responsive et moderne.',
      image: 'assets/logo/logo-init.png',
      technologies: ['Angular', 'TypeScript', 'Responsive Design'],
      features: [
        'Design entièrement responsive',
        'Navigation à défilement fluide',
        'Présentation interactive des projets',
        'Section compétences techniques avec barres de progression',
        'Formulaire de contact dynamique'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/miandrs/portfolio'
    }
  ];
}