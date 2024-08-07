import { Select, ISelect } from "..";
import { InForm } from "./Select.form.Controller";

import { props, parameters } from "../props";

const story = {
  title: "Inputs/Select",
  component: [Select],
  parameters,
  argTypes: {
    ...props,
    onchange: { action: "Select" },
  },
};

const SelectInForm = (args: ISelect) => <InForm {...args} />;

SelectInForm.args = {
  label: "Select",
  name: "select",
  id: "select",
  placeholder: "Select",
  value: "",
  required: true,
  disabled: false,
  options: [
    { id: "1", label: "Item 1", disabled: false },
    { id: "2", label: "123", disabled: false },
    { id: "3", label: "Item", disabled: false },
  ],
  size: "compact",
  fullwidth: false,
};

export default story;
export { SelectInForm };
