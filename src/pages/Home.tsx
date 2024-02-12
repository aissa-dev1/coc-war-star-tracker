import Leaderboard from "../components/Leaderboard";
import MainFooter from "../components/MainFooter";
import MainNav from "../components/MainNav";
import ClashofClansBanner from "../components/ClashofClansBanner";
import { War } from "../types";

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

function Home() {
  return (
    <main>
      <MainNav />

      <header className="container flex flex-col gap-6 p-4 mx-auto sm:p-6">
        <ClashofClansBanner />
        <Leaderboard />
      </header>

      <MainFooter />
    </main>
  );
}

export default Home;
