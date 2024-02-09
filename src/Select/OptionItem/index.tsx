import { Text } from "@inubekit/text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  label: string;
}

export const OptionItem = (props: IOptionItemProps) => {
  const { id, label } = props;

  return (
    <StyledOptionItem id={id}>
      <Text textAlign="start" size="medium">
        {label}
      </Text>
    </StyledOptionItem>
  );
};
