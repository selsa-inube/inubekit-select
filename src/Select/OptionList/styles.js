import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledOptionList = styled.ul`
  display: flex;
  flex-direction: column;
  width: -moz-available;
  width: -webkit-fill-available;
  padding: 4px 0px;
  position: absolute;
  z-index: 1;
  border-radius: 4px;
  background: ${({ theme }) => {
    return (
      theme?.input?.optionList?.background?.expanded ||
      inube.input.optionList.background.expanded
    );
  }};
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  & > li:hover {
    background: ${({ theme }) => {
      return (
        theme?.input?.optionList?.background?.selected ||
        inube.input.optionList.background.selected
      );
    }};
  }
`;

export { StyledOptionList };
