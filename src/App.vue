<script setup lang="ts">
  import { ref } from 'vue';
  import HiddenSection from './HiddenSection.vue';
  import {users} from './constants/users.constants';

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
  
  const initUserId = () => {
    const userId = window.location.pathname.split('/')[1];
    if (!userId) return
    localStorage.setItem('userId', userId)
    window.location.replace('/')
  }

  const user = ref<typeof users[keyof typeof users] | null>(null)
  const initUser = (userId: string) => {
    user.value = users[userId] 
  }
  
  initUserId()
  const userId = localStorage.getItem('userId')
  if (userId) initUser(userId)
</script>

<template>
  <main>
    <h1>Bonjour {{ user?.name }}</h1>
    <HiddenSection title="Ton secret">
      {{ user?.secret }}
    </HiddenSection>
    <HiddenSection  title="Tes actions à réaliser">
      <ul>
        <li v-for="action in user?.actions" :key="action">{{ action }}</li>
      </ul>
      </HiddenSection>  
  </main>
  <!-- <footer>
    <button @click="onBuzz">
      Buzzer
    </button>
  </footer> -->
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
.hidden-section {
  display: none;
}
</style>