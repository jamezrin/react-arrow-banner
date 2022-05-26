import { ComponentMeta, Story } from '@storybook/react';
import { ArrowBanner, ArrowBannerProps } from './ArrowBanner';

export default {
  component: ArrowBanner,
  title: 'ArrowBanner',
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    parentProps: {
      table: {
        disable: true,
      },
    },
    childrenProps: {
      table: {
        disable: true,
      },
    },
    leftStop: {
      table: {
        disable: true,
      },
    },
    rightStop: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof ArrowBanner>;

const Template: Story<ArrowBannerProps> = (args) => <ArrowBanner {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  bgColor: '#28227d',
  color: '#ffffff',
  height: '70px',
  width: '300px',
  direction: 'right',
  skewDeg: 40,
  children: 'Sample text',
  leftStop: false,
  rightStop: false,
};

export const LeftStop = Template.bind({});
LeftStop.args = {
  ...Regular.args,
  leftStop: true,
};

export const RightStop = Template.bind({});
RightStop.args = {
  ...Regular.args,
  rightStop: true,
};
