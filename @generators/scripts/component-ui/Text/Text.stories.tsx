/** @format */

// #region ::: IMPORT
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Props, UIText } from ".";
import { Providers } from "../Providers";

// #endregion

export default {
  title: "Example/Text",
  component: UIText,
  argTypes: {
    dataCy: { table: { disable: true } },
    noWrap: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Providers>
    <UIText {...args} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {
  text: "Test",
  color: "primary",
};
