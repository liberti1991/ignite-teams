import { TouchableOpacityProps } from "react-native";
import { GroupCardContainer, GroupCardIcon, GroupCardTitle } from "./styles";

type IGroupCard = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: IGroupCard) {
  return (
    <GroupCardContainer {...rest}>
      <GroupCardIcon name="users" />
      <GroupCardTitle>{title}</GroupCardTitle>
    </GroupCardContainer>
  );
}
