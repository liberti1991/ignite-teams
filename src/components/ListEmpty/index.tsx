import { ListEmptyContainer, ListEmptyMessage } from "./styles";

interface IListEmpty {
  message: string;
}

export function ListEmpty({ message }: IListEmpty) {
  return (
    <ListEmptyContainer>
      <ListEmptyMessage>{message}</ListEmptyMessage>
    </ListEmptyContainer>
  );
}
