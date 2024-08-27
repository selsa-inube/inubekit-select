import { props, parameters } from "./props";
import { OptionList, IOptionList } from "./index";
import { OptionItem } from "../OptionItem";
import { action } from "@storybook/addon-actions";

const story = {
  title: "Inputs/Select/OptionList",
  component: [OptionList],
  parameters,
  argTypes: props,
};

const options = [
  { id: "1", label: "Item 1", value: "item-1" },
  { id: "2", label: "Item 2", value: "item-2" },
  { id: "3", label: "Item 3", value: "item-3" },
];

const Default = (args: IOptionList) => (
  <div style={{ position: "relative" }}>
    <OptionList {...args} onOptionClick={action("onClick")}>
      {options.map((optionItem) => (
        <OptionItem
          key={optionItem.id}
          id={optionItem.id}
          label={optionItem.label}
        />
      ))}
    </OptionList>
  </div>
);

export default story;

export { Default };
