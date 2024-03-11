import { StyledOptionList } from "./styles";

interface IOptionList {
  children: JSX.Element[];
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionList = (props: IOptionList) => {
  const { children, onClick } = props;

  const interceptOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onClick && onClick(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <StyledOptionList onClick={interceptOnClick}>{children}</StyledOptionList>
  );
};

export { OptionList };
export type { IOptionList };
