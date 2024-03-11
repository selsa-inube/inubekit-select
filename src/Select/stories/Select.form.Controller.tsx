import { useState } from "react";
import { Button } from "@inubekit/button";

import { Select, ISelect } from "..";
import { StyledForm } from "./styles";

const InForm = (props: ISelect) => {
  const { value, status = "pending", required } = props;
  const [form, setForm] = useState({ value, status });

  const onClick = (e: Event) => {
    const element = document.getElementById("select") as HTMLInputElement;
    const valueElement = element.value;

    if (valueElement === "" && required) {
      setForm({ ...form, status: "invalid" });
      e.preventDefault();
      return;
    } else {
      setForm({ ...form, status: "valid" });
      e.preventDefault();
    }
  };

  const onFocus = () => {
    if (!value) {
      setForm({ ...form, status: "pending" });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.outerText;
    setForm({ value, status: "pending" });
  };

  const message =
    form.status === "valid"
      ? "The field has been successfully validated"
      : "This field can not be blank";

  return (
    <StyledForm>
      <Select
        {...props}
        value={form.value}
        message={message}
        status={form.status}
        id="select"
        onFocus={onFocus}
        onChange={onChange}
      />
      <Button type="submit" spacing="compact" onClick={(e) => onClick(e!)}>
        Submit
      </Button>
    </StyledForm>
  );
};

export { InForm };
