import { IYearpicker } from "..";
import { parameters, props } from "../props";
import { YearpickerController } from "./YearpickerController";

const story = {
  title: "Inputs/Yearpicker",
  component: YearpickerController,
  parameters,
  argTypes: {
    ...props,
  },
};

const Default = (args: IYearpicker) => <YearpickerController {...args} />;

Default.args = {
  start: 2000,
  end: new Date().getFullYear(),
  order: "desc",
  placeholder: "Años",
  value: "",
};

export default story;
export { Default };
