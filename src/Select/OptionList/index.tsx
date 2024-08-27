import { IOption } from "..";
import { StyledOptionList } from "./styles";

interface IOptionList {
  children: JSX.Element[];
  onOptionClick: (value: string) => void;
  options: IOption[];
  maxItems?: number;
}

const OptionList = (props: IOptionList) => {
  const { children, onOptionClick, options, maxItems } = props;

  const interceptOnClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const optionClicked = options?.find(
        (option) =>
          option.id === event.target.id ||
          option.id === event.target.parentElement?.id,
      );
      if (optionClicked) {
        onOptionClick && onOptionClick(optionClicked.value);
      }
    } catch (error) {
      console.error(`Error trying to process onOptionClick. ${error}`);
    }
  };

  return (
    <StyledOptionList
      $maxItems={maxItems}
      $totalOptions={options?.length}
      onClick={interceptOnClick}
    >
      {children}
    </StyledOptionList>
  );
};

export { OptionList };
export type { IOptionList };
