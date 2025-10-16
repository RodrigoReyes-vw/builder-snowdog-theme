import type { Meta, StoryObj } from "@storybook/vue3";

import SDButton from "./SdButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Snow Dog /Button test 🐺",

  component: SDButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SDButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // parameters: {
  //   backgrounds: { default: "dark" },
  // },
  args: {
    label: "Hello World",
  },
};
export const Secondary: Story = {
  args: {
    label: "Hello World",
    primary: false,
  },
};
export const OnDark: Story = {
  args: {
    label: "Hello World",
    onDark: true,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
