import type { Meta, StoryObj } from "@storybook/vue3";

import AppSection from "./AppSection.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Snow Dog /App Section",

  component: AppSection,
  argTypes: {
    surface: {
      control: { type: "select" },
      options: ["light", "neutral", "dark", "darkest"],
    },
  },
  
  tags: ["autodocs"],
} satisfies Meta<typeof AppSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // parameters: {
  //   backgrounds: { default: "dark" },
  // },
  args: {
    surface: "neutral",
  },
};

