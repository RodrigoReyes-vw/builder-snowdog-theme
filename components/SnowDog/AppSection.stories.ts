import type { Meta, StoryObj } from "@storybook/vue3";

import PageSection from "./PageSection.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Snow Dog /Page Section",
  component: PageSection,
  argTypes: {
    surfaceColor: {
      control: { type: "select" },
      options: ["light", "neutral", "dark", "darkest"],
      description: "The surface variant that determines the background color and text styling",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `

A flexible section component that provides consistent spacing and theming across your application.

## Usage

The PageSection component is designed to create consistent page sections with proper spacing and theming. It supports different surface variants to match your design system.

## Surface Variants

- **light**: Light background with dark text
- **neutral**: Neutral background (default)
- **dark**: Dark background with light text
- **darkest**: Darkest background with light text

## Examples

Use the controls panel to switch between different surface variants and see how the component adapts.
        `,
      },
    },
  },
  
  tags: ["autodocs"],
} satisfies Meta<typeof PageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // parameters: {
  //   backgrounds: { default: "dark" },
  // },
  args: {
    surfaceColor: "neutral",
  },
  parameters: {
    docs: {
      description: {
        story: `
This is the default PageSection with neutral surface styling. It provides a clean, neutral background that works well for most content.

**Instructions:**
1. Use the controls panel to change the surface variant
2. Try different surface options to see how the component adapts
3. Notice how the text color changes automatically based on the surface
        `,
      },
    },
  },
};

