import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { ListEmpty } from "../../components/ListEmpty";
import { PlayerCard } from "../../components/PlayerCard";
import {
  PlayerContainer,
  PlayerForm,
  PlayerHeaderList,
  PlayerQuantity,
} from "./styles";

type IRouteParams = {
  group: string;
};

export function Players() {
  const [team, teamSet] = useState<string>("Time A");
  const [player, playerSet] = useState<string[]>([]);

  const route = useRoute();

  const { group } = route.params as IRouteParams;

  return (
    <PlayerContainer>
      <Header showBtn />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <PlayerForm>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </PlayerForm>

      <PlayerHeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => teamSet(item)}
            />
          )}
          horizontal
        />

        <PlayerQuantity>{player.length}</PlayerQuantity>
      </PlayerHeaderList>

      <FlatList
        data={player}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          player.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message="Não a pessoas nesse time " />
        )}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </PlayerContainer>
  );
}
