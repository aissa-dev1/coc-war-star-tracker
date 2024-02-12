export interface SectionTitleProps {
  name: string;
}

export interface CurrentWarStatusCardProps {
  myClan?: true;
  name: string;
  stars: number;
  totalDestruction: number;
}

export interface LeaderboardCardProps {
  ranking: number;
  name: string;
  stars: number;
}
