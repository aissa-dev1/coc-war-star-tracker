import { PlayerLeaderBoardState } from "../types";
import LeaderboardCard from "./helpers/LeaderboardCard";
import SectionTitle from "./helpers/SectionTitle";

const leaderboard: PlayerLeaderBoardState[] = [
  {
    id: "#GHFYK2JDSDD",
    name: "CosmicExplorer",
    totalStars: 3,
    totalDestruction: 100,
    totalAttackTime: 90,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 120,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 150,
  },
  {
    id: "#GHFYK2JDSDD",
    name: "CosmicExplorer",
    totalStars: 3,
    totalDestruction: 100,
    totalAttackTime: 90,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 120,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 150,
  },
  {
    id: "#GHFYK2JDSDD",
    name: "CosmicExplorer",
    totalStars: 3,
    totalDestruction: 100,
    totalAttackTime: 90,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 120,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 150,
  },
  {
    id: "#GHFYK2JDSDD",
    name: "CosmicExplorer",
    totalStars: 3,
    totalDestruction: 100,
    totalAttackTime: 90,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 120,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 150,
  },
  {
    id: "#GHFYK2JDSDD",
    name: "CosmicExplorer",
    totalStars: 3,
    totalDestruction: 100,
    totalAttackTime: 90,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 120,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 150,
  },
  {
    id: "#GHFYK2JDSDD",
    name: "CosmicExplorer",
    totalStars: 3,
    totalDestruction: 100,
    totalAttackTime: 90,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 120,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 150,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 120,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    totalAttackTime: 150,
  },
];

function Leaderboard() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle name="المتصدرين" />

      <div className="flex flex-row gap-2 overflow-x-auto max-w-screen">
        {leaderboard.map((player, index) => (
          <LeaderboardCard key={player.id} ranking={index + 1} {...player} />
        ))}
      </div>
    </section>
  );
}

export default Leaderboard;
