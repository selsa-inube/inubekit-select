import { IOption } from "..";
import { ITextAppearance, Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";
import { StyledOptionItem } from "./styles";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

interface IOptionItem {
  id: IOption["id"];
  label: IOption["label"];
}

const OptionItem = (props: IOptionItem) => {
  const { id, label } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const theme: typeof inube = useContext(ThemeContext);
  const hoverOptionAppearance =
    (theme?.input?.option?.appearance?.hover as ITextAppearance) ||
    inube.input.option.appearance.hover;
  const regulaOptionAppearance =
    (theme?.input?.option?.appearance?.regular as ITextAppearance) ||
    inube.input.option.appearance.regular;
  return (
    <StyledOptionItem
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Text
        textAlign="start"
        size="medium"
        appearance={isHovered ? hoverOptionAppearance : regulaOptionAppearance}
      >
        {label}
      </Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
export type { IOptionItem };
