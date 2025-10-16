<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: true,
  },
  onDark: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    type="button"
    :class="[
      $style.button,
      { [$style.secondary]: !props.primary },
      { [$style.onDark]: props.onDark },
    ]"
  >
    {{ label }}</button
  >
</template>

<style module>
.button {
  --_padding-h: var(--sd-space-three-x);
  --_padding-v: var(--sd-space-two-x);
  --_bg-color: var(--sd-color-black);
  --_label-color: var(--sd-color-white);
  --_border-color: var(--sd-color-black);
  border: var(--sd-border-thin) solid var(--_border-color);
  font-family: var(--brand-font);
  cursor: pointer;
  /*font-weight: 500;
  font-stretch: condensed; */
  font-size: 14px;
  letter-spacing: 0.075em;
  padding-block: var(--_padding-v);
  padding-inline: var(--_padding-h);
  background-color: var(--_bg-color);
  color: var(--_label-color);
  text-transform: uppercase;
  &:hover {
    --_label-color: var(--sd-color-white);
    --_bg-color: var(--sd-color-teal);
    --_border-color: var(--sd-color-teal);
  }
}

.secondary {
  --_bg-color: transparent;
  --_label-color: var(--sd-color-black);
  border-color: var(--sd-color-black);
  &:hover {
    --_label-color: var(--sd-color-black);
    --_bg-color: var(--sd-color-teal);
    --_border-color: var(--sd-color-teal);
  }
}
.onDark {
  --_label-color: var(--sd-color-white);
  --_bg-color: transparent;
  --_border-color: var(--sd-color-white);
  &:hover {
    --_label-color: var(--sd-color-black);
    --_bg-color: var(--sd-color-white);
    --_border-color: var(--sd-color-white);
  }
}
</style>
