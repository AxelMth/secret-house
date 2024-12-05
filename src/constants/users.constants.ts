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
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    '27432a67-47f7-4e84-8ba5-b61704501e06': {
      name: 'Pia',
      secret: 'J’ai déjà été en prison',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    '4604a840-7c4e-43be-acce-72e3a7edd72c': {
      name: 'Johan',
      secret: 'Je suis en couple avec Paol',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    'd58cc578-2597-4724-911a-68b25ae6000e': {
      name: 'Tatiana',
      secret: 'Je suis fan du d’En Avant Gimgamp',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    '384a68fc-07b4-4988-af2b-1cfb17f5f39e': {
      name: 'Camille',
      secret: 'J’ai monté une startup qui a levé plus de 100 millions',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    'eb0a6060-d6c7-4609-ba80-ea1953ca33f1': {
      name: 'Paol',
      secret: '123456',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    'ddabe6e8-9feb-4209-bf68-b50a1572df1a': {
      name: 'Léa',
      secret: 'Je suis multi millionnaire',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    '012f9f7a-ff8e-452f-ab80-e3bad782d075': {
      name: 'Nicolas',
      secret: 'J’ai été SDF pendant plus de 3 ans',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
    '575502e0-32ca-4180-9c42-dd94827f033f': {
      name: 'Agnès',
      secret: 'Je parle 10 langues différentes',
      actions: [
        'J’ai été un DJ très connu sur le plan international',
        'J’ai monté une startup qui a levé plus de 100 millions',
        'Je suis multi millionnaire',
      ]
    },
  }