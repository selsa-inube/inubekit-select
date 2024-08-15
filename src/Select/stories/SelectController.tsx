import { useState } from "react";
import { Select, ISelect } from "..";

const SelectController = (props: ISelect) => {
  const { name, value, options } = props;
  const [form, setForm] = useState({ [name]: value });

  const onChange = (name: string, newValue: string) => {
    setForm({ ...form, [name]: newValue });
  };

  // const onFocus = () => {
  //   if (!selected.value) {
  //     setForm({ ...form });
  //   }
  // };

  return (
    <Select
      {...props}
      name={name}
      value={form[name]}
      options={options}
      onChange={onChange}
    />
  );
};

export { SelectController };
