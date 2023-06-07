import { TouchableOpacityProps } from "react-native";
import { FilterContainer, FilterStyles, FilterTitle } from "./styles";

type IFilter = TouchableOpacityProps &
  FilterStyles & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: IFilter) {
  return (
    <FilterContainer isActive={isActive} {...rest}>
      <FilterTitle>{title}</FilterTitle>
    </FilterContainer>
  );
}
