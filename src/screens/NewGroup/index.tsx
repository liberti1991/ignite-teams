import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { NewGroupCardIcon, NewGroupContainer, NewGroupContent } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  const [group, groupSet] = useState<string>("");

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Novo Grupo", "informe o nome da turma");
        return;
      }

      await groupCreate(group);

      navigation.navigate("players", { group: group });
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("Novo Grupo", err.message);
      } else {
        Alert.alert("Novo Grupo", "Nao foi possível criar um novo grupo");
        console.log(err);
      }
    }
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
