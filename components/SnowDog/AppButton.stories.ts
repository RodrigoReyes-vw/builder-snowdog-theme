import type { Meta, StoryObj } from "@storybook/vue3-vite";

import AppButton from "./AppButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Snow Dog /App Button",
  component: AppButton,
  argTypes: {
   
  
  },
  parameters: {
    docs: {
      description: {
        component: `
##App button docs and some extra music
        `,
      },
    },
  },
  
  tags: ["autodocs"],
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: `
The primary AppButton story demonstrates the default button styling with a solid background. 
This is the standard button variant that should be used for primary actions in the application.

**Features:**
- Solid background styling
- Hover effects with color transitions
- Responsive font sizing
- Support for different languages (Japanese specific styling)
- Can function as a button, link, or product buy button
        `,
      },
    },
    // backgrounds: { default: "dark" },
  },
  decorators: [() => ({ template: '<div class="sd-page-section sd-surface-darkest"><story /></div>' })],
  args: {
    label: "App Button",
  },

};


export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: `
this is the ghost button
        `,
      },
    },
    // backgrounds: { default: "dark" },
  },
  decorators: [() => ({ template: '<div class="sd-page-section sd-surface-darkest"><story /></div>' })],
  args: {
    label: "App Button",
    ghost: true,
  },

};
