import { useEffect, useState } from "react";
import { PlayerState } from "../types";
import LeaderboardCard from "./helpers/LeaderboardCard";
import SectionTitle from "./helpers/SectionTitle";
import { getPlayerState } from "../api/leaderboard/get-player-state";
import Loader from "./Loader";

function Leaderboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [leaderBoardData, setLeaderBoardData] = useState<PlayerState[]>([]);

  const fetchData = async () => {
    const data = await getPlayerState();
    setLeaderBoardData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <div className="flex items-center gap-6">
        <SectionTitle name="قائمة المتصدرين" />
        {isLoading && <Loader />}
      </div>

      <div className="flex gap-2 overflow-x-auto max-w-screen no-scrollbar">
        {leaderBoardData.map((playerState, index) => (
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
