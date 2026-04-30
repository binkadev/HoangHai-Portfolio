<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <SiteHeader />
  <RouterView v-slot="{ Component, route }">
    <Transition name="cinema-page" mode="out-in">
      <div :key="route.fullPath" class="route-stage">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
  <SiteFooter />
</template>
