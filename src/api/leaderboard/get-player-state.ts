import { PlayerState } from "../../types";
import { api } from "..";

export async function getPlayerState(): Promise<PlayerState[]> {
  try {
    const res = await api.client.get("/leaderboard/clan/%23GHFYK2JFFS");
    return res.data;
  } catch (error) {
    return [];
  }
}
