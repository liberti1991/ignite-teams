import { ButtonIcon } from "../ButtonIcon";
import { Icon, PlayerCardContainer, PlayerCardText } from "./styles";

interface IPlayerCard {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: IPlayerCard) {
  return (
    <PlayerCardContainer>
      <Icon name="person" />
      <PlayerCardText>{name}</PlayerCardText>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </PlayerCardContainer>
  );
}
