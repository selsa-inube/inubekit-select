import { useState, useRef, useEffect } from "react";

import { ISelectSize } from "./props";
import { SelectUI } from "./interface";

interface IOption {
  id: string;
  label: string;
  value: string;
}

interface ISelect {
  disabled?: boolean;
  fullwidth?: boolean;
  id?: string;
  invalid?: boolean;
  label?: string;
  maxItems?: number;
  message?: string;
  name: string;
  onBlur?: (event: FocusEvent) => void;
  onChange: (name: string, value: string) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent) => void;
  options: IOption[];
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: ISelectSize;
  value: string;
}

const Select = (props: ISelect) => {
  const {
    disabled = false,
    fullwidth = false,
    id,
    invalid = false,
    label,
    maxItems = 5,
    message,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    options,
    placeholder,
    readonly = true,
    required = false,
    size = "wide",
    value,
  } = props;

  const [displayList, setDisplayList] = useState(false);
  const [focused, setFocused] = useState(false);

  const selectRef = useRef<{ contains: (e: EventTarget) => EventTarget }>(null);

  function handleClear() {
    onChange(name, "");
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    setDisplayList(!displayList);
    if (disabled) return;
    try {
      onClick && onClick(event);
    } catch (error) {
      console.error(`Error when clicking over select. ${error}`);
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

  function handleOptionClick(value: string) {
    setDisplayList(false);
    try {
      onChange && onChange(name, value);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <SelectUI
      ref={selectRef}
      disabled={disabled}
      displayList={displayList}
      focused={focused}
      fullwidth={fullwidth}
      handleClear={handleClear}
      id={id}
      invalid={invalid}
      label={label}
      maxItems={maxItems}
      message={message}
      name={name}
      onBlur={handleFocusAndBlur}
      onChange={onChange}
      onClick={handleClick}
      onFocus={handleFocusAndBlur}
      onOptionClick={handleOptionClick}
      options={options}
      placeholder={placeholder}
      required={required}
      size={size}
      value={value}
      readOnly={readonly}
    />
  );
};

export { Select };
export type { ISelect, IOption };
