import { ThemeProvider } from "styled-components";
import { presente } from "@inubekit/foundations";
import { props, parameters } from "./props";
import { OptionItem, IOptionItem } from "./index";

const story = {
  title: "Inputs/Select/OptionItem",
  component: OptionItem,
  parameters,
  argTypes: props,
};

const Default = (args: IOptionItem) => <OptionItem {...args} />;

Default.args = {
  id: "Item 1",
  label: "Item 1",
};

const theme = {
  ...presente,
};

const Themed = (args: IOptionItem) => (
  <ThemeProvider theme={theme}>
    <OptionItem {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export { Default, Themed };
export default story;
