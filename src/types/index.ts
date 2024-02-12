export interface Clan {
  id: string;
  name: string;
}

export interface Player {
  id: string;
  name: string;
}

export interface War {
  id: string;
  clans: Clan[];
  attacks: Attack[];
  totalStars: number;
  totalDestruction: number;
  isActive: boolean;
  isBattleDay: boolean;
  isPreparationDay: boolean;
  startedAt: string;
}

export interface Attack {
  id: string;
  attacker: Player;
  defender: Player;
  starsEarned: number;
  destructionPercentage: number;
  durationSeconds: number;
}

export interface LeaderBoardPlayerState {
  id: string;
  name: string;
  totalStars: number;
  totalDestruction: number;
  destructionPercentageAverage: number;
  totalAttackTime: number;
  attackTimeAverage: number;
  totalAttacksCount: number;
}
