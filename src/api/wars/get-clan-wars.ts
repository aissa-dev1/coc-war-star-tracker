import { War } from "../../types";
import { api } from "..";

export async function getClanWars(): Promise<War[]> {
  try {
    const res = await api.client.get("/wars", {
      params: { clanId: "#GHFYK2JFFS" },
    });
    return res.data;
  } catch (error) {
    return [];
  }
}
