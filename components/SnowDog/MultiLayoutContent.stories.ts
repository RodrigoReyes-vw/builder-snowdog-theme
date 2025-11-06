import type { Meta, StoryObj } from "@storybook/vue3";

import MultiLayoutContent from "./MultiLayoutContent.vue";
import type {TypeWithDeepControls} from "storybook-addon-deep-controls";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof MultiLayoutContent> = {
  title: "Snow Dog /Multi Layout Content",
  component: MultiLayoutContent,
  argTypes: {
    block: {
      control: 'object',
      description: 'Block configuration object containing all settings',
    },
  },
  parameters: {
    deepControls: { enabled: true },
    docs: {
      description: {
        component: `
## Multi Layout Content Component

A flexible content block component that supports:
- Text content with optional media
- Configurable alignment (left/right)
- Multiple surface colors
- Rounded or square media
- Responsive layouts
        `,
      },
    },
  },
  
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
      deepControls: { enabled: true },
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
  },

  args: {
    block: {
         settings: {
        anchorLink: "multi-layout-content-block",
      },
      alignment:"right",
      componentHeight: "short", 
      isRounded: true,
      media: [{
         url: "https://res.cloudinary.com/vectorworks/image/upload/v1761850641/article/25-BLDG%20Schematic%20Design/Screenshot_2025-10-30_at_2.57.04_PM.png",
        type: "image",
      }       
      ],
      surfaceColor: "neutral",
      
         heading: "Example Title",
      content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>",
     
     
    },
  },
  argTypes: {}
};



