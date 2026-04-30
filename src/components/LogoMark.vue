<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import thhLogo from '../assets/thh-selected-full-logo.png';

const sweepX = ref(-170);
const sweepOpacity = ref(0);
const hoverX = ref(-180);
const hoverOpacity = ref(0);
const isHoveringLogo = ref(false);

let rafId = 0;
let hoverStart = 0;

const autoShineStyle = computed(() => ({
  transform: `translateX(${sweepX.value}%) skewX(-22deg)`,
  opacity: String(sweepOpacity.value),
}));

const hoverShineStyle = computed(() => ({
  transform: `translateX(${hoverX.value}%) skewX(-22deg)`,
  opacity: String(hoverOpacity.value),
}));

function easeInOutCubic(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function tick(time: number) {
  const duration = 4200;
  const phase = (time % duration) / duration;

  // Auto sweep: visible for more than half the cycle so it is easy to see.
  if (phase < 0.68) {
    const p = easeInOutCubic(phase / 0.68);
    sweepX.value = -170 + p * 420;
    sweepOpacity.value = Number((Math.sin(Math.PI * p) * 0.92).toFixed(3));
  } else {
    sweepX.value = 270;
    sweepOpacity.value = 0;
  }

  // Hover sweep: replayed by real JS time, not only CSS :hover.
  if (hoverStart > 0) {
    const elapsed = time - hoverStart;
    const hoverDuration = 1500;
    const pRaw = Math.min(elapsed / hoverDuration, 1);
    const p = easeInOutCubic(pRaw);
    hoverX.value = -180 + p * 455;
    hoverOpacity.value = Number((Math.sin(Math.PI * p) * 1).toFixed(3));

    if (pRaw >= 1 && !isHoveringLogo.value) {
      hoverStart = 0;
      hoverOpacity.value = 0;
    }
  }

  rafId = requestAnimationFrame(tick);
}

function playHoverSweep() {
  isHoveringLogo.value = true;
  hoverStart = performance.now();
}

function stopHoverSweep() {
  isHoveringLogo.value = false;
}

onMounted(() => {
  rafId = requestAnimationFrame(tick);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
});
</script>

<template>
  <span
    class="logo-mark-js"
    :class="{ 'is-logo-hover': isHoveringLogo }"
    aria-label="Tran Hoang Hai portfolio logo"
    tabindex="0"
    @mouseenter="playHoverSweep"
    @mouseleave="stopHoverSweep"
    @focusin="playHoverSweep"
    @focusout="stopHoverSweep"
  >
    <span class="logo-js-glass-base" aria-hidden="true"></span>
    <img :src="thhLogo" alt="Tran Hoang Hai Portfolio logo" class="logo-js-image" />
    <span class="logo-js-reflection logo-js-reflection-a" aria-hidden="true"></span>
    <span class="logo-js-reflection logo-js-reflection-b" aria-hidden="true"></span>
    <span class="logo-js-auto-shine" :style="autoShineStyle" aria-hidden="true"></span>
    <span class="logo-js-hover-shine" :style="hoverShineStyle" aria-hidden="true"></span>
    <span class="logo-js-glint logo-js-glint-a" aria-hidden="true"></span>
    <span class="logo-js-glint logo-js-glint-b" aria-hidden="true"></span>
    <span class="logo-js-edge" aria-hidden="true"></span>
  </span>
</template>
