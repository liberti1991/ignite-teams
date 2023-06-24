import { playerGetByGroup } from "./playerGetByGroup";

export async function playerGetByGroupAnPlayers(group: string, team: string) {
  try {
    const storage = await playerGetByGroup(group);

    const players = storage.filter((el) => el.team === team);

    return players;
  } catch (err) {
    throw err;
  }
}
