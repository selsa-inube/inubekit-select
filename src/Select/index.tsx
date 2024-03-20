import { useState, useRef, useEffect } from "react";

import { IOptionItem } from "./OptionItem";
import { ISelectSize, ISelectStatus } from "./props";
import { SelectUI } from "./interface";

interface ISelect {
  label?: string;
  name: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  value: string | number;
  required?: boolean;
  status?: ISelectStatus;
  message?: string;
  size?: ISelectSize;
  fullwidth?: boolean;
  options: IOptionItem[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select = (props: ISelect) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    readonly = false,
    value,
    required = false,
    status = "pending",
    message,
    size = "wide",
    fullwidth = false,
    options,
    onBlur,
    onFocus,
    onChange,
    onClick,
  } = props;

  const [focused, setFocused] = useState(false);
  const [displayList, setDisplayList] = useState(false);

  const selectRef = useRef<{ contains: (e: EventTarget) => EventTarget }>(null);

  const handleFocus = (e: FocusEvent) => {
    setFocused(true);
    try {
      onFocus && onFocus(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const handleBlur = (e: FocusEvent) => {
    setFocused(false);
    try {
      onBlur && onBlur(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target!)) {
      setDisplayList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  const onInsideClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayList(false);
    try {
      onChange && onChange(e, name);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayList(!displayList);
    if (readonly) return;
    try {
      onClick && onClick(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <SelectUI
      ref={selectRef}
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      readonly={readonly}
      value={value}
      required={required}
      size={size}
      status={status}
      message={message}
      fullwidth={fullwidth}
      focused={focused}
      options={options}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={onChange}
      onClick={handleClick}
      displayList={displayList}
      onOptionClick={onInsideClick}
    />
  );
};

export { Select };
export type { ISelect };
