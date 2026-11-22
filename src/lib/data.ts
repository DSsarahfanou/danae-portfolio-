export type ProjectCategory =
  | "Plateforme interne"
  | "E-learning"
  | "E-commerce"
  | "Marketplace"
  | "Site vitrine";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: ProjectCategory;
  client: string;
  role: string;
  stack: string[];
  summary: string;
  description: string[];
  highlights: string[];
  cover: string;
  coverAlt: string;
  gallery: { src: string; alt: string }[];
  links: { label: string; href: string }[];
  featured: boolean;
};

export const site = {
  name: "Sarah Danaé FANOU",
  shortName: "Sarah Danaé",
  initials: "SD",
  role: "Développeuse Web & Designer Graphique",
  tagline: "Créer · Développer · Inspirer",
  location: "Abomey-Calavi, Bénin",
  email: "fanoudanae@gmail.com",
  phones: ["+229 01 40 65 40 02", "+229 01 99 00 18 03"],
  whatsapp: "2290140654002",
  github: "https://github.com/DSsarahfanou",
  url: "https://danae-portfolio.vercel.app",
  availability: "Disponible pour des missions freelance, des stages et des collaborations",
  description:
    "Portfolio de Sarah Danaé FANOU, développeuse web et designer graphique basée à Abomey-Calavi (Bénin). Applications Laravel & Next.js, identités visuelles, réseaux informatiques et créations Danae's Creations.",
};

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "Créations", href: "/creations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "5", label: "projets livrés" },
  { value: "4", label: "stages en entreprise" },
  { value: "3", label: "années de pratique" },
  { value: "2", label: "univers : tech & commerce" },
];

export const services = [
  {
    icon: "code",
    title: "Développement web",
    description:
      "Des applications robustes et sur mesure : Laravel côté serveur, Next.js et React côté interface, bases de données pensées pour durer.",
    points: ["Laravel & PHP", "Next.js & React", "API & bases de données"],
  },
  {
    icon: "palette",
    title: "Design graphique",
    description:
      "Identités visuelles, supports de communication et interfaces : je transforme une idée en un univers cohérent, lisible et mémorable.",
    points: ["Identité visuelle", "UI / UX", "Supports print & réseaux"],
  },
  {
    icon: "network",
    title: "Réseaux & télécoms",
    description:
      "Administration de réseaux, maintenance informatique et déploiement fibre optique FTTH : la technique derrière le digital.",
    points: ["Administration réseau", "FTTH & maintenance", "Support utilisateurs"],
  },
  {
    icon: "store",
    title: "Commerce & créations",
    description:
      "À travers Danae's Creations, je vends épices, tissus et douceurs. Une autre façon de comprendre les besoins réels des clients.",
    points: ["Danae's Creations", "Vente en ligne", "Relation client"],
  },
];

export const projects: Project[] = [
  {
    slug: "jaspe-library",
    title: "Jaspe Library",
    subtitle: "La mémoire des stages, enfin accessible",
    year: "2026",
    category: "Plateforme interne",
    client: "Jaspe Technologies",
    role: "Développement full-stack",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
    summary:
      "Une bibliothèque interne où les stagiaires déposent leurs rapports et mémoires, retirent leurs attestations et consultent les travaux de leurs prédécesseurs.",
    description: [
      "Jaspe Library est née d'un constat simple : chaque année, les stagiaires produisent des rapports, mémoires et documents de qualité… qui finissent perdus dans des dossiers ou des conversations WhatsApp. L'entreprise avait besoin d'un endroit unique pour conserver, valoriser et transmettre ce savoir.",
      "J'ai conçu et développé la plateforme de bout en bout avec Laravel : gestion des comptes stagiaires et administrateurs, dépôt sécurisé des documents, validation par l'équipe, génération des attestations et consultation des archives par les nouveaux arrivants.",
      "Le projet est aujourd'hui un outil interne : il ne remplace pas le travail administratif, il le rend plus fluide et surtout plus juste envers les stagiaires qui laissent une trace.",
    ],
    highlights: [
      "Dépôt et archivage des rapports, mémoires et documents de stage",
      "Validation des travaux par les administrateurs",
      "Génération et retrait des attestations de stage",
      "Consultation des réalisations des anciens stagiaires",
      "Gestion des rôles : stagiaire, encadreur, administrateur",
    ],
    cover: "/images/projects/jaspe-library.png",
    coverAlt: "Page d'accueil de Jaspe Library, plateforme de projets étudiants",
    gallery: [
      {
        src: "/images/projects/jaspe-library.png",
        alt: "Interface d'accueil de Jaspe Library",
      },
    ],
    links: [],
    featured: true,
  },
  {
    slug: "jaspe-academy",
    title: "Jaspe Academy",
    subtitle: "Apprendre à son rythme, sans perdre le fil",
    year: "2025",
    category: "E-learning",
    client: "Jaspe Technologies",
    role: "Développement full-stack — binôme avec Danièle CAPO",
    stack: ["Laravel", "Next.js", "React", "MySQL", "Tailwind CSS"],
    summary:
      "Une plateforme d'apprentissage en ligne complète : catalogue de cours, espace apprenant, tableau de bord animateur et boutique de formations.",
    description: [
      "Réalisée dans le cadre de ma soutenance pour Jaspe Technologies, Jaspe Academy est une plateforme d'e-learning pensée pour rendre la formation professionnelle plus accessible et plus vivante.",
      "Le back-office Laravel gère les cours, les modules, les inscriptions et les paiements ; l'interface Next.js offre une expérience rapide et fluide aux apprenants comme aux animateurs. Chaque rôle dispose de son propre espace : catalogue et progression pour l'apprenant, suivi des cohortes et animation des sessions pour le formateur.",
      "J'ai travaillé en binôme avec Danièle CAPO, de la modélisation des données jusqu'à l'intégration des interfaces. Ce projet m'a appris à coordonner deux métiers — le back et le front — autour d'une même expérience utilisateur.",
    ],
    highlights: [
      "Catalogue de formations et parcours par modules",
      "Espace apprenant : cours, progression et boutique",
      "Tableau de bord animateur : suivi et animation des sessions",
      "Authentification et gestion des rôles",
      "Architecture Laravel API + Next.js",
    ],
    cover: "/images/projects/jaspe-academy-accueil.png",
    coverAlt: "Page d'accueil de Jaspe Academy, plateforme d'e-learning",
    gallery: [
      {
        src: "/images/projects/jaspe-academy-accueil.png",
        alt: "Accueil de Jaspe Academy",
      },
      {
        src: "/images/projects/jaspe-academy-dashboard.png",
        alt: "Tableau de bord animateur de Jaspe Academy",
      },
      {
        src: "/images/projects/jaspe-academy-apprenant.png",
        alt: "Espace apprenant de Jaspe Academy",
      },
      {
        src: "/images/projects/jaspe-academy-shop.png",
        alt: "Boutique de formations de Jaspe Academy",
      },
      {
        src: "/images/projects/jaspe-academy-meeting.png",
        alt: "Sessions et rendez-vous de Jaspe Academy",
      },
    ],
    links: [
      {
        label: "Voir le code sur GitHub",
        href: "https://github.com/DSsarahfanou/jaspeAcademy",
      },
    ],
    featured: true,
  },
  {
    slug: "ewe-medji",
    title: "EWE MEDJI",
    subtitle: "Le bien-être naturel, à portée de clic",
    year: "2025 — 2026",
    category: "E-commerce",
    client: "EWE MEDJI — naturopathie",
    role: "Développement full-stack",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript"],
    summary:
      "La boutique en ligne des produits de naturopathie EWE MEDJI : catalogue, panier, commandes et présentation des formations du cabinet.",
    description: [
      "EWE MEDJI est un cabinet de naturopathie et de médecine traditionnelle complémentaire. Son promoteur souhaitait sortir d'une présence uniquement physique pour vendre ses produits naturels en ligne, sans perdre l'âme de la marque.",
      "J'ai développé la plateforme avec Laravel : catalogue de produits classés par besoins, fiches détaillées, panier et parcours de commande, mais aussi une section dédiée aux formations et aux services du cabinet.",
      "Le travail ne s'est pas limité au code : il a fallu comprendre les produits, hiérarchiser l'information et rassurer l'acheteur. C'est là que mon expérience de commerçante a fait la différence.",
    ],
    highlights: [
      "Catalogue de produits naturels et fiches détaillées",
      "Panier et parcours de commande",
      "Présentation des formations et services du cabinet",
      "Interface responsive et identité verte cohérente",
      "Gestion de contenu simple pour le promoteur",
    ],
    cover: "/images/projects/ewemedji-accueil.png",
    coverAlt: "Page d'accueil du site EWE MEDJI",
    gallery: [
      {
        src: "/images/projects/ewemedji-accueil.png",
        alt: "Accueil du site EWE MEDJI",
      },
      {
        src: "/images/projects/ewemedji-produit.png",
        alt: "Page produit du site EWE MEDJI",
      },
    ],
    links: [
      {
        label: "Voir le code sur GitHub",
        href: "https://github.com/DSsarahfanou/Vital-Vegetal-EWE_MEDJI",
      },
    ],
    featured: true,
  },
  {
    slug: "azotche",
    title: "AZOTCHE",
    subtitle: "Les artisans béninois ont leur vitrine",
    year: "2024",
    category: "Marketplace",
    client: "KADOSH SARL",
    role: "Développement — binôme avec ADIFON Obed Sallaï",
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    summary:
      "Une plateforme multi-vendeurs qui permet aux artisans du Bénin de s'inscrire, de présenter leurs articles et de les vendre en ligne.",
    description: [
      "Réalisée pendant mon stage de deuxième année chez KADOSH SARL, AZOTCHE répond à un problème très concret : beaucoup d'artisans béninois fabriquent des pièces magnifiques, mais n'ont aucun moyen simple de les montrer au-delà de leur quartier.",
      "La plateforme permet à chaque artisan de créer son espace, de publier ses articles, de gérer son profil et ses commandes. Les clients parcourent les catégories, découvrent les créateurs et commandent directement.",
      "J'ai participé au développement aux côtés de mon binôme ADIFON Obed Sallaï : modélisation de la base, développement des fonctionnalités vendeur et acheteur, et intégration des interfaces.",
    ],
    highlights: [
      "Inscription et espace personnel pour chaque artisan",
      "Publication et gestion des articles",
      "Navigation par catégories et recherche",
      "Parcours d'achat et suivi des commandes",
      "Interface pensée pour des utilisateurs peu technophiles",
    ],
    cover: "/images/projects/azotche-artisan.png",
    coverAlt: "Artisane béninoise façonnant une poterie",
    gallery: [
      {
        src: "/images/projects/azotche-artisan.png",
        alt: "Artisanat béninois mis en valeur sur AZOTCHE",
      },
      {
        src: "/images/projects/azotche-logo.png",
        alt: "Logo de la plateforme AZOTCHE",
      },
    ],
    links: [
      {
        label: "Voir le code sur GitHub",
        href: "https://github.com/obedsallai/artisan_project_stage",
      },
    ],
    featured: false,
  },
  {
    slug: "benin-food",
    title: "Bénin Food",
    subtitle: "Mon tout premier site, et déjà une histoire de goût",
    year: "2023",
    category: "Site vitrine",
    client: "Projet académique",
    role: "Design & intégration",
    stack: ["HTML", "CSS", "JavaScript"],
    summary:
      "Un site vitrine dédié à la cuisine béninoise : plats traditionnels, produits locaux et découverte du patrimoine culinaire.",
    description: [
      "Bénin Food est mon premier projet web, réalisé en première année avec HTML, CSS et JavaScript. Pas de framework, pas de raccourci : juste les fondamentaux, page après page.",
      "Le site présente les plats emblématiques du Bénin — pâte, gari, akassa, sauces — avec des fiches illustrées et une navigation simple. C'est aussi le projet où j'ai découvert que le design et le code pouvaient raconter une culture.",
      "Je le garde volontairement dans mon portfolio : il montre d'où je viens, et à quel point le chemin parcouru est réel.",
    ],
    highlights: [
      "Site multi-pages en HTML / CSS / JavaScript natif",
      "Fiches illustrées de plats béninois",
      "Navigation et mise en page responsives",
      "Premier travail complet : contenu, design, intégration",
    ],
    cover: "/images/projects/benin-food.jpg",
    coverAlt: "Plat béninois traditionnel",
    gallery: [
      {
        src: "/images/projects/benin-food.jpg",
        alt: "Plat traditionnel béninois présenté sur Bénin Food",
      },
    ],
    links: [
      {
        label: "Voir le code sur GitHub",
        href: "https://github.com/DSsarahfanou/DS_sarah_Benin_Food",
      },
    ],
    featured: false,
  },
];

export const skillGroups = [
  {
    title: "Développement web",
    icon: "code",
    skills: ["Next.js", "React", "Laravel", "PHP", "JavaScript", "HTML / CSS", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Design & création",
    icon: "palette",
    skills: ["Figma", "Canva", "UI / UX", "Identité visuelle", "Supports de communication", "Direction artistique"],
  },
  {
    title: "Réseaux & systèmes",
    icon: "network",
    skills: ["Administration réseau", "Fibre optique FTTH", "Maintenance informatique", "Support utilisateurs", "Configuration routeurs"],
  },
  {
    title: "Gestion & humain",
    icon: "spark",
    skills: ["Gestion de projet", "Travail en équipe", "Relation client", "Adaptabilité", "Créativité", "Sens du service"],
  },
];

export const timeline = [
  {
    period: "Oct. 2025 — Janv. 2026",
    title: "Stage professionnel — Réseaux & Télécommunications",
    company: "Jaspe Technologies · Calavi, Bénin",
    description:
      "Déploiement fibre optique FTTH pour les entreprises HAMER et AFRO, réalisation de graphismes et conception de la plateforme e-commerce ewemedji.com.",
    tags: ["FTTH", "Graphisme", "Laravel"],
  },
  {
    period: "Avril — Juillet 2025",
    title: "Stage académique — Réseaux & Télécommunications",
    company: "Jaspe Technologies · Calavi, Bénin",
    description:
      "Travaux terrain sur un projet FTTH, maintenance informatique et conception d'une plateforme e-learning avec Laravel et Next.js.",
    tags: ["FTTH", "Maintenance", "Next.js"],
  },
  {
    period: "Mai — Juillet 2024",
    title: "Stage académique — Programmation",
    company: "KADOSH GROUP SARL · Agla-Akplomey, Bénin",
    description:
      "Intégration de pages Next.js à partir de maquettes Figma, conception d'une plateforme de vente en ligne avec Laravel et déploiement sur Vercel.",
    tags: ["Next.js", "Figma", "Vercel"],
  },
  {
    period: "Juin — Août 2023",
    title: "Stage académique — Développement web",
    company: "KADOSH GROUP SARL · Agla-Akplomey, Bénin",
    description:
      "Initiation au PHP et conception de pages statiques en HTML/CSS. Les premiers pas qui ont confirmé ma vocation.",
    tags: ["PHP", "HTML", "CSS"],
  },
];

export const education = [
  {
    period: "2022 — 2025",
    title: "Licence Professionnelle en Informatique de Gestion",
    subtitle: "Spécialité : Administration des Réseaux Informatiques",
    school: "ENEAM — Université d'Abomey-Calavi",
  },
  {
    period: "2022",
    title: "Baccalauréat Scientifique — Série C",
    subtitle: "Série mathématiques et sciences physiques",
    school: "Complexe Scolaire LICA, Abomey-Calavi",
  },
];

export const languages = [
  { name: "Français", level: "Courant", value: 100 },
  { name: "Anglais", level: "Intermédiaire", value: 65 },
  { name: "Fon", level: "Courant", value: 100 },
  { name: "Goun", level: "Courant", value: 100 },
];

export const creations = [
  {
    name: "Épices & aromates",
    category: "Épicerie",
    description:
      "Mélanges d'épices, piment, poivre et aromates sélectionnés pour révéler les plats du quotidien comme les grandes occasions.",
    image: "/images/creations/epices.jpg",
    tag: "Le goût",
  },
  {
    name: "Piment épicé",
    category: "Épicerie",
    description:
      "Un piment franc et parfumé, préparé avec soin pour ceux qui aiment les saveurs qui réveillent.",
    image: "/images/creations/piment.jpg",
    tag: "Le goût",
  },
  {
    name: "Poisson fumé",
    category: "Épicerie",
    description:
      "Du poisson séché et fumé de qualité, indispensable pour les sauces et les plats traditionnels.",
    image: "/images/creations/poisson-sec.jpg",
    tag: "Le goût",
  },
  {
    name: "Beignets au chocolat",
    category: "Douceurs",
    description:
      "Des beignets moelleux, généreusement fourrés au chocolat et saupoudrés de sucre. La signature gourmande de Danae's Creations.",
    image: "/images/creations/beignets-chocolat.jpg",
    tag: "La douceur",
  },
  {
    name: "Beignets moelleux",
    category: "Douceurs",
    description:
      "La recette classique, dorée à point : parfaite pour le petit-déjeuner, le goûter ou les commandes groupées.",
    image: "/images/creations/beignets-moelleux.jpg",
    tag: "La douceur",
  },
  {
    name: "Œufs panés",
    category: "Douceurs",
    description:
      "Des œufs enrobés d'une pâte croustillante, dorés à la perfection. Un plaisir simple qui plaît à tous les âges.",
    image: "/images/creations/oeufs-panes.jpg",
    tag: "La douceur",
  },
  {
    name: "Pagnes & tissus",
    category: "Textile",
    description:
      "Des pagnes et tissus aux motifs soignés, choisis pour habiller les grandes occasions comme le quotidien.",
    image: "/images/creations/tissu-pagne.jpg",
    tag: "Le style",
  },
  {
    name: "Accessoires tech",
    category: "Accessoires",
    description:
      "Batteries externes, écouteurs et accessoires du quotidien : la tech utile, à prix accessible.",
    image: "/images/creations/accessoires-tech.jpg",
    tag: "L'utile",
  },
];

export const values = [
  {
    title: "Écouter avant de coder",
    description:
      "Un beau site qui ne répond pas au besoin est un échec. Je commence toujours par comprendre l'usage, le client et le contexte.",
  },
  {
    title: "Faire simple, mais soigné",
    description:
      "La clarté avant les effets. Chaque détail — un espacement, une couleur, un mot — doit servir la personne qui utilise le produit.",
  },
  {
    title: "Livrer et transmettre",
    description:
      "Je documente, j'explique et je forme. Un projet réussi est un projet que le client peut faire vivre sans moi.",
  },
];
