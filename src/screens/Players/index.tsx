import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { PlayerContainer, PlayerForm } from "./styles";

export function Players() {
  return (
    <PlayerContainer>
      <Header showBtn />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <PlayerForm>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </PlayerForm>
    </PlayerContainer>
  );
}
