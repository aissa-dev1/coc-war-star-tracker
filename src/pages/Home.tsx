import CurrentWarStatus from "../components/CurrentWarStatus";
import Leaderboard from "../components/Leaderboard";
import MainFooter from "../components/MainFooter";
import MainNav from "../components/MainNav";
import WarCard from "../components/WarCard";
import WelcomeMessage from "../components/WelcomeMessage";
import { PlayerLeaderBoardState, War } from "../types";

const wars: War[] = [
  {
    id: "5a2739ac-756f-44cb-8711-5d51cf02a9f5",
    attacks: [
      {
        id: "e9615bc0-c155-4f97-b4d4-622688c06664",
        starsEarned: 3,
        destructionPercentage: 100,
        durationSeconds: 90,
        attacker: {
          id: "#GHFYK2JDSDD",
          name: "CosmicExplorer",
        },
        defender: {
          id: "#GHFYSDSDSQS",
          name: "ABDOU_DZ",
        },
      },
      {
        id: "82441f27-bb46-4281-aaf5-4c379d941585",
        starsEarned: 3,
        destructionPercentage: 100,
        durationSeconds: 90,
        attacker: {
          id: "#GHFYSGFDDSS",
          name: "NOT_AISSA",
        },
        defender: {
          id: "#GGFCCFDDSD",
          name: "Youcef Dr",
        },
      },
    ],
    startedAt: "2024-02-11T11:52:16.876Z",
    clans: [
      {
        id: "#GHFYK2JFFS",
        name: "DZ",
      },
      {
        id: "#Z652346GGD",
        name: "US",
      },
    ],
    isActive: true,
    isPreparationDay: false,
    isBattleDay: true,
    totalStars: 6,
    totalDestruction: 200,
  },
];
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
];

function Home() {
  return (
    <main>
      <MainNav />

      {/* <header className="container mx-auto mt-0 sm:mt-1">
        <WelcomeMessage />
      </header>

      <header className="container flex flex-col gap-2 p-2 mx-auto mt-1 text-white bg-purple-700 overflow-y-auto max-h-[calc(100vh-150px)] sm:max-h-[calc(100vh-160px)]">
        <CurrentWarStatus />

        <Leaderboard />
      </header> */}

      <div className="flex gap-3 p-6">
        {leaderboard.map((playerState) => (
          <div key={playerState.id} className="bg-lime-500">
            {playerState.name}
          </div>
        ))}
      </div>

      <div className="p-6">
        {wars.map((war) => (
          <WarCard key={war.id} war={war} />
        ))}
      </div>

      <MainFooter />
    </main>
  );
}

export default Home;
