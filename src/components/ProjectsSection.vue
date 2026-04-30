<script setup lang="ts">
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard.vue';
import ScrollReveal from './ScrollReveal.vue';
</script>

<template>
  <section id="work" class="section-block projects-section">
    <div class="container">
      <ScrollReveal>
        <div class="section-heading center-heading">
          <p class="section-kicker">Projects</p>
          <h2 class="section-title">Selected work that reflects how I build.</h2>
          <p class="section-copy">
            A focused collection of projects that show backend thinking, interface craft, and practical workflow design.
          </p>
        </div>
      </ScrollReveal>

      <div class="projects-grid">
        <ScrollReveal v-for="project in projects" :key="project.title">
          <ProjectCard :project="project" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
