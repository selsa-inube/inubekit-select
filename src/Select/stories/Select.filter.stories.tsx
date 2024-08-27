import { ISelect } from "..";
import { props, parameters } from "../props";
import { SelectControllerFilter } from "./SelectControllerFilter";

const story = {
  title: "Inputs/Select",
  component: [SelectControllerFilter],
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

const SelectFilter = (args: ISelect) => <SelectControllerFilter {...args} />;

SelectFilter.args = {
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
  readonly: false,
};

export default story;
export { SelectFilter };
