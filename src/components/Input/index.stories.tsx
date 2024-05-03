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

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};
