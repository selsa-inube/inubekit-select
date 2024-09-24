import { IOption } from "..";
import { ITextAppearance, Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";
import { StyledOptionItem } from "./styles";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Checkbox } from "@inubekit/checkbox";

interface IOptionItem {
  id: IOption["id"];
  label: IOption["label"];
  picker?: boolean;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const OptionItem = (props: IOptionItem) => {
  const {
    id,
    label,
    picker = false,
    onCheckboxChange,
    checked = false,
  } = props;
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
      {picker && (
        <Checkbox
          id={`checkbox-${id}`}
          value={id}
          checked={checked}
          onChange={onCheckboxChange!}
        />
      )}

      <Text
        margin={picker ? "0 0 0 9px" : "0px"}
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
