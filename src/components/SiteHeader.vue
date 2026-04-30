<script setup lang="ts">
import LogoMark from './LogoMark.vue';
import { RouterLink } from 'vue-router';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
];

const socials = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/binkadev' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/Binnn.Dev' },
  { label: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@tui_la_binn' },
];
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <nav class="header-nav" aria-label="Primary navigation">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
      </nav>

      <div class="header-brand">
        <RouterLink to="/" aria-label="Go to home" class="logo-link">
          <LogoMark />
        </RouterLink>
        <div class="brand-typewriter" aria-label="Current direction">
          <span>Backend engineering with practical intent</span>
          <span>Java, systems thinking, and payment workflows</span>
          <span>PTIT Software Engineering · D22</span>
          <span>Building credible products, one project at a time</span>
        </div>
      </div>

      <div class="header-socials" aria-label="Social links">
        <a v-for="item in socials" :key="item.label" :href="item.href" target="_blank" rel="noreferrer" :aria-label="item.label" :title="item.label">
          <svg v-if="item.icon === 'github'" class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.55v-2.16c-3.2.69-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.56-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a10.91 10.91 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.08 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.03.78 2.08v3.08c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
          </svg>
          <svg v-else-if="item.icon === 'facebook'" class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.01 10.13 11.93v-8.44H7.1v-3.49h3.03V9.4c0-3.01 1.79-4.68 4.53-4.68 1.31 0 2.68.23 2.68.23v2.96h-1.51c-1.49 0-1.95.92-1.95 1.87v2.24h3.32l-.53 3.49h-2.79V24C19.61 23.08 24 18.1 24 12.07Z"/>
          </svg>
          <svg v-else class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.59 6.69a4.84 4.84 0 0 0-3.43-1.42h-1.8v8.09a2.16 2.16 0 1 1-2.16-2.16c.22 0 .44.03.65.1V8.99a5.51 5.51 0 0 0-.65-.04 4.41 4.41 0 1 0 4.41 4.41V9.44a7.08 7.08 0 0 0 4.14 1.33V8.63a4.64 4.64 0 0 1-1.16-.17Z"/>
            <path d="M18.26 3.5c.4 1.24 1.38 2.22 2.62 2.62-.45.12-.91.18-1.38.18-.44 0-.84-.04-1.24-.12V3.5Z"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
