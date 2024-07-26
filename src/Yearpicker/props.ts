const order = ["asc", "desc"] as const;
type IYearpickerOrder = (typeof order)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Yearpicker allows users to select a year from a list of options.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props = {
  onChange: {
    action: "Yearpicker",
    description: "Function to handle the change in year selection.",
  },
  start: {
    control: { type: "number" },
    description: "The starting year to display.",
    defaultValue: 2000,
  },
  end: {
    control: { type: "number" },
    description: "The ending year to display.",
    defaultValue: new Date().getFullYear(),
  },
  order: {
    control: { type: "select" },
    options: ["asc", "desc"],
    description: "Order of the years displayed (ascending or descending).",
    defaultValue: "desc",
  },
  placeholder: {
    description: "text to display in the text field whenever it is empty",
  },
  value: {
    control: { type: "text" },
    description: "The currently selected year value.",
    defaultValue: "",
  },
};

export { parameters, props };
export type { IYearpickerOrder };
