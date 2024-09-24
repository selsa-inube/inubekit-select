import { useState, useRef, useEffect, useCallback } from "react";
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
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  options: IOption[];
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: ISelectSize;
  value: string;
  showOptions?: boolean;
  picker?: boolean;
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
    onKeyUp,
    options,
    placeholder,
    readonly = true,
    required = false,
    size = "wide",
    value,
    showOptions = false,
    picker = false,
  } = props;

  const [displayList, setDisplayList] = useState(false);
  const [focused, setFocused] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const selectRef = useRef<{ contains: (e: EventTarget) => EventTarget }>(null);

  function handleClear() {
    onChange(name, "");
    setCheckedItems([]);
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    if (disabled) return;

    if (readonly) {
      setDisplayList(!displayList);
    }

    try {
      onClick && onClick(event);
    } catch (error) {
      console.error(`Error when clicking over select. ${error}`);
    }
  }

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (
        selectRef.current &&
        event.target &&
        !selectRef.current.contains(event.target)
      ) {
        if (readonly) {
          setDisplayList(false);
        }
      }
    },
    [readonly],
  );

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
    if (readonly) {
      setDisplayList(false);
    }
    try {
      onChange && onChange(name, value);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setDisplayList(false);
    }
    if (readonly) {
      setDisplayList(!displayList);
    }
    try {
      onKeyUp && onKeyUp(event);
    } catch (error) {
      console.error(`Error when clicking over select. ${error}`);
    }
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;
    setCheckedItems((prevChecked) =>
      checked
        ? [...prevChecked, value]
        : prevChecked.filter((item) => item !== value),
    );
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <SelectUI
      ref={selectRef}
      disabled={disabled}
      displayList={readonly ? displayList : showOptions}
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
      onKeyUp={handleKeyDown}
      options={options}
      placeholder={placeholder}
      required={required}
      size={size}
      value={value}
      readOnly={readonly}
      picker={picker}
      checkedItems={checkedItems}
      onCheckboxChange={handleCheckboxChange}
    />
  );
};

export { Select };
export type { ISelect, IOption };
