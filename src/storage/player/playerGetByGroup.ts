import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageSTO";

export async function playerGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    const player: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return player;
  } catch (err) {
    throw err;
  }
}
