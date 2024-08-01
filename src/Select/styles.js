import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

const StyledContainer = styled.div`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "300px")};

  & > label {
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  }
`;

const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  border-width: 1px;
  border-style: solid;

  border-color: ${({ theme, disabled, $status, $focused }) => {
    if (disabled) {
      return (
        (theme?.input?.border?.color?.disabled ||
          inube.input.border.color.disabled) +
        "; pointer-events: none; opacity: 0.5;"
      );
    }
    if ($focused) {
      return (
        theme?.input?.border?.color?.focus || inube.input.border.color.focus
      );
    }
    if ($status === "invalid") {
      return (
        theme?.input?.border?.color?.invalid || inube.input.border.color.invalid
      );
    }
    return (
      theme?.input?.border?.color?.regular || inube.input.border.color.regular
    );
  }};

  opacity: ${({ disabled }) => (disabled ? "0.5" : "unset")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  padding: 0px 12px 0px 16px;
  border-width: none;
  border-style: none;
  border-color: none;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  font-weight: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.weight};
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
  color: ${({ theme, disabled }) => {
    if (disabled) {
      return (
        theme?.input?.content?.color?.disabled ||
        inube.input.content.color.disabled
      );
    }
    return (
      theme?.input?.content?.color?.regular || inube.input.content.color.regular
    );
  }};
  background-color: ${({ theme }) =>
    theme?.input?.background?.color?.regular ||
    inube.input.background.color.regular};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ $size }) => sizeOptions[$size]};

  ::placeholder {
    color: ${({ theme }) =>
      theme?.input?.placeholder?.color?.regular ||
      inube.input.placeholder.color.regular};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

export { StyledContainer, StyledInputContainer, StyledInput };
