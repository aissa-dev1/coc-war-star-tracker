import classNames from "classnames";
import Star from "../icons/Star";
import { LeaderBoardPlayerState } from "../../types";

interface LeaderboardCardProps {
  ranking: number;
  playerState: LeaderBoardPlayerState;
}

function LeaderboardCard({ ranking, playerState }: LeaderboardCardProps) {
  return (
    <div className="flex flex-col max-w-full gap-6 p-2 text-black bg-white min-w-64 shrink-0 w-96">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{playerState.name}</p>

        <div
          className={classNames("flex justify-center items-center w-6 h-6 text-white", {
            "bg-yellow-300": ranking === 1,
            "bg-slate-400": ranking === 2,
            "bg-yellow-700": ranking === 3,
            "bg-purple-700": ranking !== 1 && ranking !== 2 && ranking !== 3,
          })}
        >
          {ranking}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="relative w-fit h-fit">
          <Star className="w-10 h-10" />

          <p className="absolute text-sm font-bold -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            {playerState.totalStars}
          </p>
        </div>

        <div className="flex items-center justify-center px-2 py-1 text-sm font-bold text-white bg-red-400 rounded">
          {playerState.destructionPercentageAverage}%
        </div>

        <div className="flex items-center justify-center px-2 py-1 text-sm font-bold text-white bg-blue-400 rounded">
          {playerState.attackTimeAverage}s
        </div>
      </div>
    </div>
  );
}

export default LeaderboardCard;
