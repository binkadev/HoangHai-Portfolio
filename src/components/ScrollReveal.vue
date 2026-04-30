<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const target = ref<HTMLElement | null>(null);
const visible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        observer?.disconnect();
      }
    },
    { threshold: 0.18 },
  );

  if (target.value) observer.observe(target.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div ref="target" class="reveal" :class="{ 'is-visible': visible }">
    <slot />
  </div>
</template>
