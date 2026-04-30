<script setup lang="ts">
import { stackGroups } from '../data/stack';
import ScrollReveal from './ScrollReveal.vue';
</script>

<template>
  <section id="craft" class="section-block toolkit-section">
    <div class="container">
      <ScrollReveal>
        <div class="section-heading center-heading">
          <p class="section-kicker">Craft</p>
          <h2 class="section-title">Tools behind the work.</h2>
        </div>
      </ScrollReveal>

      <div class="toolkit-grid">
        <ScrollReveal v-for="group in stackGroups" :key="group.title">
          <article class="toolkit-card">
            <h3>{{ group.title }}</h3>
            <div class="tool-pills">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
