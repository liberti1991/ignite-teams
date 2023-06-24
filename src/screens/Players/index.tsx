import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { ListEmpty } from "../../components/ListEmpty";
import { Loading } from "../../components/Loading";
import { PlayerCard } from "../../components/PlayerCard";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageSTO";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playerGetByGroupAnPlayers } from "../../storage/player/playerGetGroupAndTeam";
import { playerRemoveByGroup } from "../../storage/player/playerRemoveByGroup";
import { AppError } from "../../utils/AppError";
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
  const navigation = useNavigation();

  const [isLoading, isLoadingSet] = useState<boolean>(true);

  const [team, teamSet] = useState<string>("Time A");
  const [player, playerSet] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, newPlayerNameSet] = useState<string>("");

  const route = useRoute();

  const { group } = route.params as IRouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("New Player", "informe o nome do jogador");
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      //Fechar o teclado
      // keyboard.dismiss();

      newPlayerNameSet("");
      fetchPlayersByTeam();

      // navigation.navigate("players", { group: group });
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("New Player", err.message);
      } else {
        Alert.alert("New Player", "Nao foi possível cadastrar um novo jogador");
        console.log(err);
      }
    }
  }

  async function fetchPlayersByTeam() {
    isLoadingSet(true);
    try {
      const playersByTeam = await playerGetByGroupAnPlayers(group, team);

      playerSet(playersByTeam);
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("New Player", err.message);
      } else {
        Alert.alert(
          "New Player",
          "Nao foi possível carregar as pessoas do time selecionado."
        );
        console.log(err);
      }
    } finally {
      isLoadingSet(false);
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("New Player", err.message);
      } else {
        Alert.alert("Remover Player", "Nao foi remover o player");
        console.log(err);
      }
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);

      navigation.navigate("groups");
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("New Player", err.message);
      } else {
        Alert.alert("Remover Grupo", "Nao foi remover o grupo");
        console.log(err);
      }
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: (value) => groupRemove() },
    ]);
    await groupRemoveByName(group);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <PlayerContainer>
      <Header showBtn />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <PlayerForm>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          value={newPlayerName}
          autoCorrect={false}
          onChangeText={newPlayerNameSet}
          //evento para add pelo teclado do celular
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={player}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
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
      )}

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </PlayerContainer>
  );
}
