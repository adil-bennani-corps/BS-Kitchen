export const companyInfo = {
  name: 'B&S Kitchen',
  legalName: 'B&S Kitchen SRL',
  vat: 'BE 1000.475.420',
  address: {
    street: 'Stenebrugstraat 33',
    postalCode: '1741',
    city: 'Ternat',
    country: 'Belgique',
  },
  contact: {
    phone: '+32 2 582 12 34',
    email: 'info@bskitchen.be',
    whatsapp: 'https://api.whatsapp.com/send?phone=3225821234',
  },
  social: {
    facebook: '',
    instagram: '',
  },
  hours: {
    weekdays: 'Lundi - Vendredi : 8h00 - 17h00',
    saturday: 'Samedi : Sur rendez-vous',
    sunday: 'Dimanche : Fermé',
  },
  experience: '20',
  partners: ['Ixina', 'VDBK', 'Rodriguez Concept'],
  serviceArea: [
    'Bruxelles',
    'Brabant flamand',
    'Brabant wallon',
    'Flandre',
    'Belgique',
  ],
  baseUrl: 'https://www.bskitchen.be',
};

export const services = [
  {
    id: 'installation-cuisine',
    title: 'Installation de cuisines',
    slug: 'installation-cuisine',
    shortDescription:
      'Installation professionnelle de cuisines pour particuliers et enseignes partenaires (Ixina, VDBK, Rodriguez Concept).',
    description:
      'Nous assurons l\'installation complète de votre cuisine avec précision et soin. Que vous soyez un particulier ou une enseigne partenaire, nous garantissons une pose impeccable de tous les éléments : meubles, plans de travail, électroménager, robinetterie et finitions. Notre expérience de plus de 20 ans nous permet d\'intervenir sur tous types de cuisines et de matériaux.',
    features: [
      'Pose de meubles hauts et bas',
      'Installation de plans de travail (stratifié, quartz, granit, bois)',
      'Raccordement électroménager',
      'Installation robinetterie et éviers',
      'Pose de crédences et finitions',
      'Ajustement et réglage des portes et tiroirs',
    ],
    icon: 'kitchen',
  },
  {
    id: 'renovation-interieur',
    title: 'Rénovation d\'intérieur',
    slug: 'renovation-interieur',
    shortDescription:
      'Rénovation complète de cuisines, dressings, buanderies et placards sur mesure.',
    description:
      'Donnez une nouvelle vie à vos espaces intérieurs. Nous intervenons pour la rénovation complète de cuisines, l\'aménagement de dressings, la création de buanderies fonctionnelles et l\'installation de placards sur mesure. Chaque projet est étudié pour optimiser l\'espace et répondre à vos besoins quotidiens.',
    features: [
      'Rénovation complète de cuisines existantes',
      'Aménagement de dressings sur mesure',
      'Création de buanderies fonctionnelles',
      'Installation de placards et rangements',
      'Finitions et habillages muraux',
      'Optimisation des espaces',
    ],
    icon: 'home',
  },
  {
    id: 'reparation-sav',
    title: 'Réparation & SAV',
    slug: 'reparation-sav',
    shortDescription:
      'Service après-vente, ajustements, réparations et remplacement d\'éléments de cuisine.',
    description:
      'Votre cuisine nécessite un ajustement ou une réparation ? Nous intervenons rapidement pour tous types de dépannages : remplacement de charnières, ajustement de portes et tiroirs, réparation de plans de travail, pose de nouvelles plinthes. Notre service après-vente assure la longévité de votre installation.',
    features: [
      'Ajustement de portes et tiroirs',
      'Remplacement de charnières et ferrures',
      'Réparation de plans de travail',
      'Pose et remplacement de plinthes',
      'Changement de poignées',
      'Intervention rapide',
    ],
    icon: 'wrench',
  },
  {
    id: 'menuiserie-mesure',
    title: 'Menuiserie sur mesure',
    slug: 'menuiserie-mesure',
    shortDescription:
      'Petits travaux de menuiserie intérieure et aménagements personnalisés.',
    description:
      'Fort de notre expertise en menuiserie, nous réalisons des travaux sur mesure pour vos aménagements intérieurs : bibliothèques, étagères, habillages, petites structures en bois. Chaque réalisation est adaptée à vos dimensions et à votre style.',
    features: [
      'Bibliothèques et étagères sur mesure',
      'Habillages muraux en bois',
      'Petites structures intérieures',
      'Travaux de finition',
      'Conseils techniques',
      'Matériaux de qualité',
    ],
    icon: 'hammer',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Cuisine moderne en L - Bruxelles',
    location: 'Bruxelles',
    description:
      'Installation complète d\'une cuisine en L avec plan de travail en quartz blanc et façades en stratifié chêne clair. Intégration d\'électroménager haut de gamme et crédence en carrelage métro.',
    materials: ['Quartz blanc', 'Stratifié chêne clair', 'Carrelage métro'],
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80',
    category: 'installation-cuisine',
  },
  {
    id: 2,
    title: 'Rénovation cuisine avec îlot - Ternat',
    location: 'Ternat',
    description:
      'Rénovation complète d\'une cuisine avec création d\'un îlot central. Façades anthracite mat, plan de travail en granit noir et éclairage LED intégré.',
    materials: ['Granit noir', 'Façades anthracite mat', 'LED intégré'],
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
    category: 'renovation-interieur',
  },
  {
    id: 3,
    title: 'Cuisine ouverte contemporaine - Waterloo',
    location: 'Waterloo',
    description:
      'Installation d\'une cuisine ouverte sur le séjour avec façades blanches laquées, plan de travail en bois massif et verrière intérieure.',
    materials: ['Bois massif', 'Laque blanche', 'Verrière acier'],
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    category: 'installation-cuisine',
  },
  {
    id: 4,
    title: 'Dressing sur mesure - Zaventem',
    location: 'Zaventem',
    description:
      'Aménagement d\'un dressing sur mesure avec portes coulissantes, étagères modulables et tiroirs intégrés. Finition chêne naturel.',
    materials: ['Chêne naturel', 'Portes coulissantes', 'Tiroirs soft-close'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'renovation-interieur',
  },
  {
    id: 5,
    title: 'Cuisine classique rénovée - Louvain',
    location: 'Louvain',
    description:
      'Rénovation d\'une cuisine classique avec conservation de la structure existante. Remplacement des façades, nouveau plan de travail en stratifié effet marbre et nouvelle robinetterie.',
    materials: ['Stratifié effet marbre', 'Façades bois peint', 'Robinetterie chromée'],
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    category: 'reparation-sav',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sophie Dubois',
    location: 'Bruxelles',
    rating: 5,
    text: 'Installation impeccable de notre cuisine Ixina. L\'équipe est arrivée à l\'heure, a travaillé proprement et a terminé dans les délais annoncés. Les finitions sont parfaites et tous les ajustements ont été faits avec soin. Je recommande vivement !',
    date: '2024-10',
  },
  {
    id: 2,
    name: 'Marc Janssens',
    location: 'Ternat',
    rating: 5,
    text: 'Nous avons fait appel à B&S Kitchen pour la rénovation complète de notre cuisine. Leur expertise et leur professionnalisme nous ont convaincus. Le résultat dépasse nos attentes. Merci pour votre travail de qualité !',
    date: '2024-09',
  },
  {
    id: 3,
    name: 'Caroline Vermeulen',
    location: 'Waterloo',
    rating: 5,
    text: 'Service après-vente réactif et efficace. Une porte de placard s\'était affaissée après quelques mois, ils sont intervenus rapidement pour l\'ajuster. C\'est rassurant de savoir qu\'on peut compter sur eux même après l\'installation.',
    date: '2024-11',
  },
];

export const faq = [
  {
    id: 1,
    question: 'Quels sont les délais pour l\'installation d\'une cuisine ?',
    answer:
      'Les délais d\'installation varient selon la complexité du projet. Pour une cuisine standard, comptez 2 à 3 jours. Pour des projets plus complexes avec îlot, électroménager intégré et finitions spécifiques, prévoyez 4 à 5 jours. Nous vous communiquons un planning précis après la prise de mesures.',
  },
  {
    id: 2,
    question: 'Dois-je préparer quelque chose avant l\'installation ?',
    answer:
      'Oui, nous vous recommandons de vider complètement la pièce, de protéger vos sols si nécessaire, et de vous assurer que les raccordements (eau, électricité, gaz) sont conformes et accessibles. Nous vous fournirons une liste détaillée lors de la prise de rendez-vous.',
  },
  {
    id: 3,
    question: 'Proposez-vous une garantie sur vos installations ?',
    answer:
      'Nous garantissons la qualité de notre travail d\'installation. En cas de problème lié à la pose (ajustement, fixation), nous intervenons gratuitement. La garantie des matériaux et équipements dépend des fabricants. Nous assurons également un service après-vente pour tous types d\'ajustements.',
  },
  {
    id: 4,
    question: 'Intervenez-vous pour toutes les marques de cuisines ?',
    answer:
      'Oui, nous installons des cuisines de toutes marques et enseignes. Nous travaillons régulièrement avec Ixina, VDBK et Rodriguez Concept, mais nous intervenons également pour d\'autres enseignes ou pour des cuisines achetées en ligne. Notre expertise nous permet de nous adapter à tous les systèmes.',
  },
  {
    id: 5,
    question: 'Quels types de plans de travail pouvez-vous installer ?',
    answer:
      'Nous installons tous types de plans de travail : stratifié, quartz, granit, céramique, bois massif, inox. Chaque matériau nécessite des techniques de pose spécifiques que nous maîtrisons. Nous vous conseillons également sur le choix le plus adapté à votre usage et votre budget.',
  },
];
