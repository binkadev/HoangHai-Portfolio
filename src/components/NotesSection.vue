<script setup lang="ts">
import { notes } from '../data/notes';
import ScrollReveal from './ScrollReveal.vue';
</script>

<template>
  <section id="notes" class="section-block notes-section">
    <div class="container">
      <ScrollReveal>
        <div class="section-heading center-heading">
          <p class="section-kicker">Blogs</p>
          <h2 class="section-title">Things I write while learning and building.</h2>
          <p class="section-copy">
            Small notes on engineering, product thinking, and what I learn along the way.
          </p>
        </div>
      </ScrollReveal>

      <div class="notes-grid">
        <ScrollReveal v-for="note in notes" :key="note.title">
          <article class="note-card">
            <span>{{ note.eyebrow }}</span>
            <h3>{{ note.title }}</h3>
            <p>{{ note.description }}</p>
            <a href="#contact">Read more</a>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
