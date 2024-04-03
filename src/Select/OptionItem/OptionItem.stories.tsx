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

export { Default };
export default story;
