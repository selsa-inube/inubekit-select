import { IOption } from "..";

import { Text } from "@inubekit/text";

import { StyledOptionItem } from "./styles";

interface IOptionItem {
  id: IOption["id"];
  label: IOption["label"];
}

const OptionItem = (props: IOptionItem) => {
  const { id, label } = props;

  return (
    <StyledOptionItem id={id}>
      <Text textAlign="start" size="medium">
        {label}
      </Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
export type { IOptionItem };
