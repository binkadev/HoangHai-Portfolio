<script setup lang="ts">
import ScrollReveal from './ScrollReveal.vue';
</script>

<template>
  <section id="about" class="section-block about-section">
    <div class="container about-grid">
      <ScrollReveal>
        <div>
          <p class="section-kicker">About</p>
          <h2 class="section-title">A developer shaping systems with clarity.</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div class="about-card">
          <p>
            I am a Software Engineering student at PTIT, building my path through practical projects that combine backend structure, interface quality, and product awareness.
          </p>
          <p>
            My goal is not only to make software work, but to make it feel reliable, understandable, and ready for real use.
          </p>
          <blockquote>Code with discipline. Build with taste. Ship with purpose.</blockquote>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
