import { LeaderBoardPlayerState } from "../types";
import LeaderboardCard from "./helpers/LeaderboardCard";
import SectionTitle from "./helpers/SectionTitle";

const leaderboard: LeaderBoardPlayerState[] = [
  {
    id: "#GHFYK2JDSDD",
    name: "CosmicExplorer",
    totalStars: 3,
    totalDestruction: 100,
    destructionPercentageAverage: 100,
    totalAttackTime: 90,
    attackTimeAverage: 90,
    totalAttacksCount: 1,
  },
  {
    id: "#DHFGDFGGDD",
    name: "Wassim",
    totalStars: 2,
    totalDestruction: 80,
    destructionPercentageAverage: 80,
    totalAttackTime: 120,
    attackTimeAverage: 120,
    totalAttacksCount: 1,
  },
  {
    id: "#GHFYSGFDDSS",
    name: "NOT_AISSA",
    totalStars: 2,
    totalDestruction: 80,
    destructionPercentageAverage: 80,
    totalAttackTime: 150,
    attackTimeAverage: 150,
    totalAttacksCount: 1,
  },
];

function Leaderboard() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <SectionTitle name="المتصدرين" />

      <div className="flex gap-2 overflow-x-auto max-w-screen">
        {leaderboard.map((playerState, index) => (
          <LeaderboardCard
            key={playerState.id}
            ranking={index + 1}
            playerState={playerState}
          />
        ))}
      </div>
    </section>
  );
}

export default Leaderboard;
