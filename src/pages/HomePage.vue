<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ScrollReveal from '../components/ScrollReveal.vue';
import profileImage from '../assets/profile-main.jpg';
import { projects } from '../data/projects';
import { notes } from '../data/notes';

const featurePoints = [
  'Backend architecture with practical business logic',
  'Clear API structure and maintainable documentation',
  'A growing focus on payment-oriented workflows',
];
</script>

<template>
  <main class="page-shell home-page">
    <section class="home-hero cinematic-hero">
      <div class="hero-orb hero-orb-left" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-right" aria-hidden="true"></div>
      <div class="hero-grid-lines" aria-hidden="true"></div>

      <div class="container home-hero-grid">
        <ScrollReveal>
          <div class="home-hero-copy">
            <p class="section-kicker">Welcome to my portfolio</p>
            <h1 class="display-title">Measured systems.<br />Refined execution.<br />Purposeful growth.</h1>
            <p class="hero-subtitle">
              I am Tran Hoang Hai, a Software Engineering student at PTIT, currently developing a backend-oriented profile with a strong interest in Java, dependable services, digital payment concepts, and banking-related systems.
            </p>

            <div class="hero-actions">
              <RouterLink to="/projects" class="btn btn-primary">View Projects</RouterLink>
              <RouterLink to="/about" class="btn btn-secondary">About Me</RouterLink>
            </div>

            <ul class="hero-points">
              <li v-for="point in featurePoints" :key="point">{{ point }}</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="home-hero-stage">
            <div class="stage-screen">
              <div class="stage-toolbar">
                <span></span><span></span><span></span>
              </div>
              <img :src="profileImage" alt="Tran Hoang Hai portrait" class="stage-image" />
              <div class="stage-overlay-card stage-overlay-top">
                <small>Current Direction</small>
                <strong>Backend Engineering</strong>
              </div>
              <div class="stage-overlay-card stage-overlay-bottom">
                <small>Focus Area</small>
                <strong>Java · APIs · Payment Flows</strong>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="page-section home-highlights-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-heading center-heading">
            <p class="section-kicker">Highlights</p>
            <h2 class="section-title"><span class="title-line">Selected work,</span><span class="title-line">technical notes.</span></h2>
          </div>
        </ScrollReveal>

        <div class="highlight-grid highlight-grid-main">
          <ScrollReveal v-for="project in projects.slice(0, 2)" :key="project.title">
            <article class="highlight-card highlight-card-project" :class="`tone-${project.tone}`">
              <div class="highlight-topline">
                <span>{{ project.role }}</span>
                <span>{{ project.tech[0] }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </article>
          </ScrollReveal>
        </div>

        <div class="highlight-grid highlight-grid-small">
          <ScrollReveal v-for="note in notes.slice(0, 3)" :key="note.title">
            <article class="insight-card">
              <span>{{ note.eyebrow }}</span>
              <h3>{{ note.title }}</h3>
              <p>{{ note.description }}</p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="page-section home-film-section">
      <div class="container cinematic-panel">
        <ScrollReveal>
          <div>
            <p class="section-kicker">Approach</p>
            <h2 class="section-title">Building carefully, presenting honestly, improving consistently.</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="cinematic-copy">
            <p>
              I do not present myself as an experienced banking engineer yet. Instead, I build from first principles: API design, database structure, authentication, transaction awareness, and documentation that allows projects to be evaluated with clarity.
            </p>
            <p>
              My goal is to become the kind of backend developer who can design systems that are reliable, understandable, and ready to support practical product needs.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
</template>
