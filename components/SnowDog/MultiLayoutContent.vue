<script lang="ts" setup>
import { useCssModule } from "vue";
const style = useCssModule();

const props = defineProps({
  block: {
    type: Object,
    required: true,
  }
});
const modalOpen = ref(false);
const componentH = computed(() => {
  return style[props.block.height]
})
import PageSection from "./PageSection.vue";
import AppInlineMedia from "./AppInlineMedia.vue";
import SingleColumnContent from "./SingleColumnContent.vue";


</script>

<template>
  <PageSection :id="block.settings.anchorLink" :surfaceColor="block.surface" :class="[{[$style.sd_page_section__local]:block.media==null}]">
    <div :class="['sd-section-container']">
      <div :class="['sd-grid', 'reversibleGrid', `${props.block.alignment}`]">
        <div
          v-if="block.media != null"
          :class="[
            'mediaContainer',
            { [$style.leftCredit]: props.block.alignment === 'left' },
          ]"
        >
          <AppInlineMedia
            :media="Array.isArray(block.media) ? block.media[0] : block.media"
            :isRounded="block.mediaCornerStyle==='rounded'"
            :class="['media',
  { [$style.mediaExtraSpace]: componentHeight === 'short' },
 { [$style.squareMedia]: block.mediaAspectRatio === 'square' }]"
          />
          <p v-if="block.mediaCredit" :class="['img-credit', $style.credit]">
            <!-- <IconsImageCredit :class="[$style.creditIcon]" /> -->
            {{ block.mediaCredit }}
          </p>
        </div>

        <div :class="[`copyContainer`,componentH]">
          <SingleColumnContent :content="block">
            <!-- <template #default>
              <template v-for="button in block.buttons">
                <PlayVideoButton
                  v-if="button.variant === 'video' && button.videoId"
                  :label="button.label"
                  :videoId="button.videoId"
                />
                <AppButton
                  v-else-if="button?.modal?.length"
                  :ghost="button.variant === 'secondary'"
                  @click="modalOpen = true"
                  :label="button.label ?? ''"
                />
                <AppButton
                  v-else
                  :ghost="button.variant === 'secondary'"
                  :url="button.url ?? ''"
                  :label="button.label ?? ''"
                  :target="button.openInNewTab ? '_blank' : ''"
                />
              </template>
            </template> -->
          </SingleColumnContent>
        </div>
      </div>
    </div>
  </PageSection>
  <!-- <Teleport class="teleport" to="body">
    <Transition name="modal">
      <div v-if="modalOpen">
        <AppModal @closeModal="modalOpen = false" :modalOpen="modalOpen">
          <BlocksBaseBlocksFeaturesTableArch
            v-if="block.buttons.find((button: any) => button.modal === 'Architect')"
          />
          <BlocksBaseBlocksFeaturesTableEnt
            v-else-if="block.buttons.find((button: any) => button.modal === 'Entertainment')"
          />
          <BlocksBaseBlocksFeaturesTableFund
            v-else-if="block.buttons.find((button: any) => button.modal === 'Fundamentals')"
          />
          <BlocksPagesEducationFormHtml
            v-else-if="block.buttons.find((button: any) => button.modal === 'EducationForm')"
          />
        </AppModal>
      </div>
    </Transition>
  </Teleport> -->
</template>

<style module>
.short{  
    margin-bottom: 0!important;  
}
.mediaExtraSpace{
    --_mediaMarginTop:50px!important;
}
.sd_page_section__local:not(:has(.mediaContainer)) {
   padding-bottom: 45px;
}
.credit {
  text-transform: uppercase;
  font-size: var(--sd-font-size-62);
  margin-top: var(--sd-space-one-and-a-quarter-x);
  color: var(--_text-color);
  margin-top: var(--sd-space-three-x);
  text-align: center;
  position: relative;

  svg {
    fill: var(--_text-color);
    display: none;
  }
}


.creditIcon {
  width: var(--sd-icon-size-1x);
  height: var(--sd-icon-size-1x);
  fill: var(--_text-color);
}

@media (--large) {
  .sd_page_section__local:not(:has(.mediaContainer)) {
    padding-bottom: 70px;
  }
  .textRight {
    width: 120%;
    text-align: right;
  }
  .leftCredit {
    display: flex;
    flex-direction: column;
    /* align-items: end; */
  }
  .credit {
    margin-top: var(--sd-space-three-x);
    /* width: max-content; */
    text-align: left;
    svg {
      display: inline;
      fill: var(--_text-color);
      position: relative;
      top: 1px;
    }
  }
}
.squareMedia{
  width: 100%;
  height: 100%;
  left: unset;
  right: unset;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
