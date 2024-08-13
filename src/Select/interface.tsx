import { forwardRef } from "react";
import {
  MdOutlineError,
  MdAddCircle,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Label } from "@inubekit/label";
import { Stack } from "@inubekit/stack";
import { inube } from "@inubekit/foundations";

import { ISelectSize } from "./props";
import { OptionList } from "./OptionList";
import { ISelect } from ".";
import {
  StyledContainer,
  StyledInputContainer,
  StyledInput,
  StyledClearIcon,
} from "./styles";
import { OptionItem } from "./OptionItem";

interface ISelectInterface extends ISelect {
  focused?: boolean;
  displayList: boolean;
  onOptionClick: (value: string) => void;
  handleClear: () => void;
}

const getTypo = (size: ISelectSize) => {
  if (size === "compact") {
    return "medium";
  }
  return "large";
};

const Message = (
  props: Pick<ISelect, "disabled" | "status"> & { message?: string },
) => {
  const { disabled, status, message } = props;

  return status !== "pending" ? (
    <Stack alignItems="center" gap="4px" margin="4px 0 0 16px">
      <Icon
        appearance={
          status === "invalid"
            ? ("danger" as keyof typeof inube.text)
            : ("success" as keyof typeof inube.text)
        }
        disabled={disabled}
        icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
        size="14px"
      />
      <Text
        type="body"
        size="small"
        appearance={status === "invalid" ? "danger" : "success"}
        disabled={disabled}
        textAlign="start"
      >
        {message && `${message}`}
      </Text>
    </Stack>
  ) : (
    <></>
  );
};

const SelectUI = forwardRef((props: ISelectInterface, ref) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled,
    required,
    status,
    message,
    size,
    value,
    fullwidth,
    options,
    focused,
    onFocus,
    onBlur,
    onClick,
    onChange,
    onOptionClick,
    displayList,
    handleClear,
  } = props;

  return (
    <StyledContainer $fullwidth={fullwidth} disabled={disabled} ref={ref}>
      {label && (
        <Stack
          alignItems="center"
          margin="0 0 4px 0"
          padding="0 0 0 16px"
          gap="2px"
        >
          <Label
            htmlFor={id!}
            disabled={disabled}
            focused={focused}
            invalid={status === "invalid"}
            size={getTypo(size!)}
            margin="0px 0px 0px 2px"
          >
            {label}
          </Label>

          {required && !disabled && (
            <Text type="body" size="small" appearance="dark" textAlign="start">
              (Requerido)
            </Text>
          )}
        </Stack>
      )}
      <StyledInputContainer
        disabled={disabled}
        $focused={focused}
        $status={status}
        onClick={onClick}
        $value={value}
        $size={size}
      >
        <StyledInput
          autoComplete="off"
          readOnly
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          $required={required}
          $size={size}
          $status={status}
          $fullwidth={fullwidth}
          $focused={focused}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
        />
        <Stack direction="row" gap="8px">
          {value && !disabled && (
            <StyledClearIcon>
              <Icon
                appearance="gray"
                icon={<MdAddCircle />}
                size="20px"
                onClick={handleClear}
              />
            </StyledClearIcon>
          )}

          <Icon
            appearance="dark"
            icon={<MdOutlineArrowDropDown />}
            size="24px"
            spacing="narrow"
            disabled={disabled}
          />
        </Stack>
      </StyledInputContainer>

      {status && (
        <Message disabled={disabled} status={status} message={message} />
      )}
      {displayList && !disabled && (
        <OptionList onOptionClick={onOptionClick} options={options}>
          {options.map((optionItem) => (
            <OptionItem
              key={optionItem.id}
              id={optionItem.id}
              label={optionItem.label}
            />
          ))}
        </OptionList>
      )}
    </StyledContainer>
  );
});

export { SelectUI };
export type { ISelectInterface };
