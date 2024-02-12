import { LeaderBoardPlayerState } from "../../types";

export interface SectionTitleProps {
  name: string;
}

export interface LeaderboardCardProps
  extends Omit<LeaderBoardPlayerState, "id"> {
  ranking: number;
}
