import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Input',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Input',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Input',
  },
};
