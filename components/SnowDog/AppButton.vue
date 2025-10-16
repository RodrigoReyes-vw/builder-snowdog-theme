<script>
import BuyButton from "./BuyButton.vue";

export default {
  components: {BuyButton},
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
    :class="[$style.button, ghost ? $style.ghost : $style.primary, onNav ? $style.navButton : null]"
  />
  <button
    v-else-if="url === null"
    type="button"
    :class="[$style.button, ghost ? $style.ghost : $style.primary, onNav ? $style.navButton:null]"
  >
    {{ label }}
  </button>
  <a
    v-else
    :href="url"
    :class="[$style.button, ghost ? $style.ghost : $style.primary,onNav ? $style.navButton:null]"
  >
    {{ label }}
  </a>
</template>

<style module>
.button {  
  --_padding-h: 25px;
  --_padding-v: 17px;
  --_bg-color: var(--sd-button-background-color);
  --_label-color: var(--sd-button-label-color);
  --_border-color: var(--sd-button-border-color);
  display: block;
  font-family: var(--brand-font);
  font-size: 12px;
  padding-left: var(--_padding-h);
  padding-right: var(--_padding-h);
  padding-top: var(--_padding-v);
  padding-bottom: var(--_padding-v);
  background-color: var(--_bg-color);
  color: var(--_label-color);
  border: 1px solid var(--_border-color);
  text-transform: uppercase;
  text-decoration: none;
  height: max-content;
  line-height: 1;
  transition: all 0.4s ease-in-out;
  width: max-content;
  letter-spacing: 0.075em;
   
  @media (--medium) {
    font-size: 14px; 
       
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
    font-size: 16px;
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
.navButton{
  padding-bottom: 12px;
  padding-top: 12px;
  letter-spacing: 0.1em;

}
</style>
