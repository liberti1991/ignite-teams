import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { PlayerContainer } from "./styles";

export function Players() {
  return (
    <PlayerContainer>
      <Header showBtn />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
    </PlayerContainer>
  );
}
