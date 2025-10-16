<script lang="ts" setup>
import { boolean } from 'zod';

const props = defineProps({
  media: {
    type: Object,
    required: true,
  },
  isRounded: {
    type: boolean,
    default:true
  }
});
const formatUrl = (url) => {
  return url.replace("f_auto", "f_auto");
};

// watch(
//   () => props.media,
//   (newMedia, oldMedia) => {
//     console.log('Media prop changed:', newMedia);
//     // Add your logic here to handle the change
//   },
//   // Use deep watching if media is a nested object
// );

</script>

<template>
  
  <img
  :key="media.url"
    v-if="media?.type && (media.type === 'image' || media.type === 'images')"
    :src="formatUrl(media.url)"
    :alt="media.alt"
    loading="lazy"
    :class="[{[$style.roundCorners ]: isRounded}]"
  />
  <ResponsiveVideo
  :key="media.url"
    v-else
    :videoURL="Array.isArray(media) ? media[0].url : (media?.url ?? '')"
    :class="[{[$style.roundCorners ]: isRounded}]"
  />
</template>
<style module>
.container {
 display: contents;
}
.roundCorners{
  border-radius: 10px;
}
</style>
