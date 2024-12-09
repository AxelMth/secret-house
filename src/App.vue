<script setup lang="ts">
  import { ref } from 'vue';
  import HiddenSection from './HiddenSection.vue';
  import {users, type User} from './constants/users.constants';

  const hostname = import.meta.env.PROD ? '192.168.1.118:3000' : 'localhost:3000'  
  const onBuzz = async () => {
    fetch('http://' + hostname + '/buzz' + `?userId=${localStorage.getItem('userId')}`, {
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

  const user = ref<User | null>(null)
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
  <footer>
    <button @click="onBuzz">
      Buzzer
    </button>
  </footer>
</template>

<style scoped>
:host {
  display: flex;
  flex-direction: column;
  gap : 1rem;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  height: calc(100vh - 200px);
}

@media screen and (max-width: 1024px) {
  main {
    height: calc(100vh - 200px);
    justify-content: center;
    padding-top: 50px;
  }
}
footer {
  position: absolute;
  bottom: 50px;
  left: calc(50% - 50px); 
}
button {
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 50%;
  height: 100px;
  width: 100px;

  cursor: pointer;

}
</style>