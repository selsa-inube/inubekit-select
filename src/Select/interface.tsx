import { forwardRef, useContext } from "react";

import {
  MdOutlineError,
  MdOutlineCancel,
  MdOutlineChevronRight,
} from "react-icons/md";

import { ITextAppearance, Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Label } from "@inubekit/label";
import { Stack } from "@inubekit/stack";

import { OptionList } from "./OptionList";
import { OptionItem } from "./OptionItem";

import { ISelectSize } from "./props";
import { IOption, ISelect } from ".";

import {
  StyledContainer,
  StyledInputContainer,
  StyledInput,
  StyledChevron,
} from "./styles";
import { ThemeContext } from "styled-components";
import { inube } from "@inubekit/foundations";

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

function getOptionLabel(options: IOption[], value: string) {
  const option = options.find((option) => option.value === value);
  if (option) {
    return option.label;
  }
  return "";
}

interface IMessage {
  message: ISelect["message"];
}

const Message = (props: IMessage) => {
  const { message } = props;
  const theme: typeof inube = useContext(ThemeContext);
  const messageAppearance =
    (theme?.input?.message?.appearance as ITextAppearance) ||
    inube.input.message.appearance;
  return (
    <Stack alignItems="center" gap="4px" margin="4px 0 0 16px">
      <Icon
        appearance={messageAppearance}
        icon={<MdOutlineError />}
        size="14px"
      />
      <Text
        type="body"
        size="small"
        appearance={messageAppearance}
        textAlign="start"
      >
        {message}
      </Text>
    </Stack>
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
    invalid,
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

  const theme: typeof inube = useContext(ThemeContext);
  const requiredAppearance =
    (theme?.input?.required?.appearance as ITextAppearance) ||
    inube.input.required.appearance;

  return (
    <StyledContainer $fullwidth={fullwidth} disabled={disabled} ref={ref}>
      {label && (
        <Stack
          alignItems="center"
          margin="0 0 4px 0"
          padding="0 0 0 16px"
          gap="4px"
        >
          <Label
            htmlFor={id!}
            disabled={disabled}
            focused={focused}
            invalid={invalid}
            size={getTypo(size!)}
            margin="0px 0px 0px 2px"
          >
            {label}
          </Label>

          {required && !disabled && (
            <Text
              type="body"
              size="small"
              appearance={requiredAppearance}
              textAlign="start"
            >
              (Requerido)
            </Text>
          )}
        </Stack>
      )}
      <StyledInputContainer
        disabled={disabled}
        $focused={focused}
        $invalid={invalid}
        onClick={onClick}
        $value={value}
        $size={size}
      >
        <StyledInput
          autoComplete="off"
          value={getOptionLabel(options, value)}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          $size={size}
          $fullwidth={fullwidth}
          $focused={focused}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          readOnly
        />
        <Stack direction="row" gap="8px" alignItems="center">
          {value && !disabled && (
            <Icon
              appearance="gray"
              icon={<MdOutlineCancel />}
              size="16px"
              onClick={handleClear}
            />
          )}

          <StyledChevron $displayList={displayList}>
            <Icon
              appearance="dark"
              icon={<MdOutlineChevronRight />}
              spacing="narrow"
              disabled={disabled}
            />
          </StyledChevron>
        </Stack>
      </StyledInputContainer>

      {invalid && <Message message={message} />}
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
