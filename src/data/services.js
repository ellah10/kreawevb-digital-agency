// src/data/services.js
// Source unique de vérité pour tous les services Kreaweb

export const services = [
  {
    id: 'ui-ux',
    title: 'Conception UI/UX',
    tag: 'Design',
    tagline: 'Des interfaces qui convertissent et qui séduisent.',
    description:
      'Kreaweb conçoit des expériences utilisateurs modernes, pensées pour convertir vos visiteurs en clients. Du wireframe au prototype interactif, chaque décision de design est guidée par vos objectifs.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop',
    color: '#7B6FE8',
    features: [
      { title: 'Wireframes & Prototypes', desc: 'On modélise chaque écran avant de coder. Vous validez le parcours utilisateur en amont.' },
      { title: 'Design System', desc: 'Composants réutilisables, typographie, couleurs — une cohérence visuelle sur tout le produit.' },
      { title: 'Tests utilisateurs', desc: "On teste les maquettes avec de vrais utilisateurs pour valider les choix d'interface." },
      { title: 'Responsive Design', desc: "Chaque interface est pensée mobile-first pour fonctionner parfaitement sur tous les écrans." },
    ],
    process: [
      { step: '01', title: 'Brief & Recherche', desc: 'Analyse de vos utilisateurs, de vos concurrents et de vos objectifs.' },
      { step: '02', title: 'Wireframes', desc: 'Structure des pages et parcours utilisateur en basse fidélité.' },
      { step: '03', title: 'Design haute fidélité', desc: 'Maquettes finales avec votre charte graphique.' },
      { step: '04', title: 'Prototype & Validation', desc: 'Prototype interactif et ajustements selon vos retours.' },
    ],
    deliverables: ['Fichiers Figma', 'Design system', 'Prototype interactif', 'Guide d\'utilisation'],
    cta: 'Démarrer mon design',
  },
  {
    id: 'developpement',
    title: 'Développement Web',
    tag: 'Dev',
    tagline: 'Des sites et applications performants, maintenables et évolutifs.',
    description:
      'On développe vos projets web sur mesure avec les technologies modernes : React, Vite, Firebase. Code propre, optimisé SEO, rapide et prêt à évoluer avec votre activité.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop',
    color: '#9D94F2',
    features: [
      { title: 'Sites vitrine', desc: 'Sites modernes, rapides et optimisés pour le référencement naturel.' },
      { title: 'E-commerce', desc: 'Boutiques en ligne avec gestion des stocks, paiement mobile et commandes.' },
      { title: 'Dashboards & Applications', desc: 'Interfaces d\'administration, tableaux de bord et apps métier sur mesure.' },
      { title: 'Intégrations API', desc: 'Connexion à vos outils existants : CRM, ERP, paiement, réseaux sociaux.' },
    ],
    process: [
      { step: '01', title: 'Architecture technique', desc: 'Choix des technologies et structure du projet.' },
      { step: '02', title: 'Développement frontend', desc: 'Intégration des maquettes en React avec animations.' },
      { step: '03', title: 'Backend & Base de données', desc: 'API, authentification et stockage des données.' },
      { step: '04', title: 'Tests & Déploiement', desc: 'Tests sur tous les appareils, optimisation et mise en ligne.' },
    ],
    deliverables: ['Code source complet', 'Déploiement inclus', 'Documentation technique', 'Formation CMS'],
    cta: 'Démarrer mon projet',
  },
  {
    id: 'seo',
    title: 'Référencement SEO',
    tag: 'SEO',
    tagline: 'Apparaissez en premier sur Google et attirez plus de clients.',
    description:
      'On optimise votre présence sur les moteurs de recherche pour que vos clients potentiels vous trouvent avant vos concurrents. Audit, stratégie de contenu, optimisation technique — on couvre tout.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&auto=format&fit=crop',
    color: '#6B5FD8',
    features: [
      { title: 'Audit SEO complet', desc: 'Analyse approfondie de votre site : technique, contenu, backlinks.' },
      { title: 'Optimisation on-page', desc: 'Balises, structure, mots-clés et vitesse de chargement.' },
      { title: 'Stratégie de contenu', desc: 'Plan éditorial orienté SEO pour attirer du trafic qualifié.' },
      { title: 'Suivi & Reporting', desc: 'Rapports mensuels avec l\'évolution de vos positions et du trafic.' },
    ],
    process: [
      { step: '01', title: 'Audit initial', desc: 'État des lieux complet de votre référencement actuel.' },
      { step: '02', title: 'Stratégie mots-clés', desc: 'Identification des requêtes à fort potentiel pour votre secteur.' },
      { step: '03', title: 'Optimisations', desc: 'Corrections techniques et optimisation du contenu existant.' },
      { step: '04', title: 'Suivi mensuel', desc: 'Monitoring des positions et ajustements de la stratégie.' },
    ],
    deliverables: ['Rapport d\'audit', 'Plan de mots-clés', 'Optimisations on-page', 'Rapports mensuels'],
    cta: 'Améliorer mon SEO',
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    tag: 'Marketing',
    tagline: 'Construisez votre présence et faites rayonner votre marque.',
    description:
      'Stratégie digitale complète : création de contenu, gestion des réseaux sociaux, branding et campagnes. On vous aide à bâtir une présence cohérente et impactante sur le digital.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&auto=format&fit=crop',
    color: '#AFA6E7',
    features: [
      { title: 'Stratégie de marque', desc: 'Positionnement, identité visuelle et ligne éditoriale cohérente.' },
      { title: 'Gestion réseaux sociaux', desc: 'Création et publication de contenus sur Instagram, Facebook, TikTok, LinkedIn.' },
      { title: 'Création de contenu', desc: 'Visuels, vidéos, textes — des contenus qui engagent votre audience.' },
      { title: 'Publicité digitale', desc: 'Campagnes ciblées sur Meta Ads et Google Ads pour maximiser votre ROI.' },
    ],
    process: [
      { step: '01', title: 'Audit & Positionnement', desc: 'Analyse de votre présence actuelle et définition de votre identité.' },
      { step: '02', title: 'Stratégie & Planning', desc: 'Calendrier éditorial et plan de campagne sur mesure.' },
      { step: '03', title: 'Création & Publication', desc: 'Production des contenus et gestion quotidienne des publications.' },
      { step: '04', title: 'Analyse & Optimisation', desc: 'Suivi des performances et ajustements mensuels.' },
    ],
    deliverables: ['Stratégie de contenu', 'Calendrier éditorial', 'Visuels & Copies', 'Rapports de performance'],
    cta: 'Booster ma présence',
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);
