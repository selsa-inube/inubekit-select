import { Text } from "@inubekit/text";
import { StyledOptionItem } from "./styles";

interface IOptionItem {
  id: string;
  label: string;
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
