<script setup lang="ts">
const users = {
  '1': {
    name: 'Diego',
    secret: 'J’ai été un DJ très connu sur le plan international',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '2': {
    name: 'Pia',
    secret: 'J’ai déjà été en prison',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '3': {
    name: 'Johan',
    secret: 'Je suis en couple avec Paol',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '4': {
    name: 'Tatiana',
    secret: 'Je suis fan du d’En Avant Gimgamp',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '5': {
    name: 'Camille',
    secret: 'J’ai monté une startup qui a levé plus de 100 millions',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '6': {
    name: 'Paol',
    secret: '123456',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '7': {
    name: 'Léa',
    secret: 'Je suis multi millionnaire',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '9': {
    name: 'Nicolas',
    secret: 'J’ai été SDF pendant plus de 3 ans',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
  '10': {
    name: 'Agnès',
    secret: 'Je parle 10 langues différentes',
    actions: [
      'J’ai été un DJ très connu sur le plan international',
      'J’ai monté une startup qui a levé plus de 100 millions',
      'Je suis multi millionnaire',
    ]
  },
}
  const hostname = import.meta.env.PROD ? '192.168.1.118:3000' : 'localhost:3000'  
  const onBuzz = async () => {
    fetch('http://' + hostname + '/buzz', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*'
      }
    })
  }
  import { ref } from 'vue'
  const initUserId = () => {
    const userId = window.location.pathname.split('/')[1];
    if (!userId) return
    localStorage.setItem('userId', userId)
    window.location.replace('/')
  }

  const user = ref(null)
  const initUser = (userId: string) => {
    user.value = users[userId]
  }
  
  initUserId()
  const userId = localStorage.getItem('userId')
  if (userId) initUser(userId)
</script>

<template>
  <main>
    <h1>Bonjour {{ user.name }}</h1>
    <p>Ton secret est: {{ user.secret }}</p>
    <p>Tes actions à réaliser:</p>
    <ul>
      <li v-for="action in user.actions" :key="action">{{ action }}</li>
    </ul>
  </main>
  <footer>
    <button @click="onBuzz">
      Buzzer
    </button>
  </footer>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>