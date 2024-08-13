import { Select, ISelect } from "..";
import { SelectController } from "./SelectController";
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

const options = [
  { id: "col", label: "Colombia", value: "colombia" },
  {
    id: "usa",
    label: "United States of America",
    value: "united-states-of-america",
  },
  { id: "per", label: "Peru", value: "peru" },
];

const Default = (args: ISelect) => <SelectController {...args} />;

Default.args = {
  label: "Country",
  name: "country",
  id: "id",
  placeholder: "Select your country",
  value: "",
  disabled: false,
  options: options,
  required: false,
  size: "wide",
  fullwidth: false,
};

export default story;

export { Default };
