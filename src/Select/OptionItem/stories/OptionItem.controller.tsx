import { useState } from "react";
import { IOptionItem, OptionItem } from "..";

const OptionItemController = (props: IOptionItem) => {
  const [checked, setChecked] = useState(props.checked || false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    props.onCheckboxChange && props.onCheckboxChange(event);
  };

  return (
    <OptionItem
      {...props}
      checked={checked}
      onCheckboxChange={handleCheckboxChange}
    />
  );
};

export { OptionItemController };
