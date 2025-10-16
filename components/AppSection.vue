<script>
export default {
  name: "AppSection",
  props: {
    surface: {
      type: String,
      default: "neutral",
      // validator(value) {
      //   return ["light", "neutral", "dark"].includes(value);
      // },
    },
  },
};
</script>

<template>
  <section :class="[$style.section, $style[`section-${surface}`]]">
    <div :class="$style.container">
      <slot> </slot>
    </div>
  </section>
</template>

<style module>
.section {
  --_section-padding: var(--section-padding);
  --_section-bg: var(--section-bg, white);
  --_text-color: var(--sd-text-color, black);
  --_heading-color: var(--sd-heading-color, black);
  padding-top: var(--_section-padding);
  padding-bottom: var(--_section-padding);
  background-color: var(--_section-bg);
  width: 100sd;
  color: var(--_text-color);
  *[class*="heading"] {
    color: var(--_heading-color);
  }
}
.container {
  max-width: var(--containerW);
  margin: 0 auto;
}
.section-neutral {
  --_section-bg: var(--sd-surface-neutral);
}
[class*="neutral"] + [class*="neutral"] {
  padding-top: 0;
}

.section-light {
  --_section-bg: var(--sd-surface-light);
}
.section-dark {
  --_section-bg: var(--sd-surface-dark);
  --_text-color: var(--sd-text-color-on-dark);
  --_heading-color: var(--sd-heading-color-on-dark);
}
</style>
<style scoped></style>
