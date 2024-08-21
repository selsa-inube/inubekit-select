import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledOptionItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
  border-left: 4px solid transparent;
  padding: 4px 16px 4px 12px;
  cursor: pointer;

  border-left-width: 4px;
  border-left-style: solid;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.input?.background?.color?.regular ||
      inube.input.background.color.regular};
  }
`;

export { StyledOptionItem };
