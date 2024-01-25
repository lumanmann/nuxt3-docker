
<template>
  <div>
    <p>{{ count }}</p>
    <button type="btn" @click="increment">add 1</button>
  </div>
  <div>
    <NuxtWelcome />
  </div>
</template>


<script setup>
import useCounter from './src/composables/useCounter.ts';

const { count, increment } = useCounter();
</script>