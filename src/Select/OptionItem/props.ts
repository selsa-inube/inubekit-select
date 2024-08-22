const parameters = {
  docs: {
    description: {
      component:
        "The Select component enables users to choose one or multiple options from a dropdown list. It provides a user-friendly interface for selecting predefined values, making it ideal for forms and other data entry scenarios.",
    },
  },
};

const props = {
  id: {
    description:
      "A unique identifier for the Select component. This ID is crucial for accessibility, as it connects the label element to the input element via the `htmlFor` attribute on the label. It ensures that screen readers and other assistive technologies can correctly identify and associate the label with the input field.",
  },
  label: {
    description:
      "The label text that describes the purpose of the Select component. It provides context to the user about what options they are selecting from and is typically displayed above or beside the dropdown. This label is essential for accessibility and clarity in user interfaces.",
  },
  onClick: {
    description:
      "An optional callback function that defines custom behavior when the Select component is clicked. This function can be used to handle various user interactions, such as opening the dropdown, logging interactions, or triggering other UI changes. While it is not required, providing this function allows for greater control over the component's behavior.",
  },
};

export { parameters, props };
