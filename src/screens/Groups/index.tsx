import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ListEmpty } from "../../components/ListEmpty";
import { GroupCard } from "../../components/groupCard";
import { groupGetAll } from "../../storage/group/groupGetAll";
import { Container } from "./styles";

export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>(["Rocket", "Rodrigo"]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const response = await groupGetAll();

      setGroups(response);
    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
