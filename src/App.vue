<script setup lang="ts">
  const hostname = 'localhost:3000'
  const onBuzz = async () => {
    fetch('http://' + hostname + '/buzz', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*'
      }
    })
  }
</script>

<template>
  <button @click="onBuzz">
    Buzzer
  </button>
</template>

<style scoped>
</style>
