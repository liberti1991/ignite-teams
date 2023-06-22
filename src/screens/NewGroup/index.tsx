import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { NewGroupCardIcon, NewGroupContainer, NewGroupContent } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  const [group, groupSet] = useState<string>("");

  function handleNew() {
    navigation.navigate("players", { group: group });
  }

  return (
    <NewGroupContainer>
      <Header showBtn />

      <NewGroupContent>
        <NewGroupCardIcon name="users" />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={groupSet} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
