<script setup lang="ts">
import { ref } from 'vue'
const isShown = ref(false)

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <p>{{ props.title }}</p>
  <section>
    <div v-bind:class="{ hidden: !isShown }">
      <slot></slot>
    </div>
    <button @click="isShown = !isShown">
      {{ isShown ? 'Cacher' : 'Montrer' }}
    </button>
  </section>
</template>

<style scoped>
section {
  position: relative;

  padding: 50px;
  background-color: white;
  min-width: 200px;
  width: 50%;
  border-radius: 12px;
  color: black;
  text-align: center;
}

p {
  font-weight: bold;
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
}


div.hidden {
  filter: blur(8px);
}

button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>