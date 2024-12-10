export interface User {
  name: string;
  secret: string;
  actions: string[];
}

export const users: { [key: string]: User } = {
    'test': {
      name: 'Utilisateur test',
      secret: 'Je posède 2 chats',
      actions: [
        'Mon premier chat s\'appelle Rivoli',
        'Mon deuxième chat s\'appelle Ummus',
      ]
    },
    '6d2de273-9901-4fb7-93c6-baf943890a3c': {
      name: 'Diego',
      secret: 'J’ai été un DJ très connu sur le plan international',
      actions: [
        'S’émerveille devant une playlist Spotify en disant que ça lui rappelle de bons souvenirs.',
        'Explique que le rythme d’une chanson est parfait pour “les clubs à Miami”.',
        'Insiste pour mixer un son “juste pour montrer quelque chose de basique”.',
      ]
    },
    '27432a67-47f7-4e84-8ba5-b61704501e06': {
      name: 'Pia',
      secret: 'Je suis un(e) ancien(ne) espion(ne)',
      actions: [
        'Pose une question étrange sur une porte ou une fenêtre (“elle est bien sécurisée ?”).',
        'Explique qu’il n’aime pas trop être pris en photo ou filmé.',
        'Discrètement, échange son verre avec celui de quelqu’un d’autre en disant que “c’est par précaution”.',
      ]
    },
    '4604a840-7c4e-43be-acce-72e3a7edd72c': {
      name: 'Johan',
      secret: 'Je suis en couple avec Paol',
      actions: [
        'Complimente Paol sur une action banale (comme couper le fromage).',
        'Propose une activité à faire tous les deux devant tout le monde (ciné, randonnée).',
        'Passe derrière Paol et lui tient les épaules'
      ]
    },
    'd58cc578-2597-4724-911a-68b25ae6000e': {
      name: 'Tatiana',
      secret: 'Je suis un acteur ou actrice célèbre dans un autre pays',
      actions: [
        'Complimente quelqu’un en disant qu’il a “le charisme d’une star de cinéma”.',
        'Corrige quelqu’un sur une référence culturelle en disant qu’il connaît “les coulisses de l’industrie”.',
        'Insiste pour qu’on prenne une photo de groupe avec lui/elle au centre.',
      ]
    },
    '384a68fc-07b4-4988-af2b-1cfb17f5f39e': {
      name: 'Camille',
      secret: 'J’ai déjà monté une startup ',
      actions: [
        'Complimente quelqu’un sur une idée “vraiment innovante”.',
        'Évoque les challenges de “gérer des équipes en pleine croissance”.',
        'Propose spontanément d’investir dans une idée pendant la soirée.',
      ]
    },
    'eb0a6060-d6c7-4609-ba80-ea1953ca33f1': {
      name: 'Paol',
      secret: 'Je suis en couple avec Johan',
      actions: [
        'Lui demande si il a passé une bonne journée. S’il répond oui, lui demande pourquoi.',
        'Réagit fortement si Johan s’approche de quelqu’un d’autre, même en plaisantant.',
        'Interrompt une conversation pour demander à Johan s’il va bien.',
      ]
    },
    'ddabe6e8-9feb-4209-bf68-b50a1572df1a': {
      name: 'Léa',
      secret: 'J’ai failli être champion(ne) olympique',
      actions: [
        'Fait un commentaire technique sur une posture ou un geste de quelqu’un.',
        'Explique qu’il adore regarder les JO, surtout une discipline particulière.',
        'Réalise une démonstration physique (ex. : fait un squat ou une figure) en disant “c’est pas mal, non ?”.',
      ]
    },
    '012f9f7a-ff8e-452f-ab80-e3bad782d075': {
      name: 'Nicolas',
      secret: 'J’ai été SDF pendant plus de 3 ans',
      actions: [
        'Demande si quelqu’un a un vêtement chaud à prêter pour “juste essayer”.',
        'Parle avec nostalgie d’un parc ou d’un banc qui avait une vue incroyable.',
        'Demande s\'il y a pas de la 86.',
      ]
    },
    '575502e0-32ca-4180-9c42-dd94827f033f': {
      name: 'Agnès',
      secret: 'Je parle 10 langues différentes',
      actions: [
        'Corrige quelqu’un sur un mot en disant “dans cette langue, c’est pas tout à fait ça”.',
        'Compare une expression française avec une variante dans une autre langue.',
        'Traduit une blague entière dans une langue étrangère et en explique les nuances.',
      ]
    },
  }
