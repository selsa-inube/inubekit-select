import { useState } from "react";
import { Button } from "@inubekit/button";

import { Select, ISelect } from "..";
import { StyledForm } from "./styles";

interface IField {
  name: string;
  value: string;
  required: boolean;
  invalid: boolean;
  invalidMessage: string;
}

interface IFormState {
  [key: string]: IField;
}

function checkRequired(field: IField) {
  if (!field.required) {
    return;
  }
  if (field.required && Boolean(field.value)) {
    return;
  }
  throw new Error("Este campo es requerido");
}

function resetInvalid(field: IField) {
  field.invalid = false;
  field.invalidMessage = "";
}

function changeFieldValue(field: IField, newValue: string) {
  field.value = newValue;
}

function validateField(field: IField) {
  try {
    checkRequired(field);
    resetInvalid(field);
  } catch (error) {
    field.invalid = true;
    if (error instanceof Error) {
      field.invalidMessage = error.message;
    }
  }
}

const InForm = (props: ISelect) => {
  const { name, value, options, required, invalid } = props;

  const [form, setForm] = useState<IFormState>({
    country: {
      name,
      value,
      required: Boolean(required),
      invalid: Boolean(invalid),
      invalidMessage: "",
    },
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleChange(name: string, value: string) {
    const field = { ...form[name] };
    changeFieldValue(field, value);
    validateField(field);
    setForm({ ...form, [name]: field });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Select
        {...props}
        name={name}
        options={options}
        value={form[name].value}
        invalid={form[name].invalid}
        message={form[name].invalidMessage}
        required={form[name].required}
        onChange={handleChange}
      />
      <Button type="submit" spacing="compact">
        Submit
      </Button>
    </StyledForm>
  );
};

export { InForm };
