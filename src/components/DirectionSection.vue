<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue';

const directions = [
  'Build backend systems with clearer structure and stronger business logic',
  'Improve API documentation and testing habits',
  'Design cleaner frontend components and responsive interfaces',
  'Keep projects readable for both developers and reviewers',
  'Turn student projects into portfolio-ready repositories',
];
</script>

<template>
  <section class="section-block direction-section">
    <div class="container direction-panel">
      <ScrollReveal>
        <div>
          <p class="section-kicker">Current direction</p>
          <h2 class="section-title">What I am sharpening right now.</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ol class="direction-list">
          <li v-for="item in directions" :key="item">{{ item }}</li>
        </ol>
      </ScrollReveal>
    </div>
  </section>
</template>
