<script>
import BuyButton from "./BuyButton.vue";

export default {
  components: { BuyButton },
  props: {
    label: {
      type: String,
      required: true,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: null,
    },
    onNav: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: null,
    },
    productPeriod: {
      type: Object,
      default: null,
    },
  },
};
</script>

<template>
  <BuyButton
    v-if="product"
    :label="label"
    :product="product"
    :productPeriod="productPeriod"
    :class="[
      $style.button,
      ghost ? $style.ghost : $style.primary,
      onNav ? $style.navButton : null,
    ]"
  />
  <button
    v-else-if="url === null"
    type="button"
    :class="[
      $style.button,
      ghost ? $style.ghost : $style.primary,
      onNav ? $style.navButton : null,
    ]"
  >
    {{ label }}
  </button>
  <a
    v-else
    :href="url"
    :class="[
      $style.button,
      ghost ? $style.ghost : $style.primary,
      onNav ? $style.navButton : null,
    ]"
  >
    {{ label }}
  </a>
</template>

<style module>
.button {
  --_padding-block: var(--sd-space-200);
  --_padding-inline: var(--sd-space-300);
  --_bg-color: var(--sd-button-background-color);
  --_label-color: var(--sd-button-label-color);
  --_border-color: var(--sd-button-border-color);
  --_font-size: var(--sd-font-size-75);
  background-color: var(--_bg-color);
  border: var(--sd-border-thin) solid var(--_border-color);
  color: var(--_label-color);
  display: block;
  font-family: var(--brand-font);
  font-size: var(--_font-size);
  height: max-content;
  letter-spacing: var(--sd-font-char-space-3x);
  line-height: var(--sd-font-line-height-normal);
  padding-block: var(--_padding-block);
  padding-inline: var(--_padding-inline);
  text-decoration: none;
  text-transform: uppercase;
  transition: all var(--sd-animation-speed-normal) ease-in-out;
  width: max-content;
  @media (--medium) {
    --_font-size: var(--sd-font-size-87);
  }
  &:hover {
    --_bg-color: var(--sd-button-background-hover-color);
    --_border-color: var(--sd-button-border-hover-color);
    --_label-color: var(--sd-button-label-hover-color);
    border: 1px solid var(--_border-color);
    text-decoration: none;
    color: var(--_label-color);
  }
}

:lang(ja-jp) {
  .button {
    --_font-size: var(--sd-font-size-100);
  }
}
.ghost {
  --_bg-color: var(--sd-button-ghost-background-color);
  --_label-color: var(--sd-button-ghost-label-color);
  --_border-color: var(--sd-button-ghost-border-color);
  &:hover {
    --_bg-color: var(--sd-button-ghost-background-hover-color);
    --_label-color: var(--sd-button-ghost-label-hover-color);
    --_border-color: var(--sd-button-ghost-background-hover-color);
    border: 1px solid var(--_border-color);
    color: var(--_label-color);
    text-decoration: none;
  }
}
.navButton {
  --_padding-block: var(--sd-space-150);
  --_padding-inline: var(--sd-space-150);
  letter-spacing: var(--sd-font-char-space-extended);
}
@media (--medium) {
  .navButton {
    color: lime !important;
  }
}
</style>
