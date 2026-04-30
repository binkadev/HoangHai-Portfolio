<script setup lang="ts">
import type { Project } from '../data/projects';
defineProps<{ project: Project }>();
</script>

<template>
  <article class="project-card">
    <div class="project-topline">
      <span>{{ project.role }}</span>
      <span class="project-index">{{ project.tech[0] }}</span>
    </div>

    <h3>{{ project.title }}</h3>
    <p class="project-subtitle">{{ project.subtitle }}</p>
    <p class="project-description">{{ project.description }}</p>

    <div class="tech-list">
      <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
    </div>

    <a :href="project.github" target="_blank" rel="noreferrer" class="project-link">
      View repository
      <span aria-hidden="true">↗</span>
    </a>
  </article>
</template>
