<script setup lang="ts">
import ScrollReveal from '../components/ScrollReveal.vue';
import { notes } from '../data/notes';

const categories = ['Backend', 'Payments', 'Architecture', 'Documentation', 'Growth'];
</script>

<template>
  <main class="page-shell blogs-page">
    <section class="page-section blogs-hero-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-heading center-heading">
            <p class="section-kicker">Blogs</p>
            <h1 class="page-title"><span class="title-line">Notes, essays,</span><span class="title-line">and learning logs.</span></h1>
            <p class="section-copy">
              This page gathers the themes I care about most: backend engineering, product clarity, technical writing, and the honest record of what I am learning.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="page-section featured-essay-section">
      <div class="container featured-essay-grid">
        <ScrollReveal>
          <article class="featured-essay-card">
            <p class="section-kicker">Featured note</p>
            <h2>Why I care about reliable backend structure before anything else</h2>
            <p>
              I am drawn to backend engineering because it rewards careful thinking. It asks how data should move, how errors should be handled, how transactions should remain trustworthy, and how a system can stay understandable even as it grows.
            </p>
          </article>
        </ScrollReveal>

        <ScrollReveal>
          <aside class="blog-side-panel">
            <p class="mini-label">Topics</p>
            <h2>Organised thinking, not random posts.</h2>
            <p>
              Each note is intended to clarify one engineering idea: how a backend decision is made, how a product flow is structured, or how a student project can be presented with credibility.
            </p>
            <div class="tool-pills">
              <span v-for="item in categories" :key="item">{{ item }}</span>
            </div>
          </aside>
        </ScrollReveal>
      </div>
    </section>

    <section class="page-section blog-cards-section">
      <div class="container blog-notes-grid">
        <ScrollReveal v-for="note in notes" :key="note.title">
          <article class="blog-note-card">
            <span>{{ note.eyebrow }}</span>
            <h3>{{ note.title }}</h3>
            <p>{{ note.description }}</p>
            <a href="https://github.com/binkadev" target="_blank" rel="noreferrer">Open profile →</a>
          </article>
        </ScrollReveal>
      </div>
    </section>
  </main>
</template>
