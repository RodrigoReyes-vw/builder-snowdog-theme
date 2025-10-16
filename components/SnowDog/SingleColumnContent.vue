<script setup lang="ts">
import { useCssModule } from "vue";
const style = useCssModule();
const modalOpen = ref(false);
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  textAlign: {
    type: String,
    default: "center",
  }

  
});


const bodySize = computed(() => {
  return style[props.content.contentSize]
})

const copyW=computed(() => {
  return style[props.content.contentWidth]
})

const componentH = computed(() => {
  return style[props.content.height]
})


const componentAlignment = computed(() => {
  if (props.textAlign === "left" || props.content.alignment === "left") {
    return style.left;
  } else if (
    props.textAlign === "alignRight" ||
    props.content.alignment === "right"
  ) {
    return style.left;
  } else {
    return style.center;
  }
});

const headingId = computed(() => {
  if (props.content.heading) {
    return props.content.heading
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();
  }
  return "";
});
</script>

<template>
  <div :class="[$style.singleColumn, componentAlignment, componentH]">
  
    <div  :class="[$style.container]">
    <slot name="lead"></slot>
    <h3
      v-if="content.heading && content.headingSize==='small'"
      :class="[$style.heading, 'indexableHeading']"
    >
      {{ content.heading }}
    </h3>
    <h2
      v-else-if="content.heading"
      :class="[$style.heading, 'indexableHeading']"
    >
      {{ content.heading }}
    </h2>
    <h4 v-if="content.subheading" :class="[$style.subheading]">
      {{ content.subheading }}
    </h4>
    <div
      v-if="content.content"
      :class="[$style.copy, bodySize,copyW]"
      v-html="content.content"
    />
      
    <!-- <PlayVideoLink v-if="content.longVideoId!=null" :videoId="content.longVideoId"/> -->
    <!-- <PlayVideoLink v-else-if="content.videoId!=null" :videoId="content.videoId" :size="'large'"/> -->
       <PlayVideoLink  :videoId="content.videoId" :size="'large'"/>

    <BlocksPagesProductIndicator  v-if="content.products?.length>0" :selectedProducts="content.products" :class="[$style.indicators]"/>
    <slot name="controls"></slot>
    <slot name="content"></slot>
    <div
      v-if="content.button || content.buttons"
      :class="[
        $style.ctaContainer,
        { [$style.centeredCta]: props.content.alignment === 'center' },
      ]"
    >
      <slot> </slot>
    </div>
    <slot name="ancillary"></slot>
  </div>
  </div>





</template>

<style module>

.container{
  width: 100%;
}
.ctaContainer {
  display: none;
  margin-top: var(--_ctaMargin);
  &:empty {
    display: none;
  }
}
.playVideoLink {
  padding-top: 0;
  margin-top: var(--_videoLinkMarginTop);
  }

.ctaContainer:has(*) {
  display: flex;
  gap: 15px;
}

.singleColumn {
  --_bottomMargin: 45px;
  --_ctaMargin: 45px;
  --_headingMargin: 20px;
  display: flex;
  /* text-align: v-bind(textAlign); */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* margin-bottom: 50px; */
  /* border:1px solid red; */
}

.copy,
.copy * { 
  line-height: 1.75;
  text-align: center;
  
  font-size: var(--_copySize); 
}

.copy {
  --_copySize:18px;
  margin-bottom: var(--_bottomMargin);
  a {
    color: var(--_text-emphasis);
     text-decoration: underline;
    &:hover {
      /* text-decoration: none; */
      color:var(--_text-understate)!important;
    }
  }
  h5 {
    color: var(--_text-emphasis);
  }
  p:empty {
    display: none;
  }

  div {
    ul {
      list-style: none;
      text-indent: 0 !important;
      margin-left: 0 !important;
      padding-left: 0 !important;
      display: block;
    }
    li {
      position: relative;
      &:after {
        content: none;
        display: inline-block;
        margin-left: 0 !important;
        padding-left: 0 !important;
        position: absolute;
        background-image: none;
        /* background-color: red; */
      }
    }
  }
  li {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: -30px;
      top: 8px;
      width: 17px;
      height: 17px;
      border-radius: 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 32 32'%3E%3Cpath d='M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-2.4 23.5-6.3-6.3 1.8-1.8 4.5 4.5 9.8-9.7 1.8 1.8-11.6 11.5z'/%3E%3C/svg%3E");
      /* background-color: red; */
    }
  }
  /* *:lang(ja-jp) {
     line-height: 2.1;
    } */
}
.heading {
  grid-column: 1/-1;
  color: var(--_text-emphasis);
  text-align: center;
  margin-bottom: var(--_headingMargin);
  text-wrap: pretty;
  /* margin-bottom: 0px; */
}
.ctaContainer {
  gap: 15px;
  margin-top: var(--_ctaMargin);
  /* margin-top: 12px; */
  width: 100%;
  display: flex;
  justify-content: center;
}
@media (--large) {
  .ctaContainer {
    margin-left: auto;
    margin-right: auto;
    width: max-content;
  }

  .left {
    align-items: flex-start !important;
    --_bottomMargin: 0px;
    .heading {
      text-align: left;
    }
    .copy {
      margin-bottom: 0px;
     
    }
    .copy * {
      text-align: left;
    }
    .ctaContainer {
      width: max-content;
      margin-left:0;
    }
  }
  .centeredCta {
    justify-items: center;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .right {
    align-items: flex-end !important;
    .heading {
      text-align: right;
    }
    .copy * {
      text-align: right;
    }
  }
}
.smallCopy * {
  font-size: 16px !important;
}
.smallCopy {
  /* margin-bottom: 20px!important; */
}
  .indicators{
    margin-left: auto;
    margin-right: auto;
    width:max-content;

  }
.center{
  .indicators{
    margin-left: auto;
    margin-right: auto;
    width:max-content;

  }
}
.indicators{
  margin-top:var(--_indicatorsMarginTop);
}
/* variants */
.short{
  --_headingMargin:30px;
  --_indicatorsMarginTop:30px;
  --_videoLinkMarginTop:0px;
  --_bottomMargin:0;
  --_ctaMargin:36px
}
.narrow{
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}
.large{
   --_copySize:18px;
}
.small{
   --_copySize:16px;
}
@media (--large){
  .left, .right{
    .indicators{
      margin-left: 0;
      margin-right: auto;
    }
  }
}


/* escalable */
/* .scalable{
   --_copySize:16px;
  @media (--large){
     --_copySize:18px;
  }
} */

</style>
<style>
.bimList {
  li {
    margin-left: 0;
    text-indent: 0;
    display: flex;
    line-height: 1.5;
    &:after {
      background-image: none !important;
    }
    span {
      &:first-child {
        font-weight: 500;
        flex-basis: 35%;
        flex-grow: 1;
        font-family:var(--brand-font-condensed);
        text-transform: uppercase;
      }
      &:last-child {
        flex-basis: 65%;
        flex-grow: 1;
      }
    }
  }
}

</style>
