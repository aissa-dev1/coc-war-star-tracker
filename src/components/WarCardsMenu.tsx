import { War } from "../types";
import WarCard from "./WarCard";
import SectionTitle from "./helpers/SectionTitle";

const wars: War[] = [
  {
    id: "sdfghsdgsdg-756f-44cb-8711-5d51cf02a9f5",
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
        name: "نخبة العرب",
      },
      {
        id: "#Z652346GGD",
        name: "DZ Kings",
      },
    ],
    isActive: true,
    isPreparationDay: false,
    isBattleDay: true,
    totalStars: 6,
    totalDestruction: 200,
  },
  {
    id: "qsdqsd-756f-44cb-8711-5d51cf02a9f5",
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
        id: "82441f27-qsdqsd-4281-aaf5-4c379d941585",
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
        name: "نخبة العرب",
      },
      {
        id: "#Z652346GGD",
        name: "الموغريب", // hhhhhhhhhhhhhhhhhhhhhhhh
      },
    ],
    isActive: false,
    isPreparationDay: false,
    isBattleDay: false,
    totalStars: 6,
    totalDestruction: 200,
  },
  {
    id: "fgjfgjfj-756f-44cb-8711-5d51cf02a9f5",
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
        name: "Hello World",
      },
      {
        id: "#Z652346GGD",
        name: "نخبة العرب",
      },
    ],
    isActive: false,
    isPreparationDay: false,
    isBattleDay: false,
    totalStars: 6,
    totalDestruction: 200,
  },
];

function WarCardsMenu() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <SectionTitle name="قائمة الحروب" />

      <div className="flex flex-col gap-2">
        {wars.map((war) => (
          <WarCard key={war.id} war={war} />
        ))}
      </div>
    </section>
  );
}

export default WarCardsMenu;
