import { useState } from "react";
import { Select, ISelect } from "..";

const SelectController = (props: ISelect) => {
  const { value, name } = props;
  const [form, setForm] = useState({ [name]: value });

  const onChange = (name: string, newValue: string) => {
    setForm({ ...form, [name]: newValue });
  };

  const onFocus = () => {
    if (!value) {
      setForm({ ...form });
    }
  };

  return (
    <Select
      {...props}
      value={form[name]}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
    />
  );
};

export { SelectController };
