<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigate = (route: string) => {
  console.log('navigate to ' + route);
  router.push({ name: route });
}

</script>

<template>
<div>
  <h2>Test Vue JS app</h2>
  <div>
    <a @click="navigate('Route1')">Route1</a>
  </div>
  <div>
    <a @click="navigate('Home')">Home</a>
  </div>
  <div>
    <RouterLink :to="'/Route2'">Route 2 via RouterLink</RouterLink>
  </div>
  <div class="main-frame">
    <RouterView />
  </div>
</div>
</template>

<style scoped>

.main-frame {
  border: 1px solid black;
  padding: 10px;
}

</style>
