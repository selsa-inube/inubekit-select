import { useState } from "react";
import { Select, ISelect } from "..";

const SelectControllerFilter = (props: ISelect) => {
  const { id, name, value, options } = props;
  const [form, setForm] = useState({ [String(id)]: value });
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (_name: string, newValue: string) => {
    setForm({ ...form, [String(id)]: newValue });
    setShowOptions(false);
  };

  const handleFilter = (newValue: string) => {
    if (newValue !== undefined) {
      if (newValue) {
        const normalizedValue = newValue.trim().toLowerCase();

        const filtered = options.filter(
          (option) =>
            option.value &&
            option.value.toLowerCase().includes(normalizedValue),
        );
        setFilteredOptions(filtered);
        setShowOptions(filtered.length > 0);
      } else {
        setFilteredOptions(options);
        setShowOptions(false);
      }
    }
  };

  return (
    <Select
      {...props}
      name={name}
      value={form[String(id)]}
      options={filteredOptions}
      onChange={handleChange}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
        handleFilter((e.target as HTMLInputElement).value)
      }
      showOptions={showOptions}
    />
  );
};

export { SelectControllerFilter };
