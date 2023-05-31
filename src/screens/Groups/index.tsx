import { useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ListEmpty } from "../../components/ListEmpty";
import { GroupCard } from "../../components/groupCard";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Rocket", "Rodrigo"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => console.log(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
