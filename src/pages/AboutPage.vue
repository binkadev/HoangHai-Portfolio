<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import ScrollReveal from '../components/ScrollReveal.vue';
import profileImage from '../assets/profile-main.jpg';
import { stackGroups } from '../data/stack';

const timelineRef = ref<HTMLElement | null>(null);
let lastScrollY = 0;
let frameId = 0;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const updateTimelineProgress = () => {
  if (!timelineRef.value) return;

  const rect = timelineRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const currentScrollY = window.scrollY || window.pageYOffset;
  const direction = currentScrollY >= lastScrollY ? 'down' : 'up';
  lastScrollY = currentScrollY;

  const start = viewportHeight * 0.78;
  const finish = viewportHeight * 0.28;
  const rawProgress = (start - rect.top) / (rect.height + start - finish);
  const progress = clamp(rawProgress, 0, 1);

  timelineRef.value.style.setProperty('--timeline-progress', progress.toFixed(3));
  timelineRef.value.dataset.scrollDirection = direction;
  timelineRef.value.classList.toggle('is-active', progress > 0.02 && progress < 0.98);
};

const requestTimelineUpdate = () => {
  cancelAnimationFrame(frameId);
  frameId = requestAnimationFrame(updateTimelineProgress);
};

onMounted(() => {
  lastScrollY = window.scrollY || window.pageYOffset;
  updateTimelineProgress();
  window.addEventListener('scroll', requestTimelineUpdate, { passive: true });
  window.addEventListener('resize', requestTimelineUpdate);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId);
  window.removeEventListener('scroll', requestTimelineUpdate);
  window.removeEventListener('resize', requestTimelineUpdate);
});

const principles = [
  {
    title: 'Clarity over exaggeration',
    text: 'I prefer to present my level honestly and let the quality of my work, documentation, and consistency speak for me.',
  },
  {
    title: 'Structure over noise',
    text: 'Whether I am writing an API or a README file, I aim for a structure that is easy to follow and easy to maintain.',
  },
  {
    title: 'Progress over performance',
    text: 'I am still learning, so I value steady improvement, accurate thinking, and better engineering habits over empty claims.',
  },
];
</script>

<template>
  <main class="page-shell about-page">
    <section class="page-section about-intro-section">
      <div class="container about-intro-grid">
        <ScrollReveal>
          <div class="about-intro-copy">
            <p class="section-kicker">About</p>
            <h1 class="page-title">A backend-focused engineer building dependable systems with intent.</h1>
            <p class="section-copy">
              I am Tran Hoang Hai, a fourth-year Software Engineering student at PTIT. My present direction is backend engineering, with a growing emphasis on Java-based services, digital payment workflows, and the discipline required in banking-oriented systems.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="about-side-note">
            <p>
              At this stage, I am still building my professional foundation. That is precisely why I care about clean architecture, credible project presentation, and the habits that make engineering work easier to trust.
            </p>
            <blockquote>Code with discipline. Build with taste. Ship with purpose.</blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="page-section about-profile-section">
      <div class="container about-profile-grid">
        <ScrollReveal>
          <div class="about-image-card">
            <img :src="profileImage" alt="Tran Hoang Hai portrait" class="about-image" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="about-profile-card">
            <h2>Current direction</h2>
            <p>
              I am shaping my portfolio around backend systems that show practical reasoning: structured APIs, data modelling, authentication, transaction-aware logic, and documentation that helps reviewers understand the product context.
            </p>
            <p>
              My long-term objective is to work on robust systems where correctness matters. That is why I am particularly drawn to payment-related products and the broader banking domain.
            </p>
            <div class="stats-row">
              <div class="stat-card"><strong>BE</strong><span>Primary Direction</span></div>
              <div class="stat-card"><strong>Java</strong><span>Current Focus</span></div>
              <div class="stat-card"><strong>D22</strong><span>PTIT Cohort</span></div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="page-section principles-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-heading center-heading">
            <p class="section-kicker">Principles</p>
            <h2 class="section-title"><span class="title-line">How I build,</span><span class="title-line">learn, and present.</span></h2>
          </div>
        </ScrollReveal>
        <div class="principles-grid">
          <ScrollReveal v-for="item in principles" :key="item.title">
            <article class="principle-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="page-section education-section">
      <div class="container education-layout">
        <ScrollReveal>
          <div class="education-heading">
            <p class="section-kicker">Education</p>
            <h2 class="section-title">Academic foundation and engineering direction.</h2>
            <p class="section-copy education-copy">
              My academic path has given me both formal coursework and the motivation to study beyond the classroom, particularly in backend engineering and system reliability.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div ref="timelineRef" class="education-timeline" style="--timeline-progress: 0">
            <article class="education-item is-current">
              <span class="education-marker"></span>
              <div class="education-content">
                <p class="education-period">2022–Present · PTIT</p>
                <h3>Software Engineering</h3>
                <p>
                  Coursework includes software requirements engineering, system analysis and design, object-oriented programming, database systems, software testing, quality assurance, technical documentation, and project-oriented software development.
                </p>
                <p>
                  My self-directed emphasis currently covers Java backend engineering, RESTful services, authentication, relational data modelling, digital payment concepts, and the fundamentals of banking workflows.
                </p>
              </div>
            </article>

            <article class="education-item">
              <span class="education-marker"></span>
              <div class="education-content">
                <p class="education-period">2019–2022 · Krong Nang District, Dak Lak Province</p>
                <h3>Phan Boi Chau High School</h3>
                <p>
                  I built a strong academic base in analytical reasoning, mathematics, and disciplined study before moving further into software engineering.
                </p>
                <p>
                  Relevant areas of study included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.
                </p>
              </div>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="page-section skills-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-heading center-heading">
            <p class="section-kicker">Skills</p>
            <h2 class="section-title one-line-title">Current craft and tools.</h2>
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
  </main>
</template>
