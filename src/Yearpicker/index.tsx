import React, { useState, useEffect } from "react";
import { Select } from "../Select";
import { IYearpickerOrder } from "./props";

interface IYearpicker {
  start?: number;
  end?: number;
  order?: IYearpickerOrder;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  placeholder?: string;
  value?: string;
}

const Yearpicker = (props: IYearpicker) => {
  const {
    start = 2000,
    end = new Date().getFullYear(),
    order = "desc",
    onChange,
    placeholder,
    value = "",
  } = props;

  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    let yearList = Array.from({ length: end - start + 1 }, (_, i) =>
      (start + i).toString(),
    );
    if (order === "asc") {
      yearList = yearList.reverse();
    }
    setYears(yearList);
  }, [start, end, order]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, event.target.innerText);
  };

  return (
    <Select
      options={years.map((year) => ({
        id: year,
        label: year,
      }))}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export { Yearpicker };
export type { IYearpicker };
