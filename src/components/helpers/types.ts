import { PlayerLeaderBoardState } from "../../types";

export interface SectionTitleProps {
  name: string;
}

export interface LeaderboardCardProps extends Omit<PlayerLeaderBoardState, "id"> {
  ranking: number;
}
