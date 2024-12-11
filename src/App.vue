<script setup lang="ts">
import { ref } from 'vue';
import HiddenSection from './HiddenSection.vue';
import ScoreBoard from './ScoreBoard.vue';

interface User {
  name: string;
  secret: string;
  actions: string[];
}

const hostname = import.meta.env.PROD ? '192.168.1.36:3000' : 'localhost:3000';

const actionChecked = ref<Record<string, boolean>>({});
const user = ref<User | null>(null);
const userId = ref<string | null>(null);

const onBuzz = async () => {
  if (!userId.value) return;
  await fetch(`http://${hostname}/buzz?userId=${localStorage.getItem('userId')}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const onSelectionAction = (event: Event, action: User['actions'][0]) => {
  if (!userId.value) return;
  actionChecked.value[action] = (event.target as HTMLInputElement).checked;

  fetch(
    `http://${hostname}/action?userId=${localStorage.getItem('userId')}&action=${action}&isDone=${actionChecked.value[action]}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

const initUserId = () => {
  const extractedUserId = window.location.pathname.split('/')[1];
  if (!extractedUserId) return;
  localStorage.setItem('userId', extractedUserId);
  userId.value = extractedUserId;
  if (extractedUserId !== 'score-board') window.location.replace('/');
};

const initUser = (id: string) => {
  fetch(`http://${hostname}/user?userId=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      user.value = data;
      actionChecked.value = data.actionsDone || {};
    });
};

initUserId();
const storedUserId = localStorage.getItem('userId');
if (storedUserId) {
  userId.value = storedUserId;
  if (storedUserId !== 'score-board') initUser(storedUserId);
}
</script>

<template>
  <main v-if="userId === 'score-board'">
    <ScoreBoard />
  </main>
  <main v-else>
    <h1>Bonjour {{ user?.name }}</h1>
    <HiddenSection title="Ton secret">
      {{ user?.secret }}
    </HiddenSection>
    <HiddenSection title="Tes actions à réaliser">
      <div v-for="action in user?.actions" :key="action">
        <input
          type="checkbox"
          @change="onSelectionAction($event, action)"
          :checked="actionChecked[action]"
        />
        <label>{{ action }}</label>
      </div>
    </HiddenSection>
  </main>
  <footer v-if="userId !== 'score-board'">
    <button @click="onBuzz">Buzzer</button>
  </footer>
</template>

<style scoped>
:host {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
label {
  margin-right: 10px;
}
</style>