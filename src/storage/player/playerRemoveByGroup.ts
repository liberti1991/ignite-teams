import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playerGetByGroup(group);

    const filtered = storage.filter((el) => el.name !== playerName);

    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (err) {
    throw err;
  }
}
