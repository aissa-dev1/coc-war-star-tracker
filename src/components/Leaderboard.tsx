import LeaderboardCard from "./helpers/LeaderboardCard";
import SectionTitle from "./helpers/SectionTitle";

const leaderboardData: { name: string; stars: number }[] = [
  {
    name: "Youcef dr",
    stars: 6,
  },
  {
    name: "Not Aissa",
    stars: 9,
  },
  {
    name: "CosmicExplorer",
    stars: 7,
  },
  {
    name: "الفنك الجزائري",
    stars: 10,
  },
  {
    name: "التنين المدمر",
    stars: 8,
  },
];

for (let i = 1; i <= 15; i++) {
  leaderboardData.push({ name: `Hello world ${i}`, stars: 0 });
}

function Leaderboard() {
  const sortedLeaderboardData = [...leaderboardData].sort((a, b) => b.stars - a.stars);

  return (
    <section>
      <SectionTitle name="المتصدرين" />

      <div className="flex flex-col gap-2 p-2 mt-1 bg-white">
        {sortedLeaderboardData.map((card, index) => (
          <LeaderboardCard key={index} ranking={index + 1} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Leaderboard;
