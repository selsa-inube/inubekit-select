import { StyledOptionList } from "./styles";

export interface OptionListProps {
  children: JSX.Element[];
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OptionList = (props: OptionListProps) => {
  const { children, onClick } = props;

  return <StyledOptionList onClick={onClick}>{children}</StyledOptionList>;
};
