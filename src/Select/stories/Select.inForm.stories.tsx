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
  label: "Country",
  name: "country",
  id: "country",
  placeholder: "Select your country",
  value: "",
  required: true,
  disabled: false,
  invalid: false,
  options: [
    { id: "col", label: "Colombia", value: "colombia" },
    {
      id: "usa",
      label: "United States of America",
      value: "united-states-of-america",
    },
    { id: "per", label: "Peru", value: "peru" },
  ],
  size: "compact",
  fullwidth: false,
};

export default story;
export { SelectInForm };
