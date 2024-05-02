import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "TextArea",
  },
};

export const Disabled: Story = {
  args: {
    children: "TextArea",
    disabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    children: "TextArea",
    placeholder: "Placeholder",
  },
};
