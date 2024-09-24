import { props, parameters } from "../props";
import { IOptionItem } from "../index";
import { OptionItemController } from "./OptionItem.controller";

const story = {
  title: "Inputs/Select/OptionItem",
  component: OptionItemController,
  parameters,
  argTypes: props,
};

const Default = (args: IOptionItem) => <OptionItemController {...args} />;

Default.args = {
  id: "Item 1",
  label: "Item 1",
  picker: false,
  checked: false,
};

export { Default };
export default story;
