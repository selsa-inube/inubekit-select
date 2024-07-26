import React, { useState } from "react";
import { IYearpicker, Yearpicker } from "..";

const YearpickerController = (props: IYearpicker) => {
  const {
    start,
    end,
    order = "desc",
    onChange,
    placeholder,
    value = "",
  } = props;
  const [selectedYear, setSelectedYear] = useState<string>(value);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: string,
  ) => {
    setSelectedYear(newValue);
    onChange && onChange(event, newValue);
  };

  return (
    <Yearpicker
      start={start}
      end={end}
      order={order}
      onChange={handleChange}
      placeholder={placeholder}
      value={selectedYear}
    />
  );
};

export { YearpickerController };
