import { forwardRef } from "react";
import {
  MdOutlineError,
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
import { StyledContainer, StyledInputContainer, StyledInput } from "./styles";
import { OptionItem } from "./OptionItem";

interface ISelectInterface extends ISelect {
  focused?: boolean;
  displayList: boolean;
  onOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    <Stack alignItems="center" gap="4px" margin="s050 s0 s0 s200">
      <Icon
        appearance={
          status === "invalid"
            ? ("error" as keyof typeof inube.text)
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
    readonly,
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
  } = props;

  return (
    <StyledContainer $fullwidth={fullwidth} disabled={disabled} ref={ref}>
      <Stack
        alignItems="center"
        margin="s0 s0 s050 s0"
        padding="s0 s0 s0 s200"
        gap="2px"
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            focused={!readonly && focused}
            invalid={status === "invalid" && !readonly}
            size={getTypo(size!)}
            margin="0px 0px 0px 2px"
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text type="body" size="small" appearance="dark" textAlign="start">
            (Requerido)
          </Text>
        )}
      </Stack>

      <StyledInputContainer
        disabled={disabled}
        $focused={focused}
        $status={status}
        onClick={onClick}
        $readonly={readonly}
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

        {!readonly && (
          <Icon
            appearance="dark"
            icon={<MdOutlineArrowDropDown />}
            size="24px"
            spacing="none"
            disabled={disabled}
          />
        )}
      </StyledInputContainer>

      {status && !readonly && (
        <Message disabled={disabled} status={status} message={message} />
      )}
      {displayList && !disabled && (
        <OptionList onClick={onOptionClick!}>
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
