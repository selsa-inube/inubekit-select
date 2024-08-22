const sizes = ["wide", "compact"] as const;
type ISelectSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Select allows users to make a single selection or multiple selections from a list of options.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props = {
  disabled: {
    description:
      "sets the field as to appear disabled, users will not be able to interact with the text field",
    table: {
      defaultValue: { summary: false },
    },
  },
  fullwidth: {
    description: "option to fit field width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  invalid: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: false },
    },
  },
  invalidMessage: {
    description: "show when the field is validated and there is an error",
  },
  label: {
    description: "prompts the user what value to enter",
  },
  maxItems: {
    description:
      "defines the maximum number of items to display in the dropdown list before showing a scrollbar",
    table: {
      defaultValue: { summary: 5 },
    },
  },
  name: {
    description: "name of the input element",
  },
  onBlur: {
    description:
      "allows you to control what to do when the onblur event occurs.",
  },
  onChange: {
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  onFocus: {
    description:
      "allows you to control what to do when the onfocus event occurs.",
  },
  options: {
    description:
      "(array): shall be designed to accept an array of objects with a predetermined structure.",
  },
  placeholder: {
    description: "text to display in the text field whenever it is empty",
  },
  readOnly: {
    description:
      "makes the input field non-editable, but still allows the user to select options from the dropdown",
    table: {
      defaultValue: { summary: false },
    },
  },
  required: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: false },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "defines the size of the component",
  },
  value: {
    description:
      "string value that should be controlled by the controlling parent.",
  },
};

export { parameters, props, sizes };
export type { ISelectSize };
