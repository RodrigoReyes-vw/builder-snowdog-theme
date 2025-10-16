<script setup>
import { useRoute } from "#vue-router";
import { computed, useAttrs } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
  productPeriod: {
    type: Object,
    required: true,
  },
});

const attrs = useAttrs();
const route = useRoute();
const locale = route.params.locale || "en-US";
let countryCode = locale.split("-")[1];

const rootClass = computed(() => (attrs.class && attrs.class.length > 0 ? attrs.class : "vw-btn"));

const getPurchaseOptions = async () => {
  try {
    const { [props.product.productCode]: purchase } = await $fetch("https://cms-release.vectorworks.net/api/purchase/options", {
      method: "GET",
      params: {
        product: props.product.productCode,
        countryCode: countryCode.toLowerCase(),
      },
    });
    return { purchase: props.product.productCode, options: purchase.options };
  } catch (error) {
    console.error("Error fetching purchase options:", error);
    notification.error({
      message: "Failed to fetch purchase options.",
    });
  }
};

const getDistributorLanguages = async () => {
  try {
    const languages = await $fetch("https://cms-release.vectorworks.net/api/purchase/distributor-languages", {
      method: "GET",
      params: {
        countryCode: countryCode || "US",
      },
    });
    return languages;
  } catch (error) {
    console.error("Error fetching distributor languages:", error);
    notification.error({
      message: "Failed to fetch distributor languages.",
    });
  }
};

const getProductlanguage = async () => {
  const distributorLanguages = await getDistributorLanguages();

  let defaultProductLanguage = "en";
  const customCountryLanguages = {
    ch: "de",
    at: "de",
    be: "nl",
  };

  const languageKey = countryCode.toLowerCase();
  if (distributorLanguages[languageKey]) {
    defaultProductLanguage = languageKey;
  } else if (customCountryLanguages[languageKey]) {
    defaultProductLanguage = customCountryLanguages[languageKey];
  } else {
    const languagesKeys = Object.keys(distributorLanguages);
    if (languagesKeys.length === 1) {
      const firstKey = languagesKeys[0];
      defaultProductLanguage = distributorLanguages[firstKey]?.[1] || "en";
      defaultProductLanguage = languagesKeys[0];
    } else {
      for (const lang of languagesKeys) {
        if (lang !== "en") {
          defaultProductLanguage = lang;
          break;
        }
      }
    }
  }
  //custom default for Norway
  if (countryCode === "no") {
    defaultProductLanguage = ["architect", "fundamentals"].includes(props.product.key) ? "nb" : "en";
  }
  return distributorLanguages[countryCode !== "US" ? defaultProductLanguage : "en"][0];
};

const addToBasket = async () => {
  const { purchase, options } = await getPurchaseOptions();
  const language = await getProductlanguage();
  const quantity = 1;
  const option = options.filter((option) => option.parts.find((part) => part.period.toLowerCase() === props.productPeriod.key))[0];

  const productOptions = {
    product: purchase,
    period: option.parts[0].period,
    version: option.parts[0].version,
  };

  VW.Components.Basket.addProduct(
    props.product.productCode + "-" + productOptions.period.toLowerCase() + "-" + productOptions.version,
    quantity,
    language
  );
};
</script>

<template>
  <div :class="rootClass" class="vw-buy-button" v-bind="$attrs" @click.prevent="addToBasket">
    {{ label }}
  </div>
</template>

<style scoped>
.vw-buy-button {
  cursor: pointer;
}
</style>
