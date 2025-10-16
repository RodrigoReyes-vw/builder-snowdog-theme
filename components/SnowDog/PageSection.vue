<script setup>
const props = defineProps({
  surfaceColor: {
    type: String,
    default: "light",
  },
});
</script>
<template>
  <article
    :class="[
      `sd-surface-${props.surfaceColor}`,
      `sd-page-section`,
      $style.section,
    ]"
  >
    <slot></slot>
  </article>
</template>

<style module>
.section {
  /* min-height: 0px; */
  --max-w: 1140px;
  width: 100%;
  min-height: 30px;
}
</style>
