export interface User {
  name: string;
  secret: string;
  actions: string[];
}
export const users: { [key: string]: User } = {
  'test': {
    name: 'Utilisateur test',
    secret: 'Je possède 2 chats',
    actions: [
      'Dit qu’il adore les animaux mais qu’il est particulièrement attaché aux chats.',
      'Mon premier chat s\'appelle Rivoli.',
      'Mon deuxième chat s\'appelle Ummus.',
      'Explique en détail pourquoi les chats sont meilleurs que les chiens.',
    ],
  },
  '6d2de273-9901-4fb7-93c6-baf943890a3c': {
    name: 'Diego',
    secret: 'J’ai été un DJ très connu sur le plan international',
    actions: [
      'Demande discrètement si quelqu’un a entendu parler de l’évolution de la musique électro.',
      'S’émerveille devant une playlist Spotify en disant que ça lui rappelle de bons souvenirs.',
      'Explique que le rythme d’une chanson est parfait pour “les clubs à Miami”.',
      'Affirme qu’il a été invité à mixer dans des festivals très connus.',
    ],
  },
  '27432a67-47f7-4e84-8ba5-b61704501e06': {
    name: 'Pia',
    secret: 'Je suis un(e) ancien(ne) espion(ne)',
    actions: [
      'Demande innocemment si la maison a des caméras de sécurité.',
      'Pose une question étrange sur une porte ou une fenêtre (“elle est bien sécurisée ?”).',
      'Explique qu’il n’aime pas trop être pris en photo ou filmé.',
      'Évoque en riant qu’il a été “formé à se battre” dans une ancienne vie.',
    ],
  },
  '4604a840-7c4e-43be-acce-72e3a7edd72c': {
    name: 'Johan',
    secret: 'Je suis en couple avec Paol',
    actions: [
      'Mentionne qu’il apprécie vraiment passer du temps avec Paol.',
      'Complimente Paol sur une action banale (comme couper le fromage).',
      'Propose une activité à faire tous les deux devant tout le monde (ciné, randonnée).',
      'Glisse subtilement une blague sur leur futur mariage.',
    ],
  },
  'd58cc578-2597-4724-911a-68b25ae6000e': {
    name: 'Tatiana',
    secret: 'Je suis un acteur ou actrice célèbre dans un autre pays',
    actions: [
      'Fait une remarque sur le fait qu’elle a souvent été filmée sous de meilleurs angles.',
      'Complimente quelqu’un en disant qu’il a “le charisme d’une star de cinéma”.',
      'Corrige quelqu’un sur une référence culturelle en disant qu’il connaît “les coulisses de l’industrie”.',
      'Raconte une anecdote “confidentielle” sur un tournage en disant qu’il ne faut pas le répéter.',
    ],
  },
  '384a68fc-07b4-4988-af2b-1cfb17f5f39e': {
    name: 'Camille',
    secret: 'J’ai déjà monté une startup',
    actions: [
      'Mentionne l’importance de “penser à l’échelle mondiale”.',
      'Complimente quelqu’un sur une idée “vraiment innovante”.',
      'Évoque les challenges de “gérer des équipes en pleine croissance”.',
      'Raconte qu’il connaît un investisseur célèbre et partage une “leçon clé” qu’il a apprise.',
    ],
  },
  'eb0a6060-d6c7-4609-ba80-ea1953ca33f1': {
    name: 'Paol',
    secret: 'Je suis en couple avec Johan',
    actions: [
      'Regarde souvent Johan avec un petit sourire complice.',
      'Lui demande s’il a passé une bonne journée. S’il répond oui, lui demande pourquoi.',
      'Réagit fortement si Johan s’approche de quelqu’un d’autre, même en plaisantant.',
      'Mentionne qu’il aimerait bien partir en week-end romantique avec Johan.',
    ],
  },
  'ddabe6e8-9feb-4209-bf68-b50a1572df1a': {
    name: 'Léa',
    secret: 'J’ai failli être champion(ne) olympique',
    actions: [
      'Mentionne que le sport enseigne beaucoup sur la discipline.',
      'Fait un commentaire technique sur une posture ou un geste de quelqu’un.',
      'Explique qu’il adore regarder les JO, surtout une discipline particulière.',
      'Raconte comment une blessure ou un événement lui a fait rater une compétition clé.',
    ],
  },
  '012f9f7a-ff8e-452f-ab80-e3bad782d075': {
    name: 'Nicolas',
    secret: 'J’ai été SDF pendant plus de 3 ans',
    actions: [
      'Mentionne qu’il est important de partager ce qu’on a.',
      'Demande si quelqu’un a un vêtement chaud à prêter pour “juste essayer”.',
      'Parle avec nostalgie d’un parc ou d’un banc qui avait une vue incroyable.',
      'Raconte une anecdote émouvante sur une personne qui l’a aidé un jour.',
    ],
  },
  '575502e0-32ca-4180-9c42-dd94827f033f': {
    name: 'Agnès',
    secret: 'Je parle 10 langues différentes',
    actions: [
      'Mentionne que certaines langues expriment mieux les émotions.',
      'Corrige quelqu’un sur un mot en disant “dans cette langue, c’est pas tout à fait ça”.',
      'Compare une expression française avec une variante dans une autre langue.',
      'Récite un proverbe célèbre dans une langue rare et en explique le sens.',
    ],
  },
};