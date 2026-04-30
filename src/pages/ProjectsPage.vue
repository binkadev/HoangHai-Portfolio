<script setup lang="ts">
import ScrollReveal from '../components/ScrollReveal.vue';
import { projects } from '../data/projects';

const caseStudies = [
  {
    title: 'Backend systems for attendance operations',
    body: 'My strongest project direction so far is the Attendance QR system, where I focus on API design, workflow clarity, and the kind of operational structure that resembles a real product environment.',
  },
  {
    title: 'Product-minded experimentation with AI',
    body: 'With HTTM-AI, I am exploring how ideas can be translated into clearer product workflows. The objective is not only to make features work, but to understand how a digital product should be shaped.',
  },
];
</script>

<template>
  <main class="page-shell projects-page">
    <section class="page-section projects-hero-section">
      <div class="container projects-hero-grid">
        <ScrollReveal>
          <div class="projects-hero-copy">
            <p class="section-kicker">Projects</p>
            <h1 class="page-title">Selected work, each project given its own stage.</h1>
            <p class="section-copy">
              These projects reflect how I think: backend-first when necessary, interface-aware when useful, and always oriented towards practical workflows rather than isolated features.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="projects-aside-card">
            <p class="mini-label">Current emphasis</p>
            <strong>From student projects to credible case studies</strong>
            <p>
              I treat each repository as a story: what problem it addresses, how the system is structured, and what engineering decisions it reveals.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="page-section case-study-section">
      <div class="container">
        <div class="case-study-list">
          <ScrollReveal v-for="(project, index) in projects" :key="project.title">
            <article class="case-study-card" :class="[`tone-${project.tone}`, { 'is-reverse': index % 2 === 1 }]">
              <div class="case-study-visual">
                <div class="case-study-panel">
                  <div class="case-study-toolbar"><span></span><span></span><span></span></div>
                  <div class="case-study-art" :class="`tone-${project.tone}`">
                    <em>{{ String(index + 1).padStart(2, '0') }}</em>
                    <strong>{{ project.title }}</strong>
                    <small>{{ project.subtitle }}</small>
                  </div>
                </div>
              </div>

              <div class="case-study-copy">
                <p class="section-kicker">{{ project.role }}</p>
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <div class="tech-list">
                  <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
                </div>
                <a :href="project.github" target="_blank" rel="noreferrer" class="btn btn-secondary">View Repository</a>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="page-section projects-notes-section">
      <div class="container two-up-grid">
        <ScrollReveal v-for="item in caseStudies" :key="item.title">
          <article class="editorial-card">
            <p class="section-kicker">Case-note</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </ScrollReveal>
      </div>
    </section>
  </main>
</template>
