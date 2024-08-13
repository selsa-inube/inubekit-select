import { useState, useRef, useEffect } from "react";

import { ISelectSize, ISelectStatus } from "./props";
import { SelectUI } from "./interface";

interface ISelect {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  required?: boolean;
  status?: ISelectStatus;
  message?: string;
  size?: ISelectSize;
  fullwidth?: boolean;
  options: IOption[];
  onChange: (name: string, value: string) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IOption {
  id: string;
  label: string;
  value: string;
}

const Select = (props: ISelect) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
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

  function handleFocusAndBlur(event: FocusEvent) {
    try {
      if (event.type === "focus") {
        setFocused(true);
        onFocus && onFocus(event);
      }

      if (event.type === "blur") {
        setFocused(false);
        onBlur && onBlur(event);
      }
    } catch (error) {
      console.error(`Error executing focus/blur callback. ${error}`);
    }
  }

  function handleDocumentClick(event: MouseEvent) {
    if (
      selectRef.current &&
      event.target &&
      !selectRef.current.contains(event.target)
    ) {
      setDisplayList(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  function handleOptionClick(value: string) {
    setDisplayList(false);
    try {
      onChange && onChange(name, value);
    } catch (error) {
      console.error(`Error in when changing value using callback. ${error}`);
    }
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    setDisplayList(!displayList);
    if (disabled) return;
    try {
      onClick && onClick(event);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }

  function handleClear() {
    onChange(name, "");
  }

  return (
    <SelectUI
      ref={selectRef}
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      required={required}
      size={size}
      status={status}
      message={message}
      fullwidth={fullwidth}
      focused={focused}
      options={options}
      onFocus={handleFocusAndBlur}
      onBlur={handleFocusAndBlur}
      onChange={onChange}
      onClick={handleClick}
      displayList={displayList}
      onOptionClick={handleOptionClick}
      handleClear={handleClear}
    />
  );
};

export { Select };
export type { ISelect, IOption };
