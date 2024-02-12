import classNames from "classnames";
import Star from "../icons/Star";
import { LeaderBoardPlayerState } from "../../types";
import { formatSeconds } from "../../utils/format-seconds";
import Dot from "../Dot";

interface LeaderboardCardProps {
  ranking: number;
  playerState: LeaderBoardPlayerState;
}

function LeaderboardCard({ ranking, playerState }: LeaderboardCardProps) {
  return (
    <div className="flex flex-col max-w-full gap-4 p-4 text-black bg-white border rounded min-w-64 shrink-0 w-96">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={classNames(
              "flex justify-center items-center w-8 h-8 text-white rounded-full",
              {
                "bg-yellow-300": ranking === 1,
                "bg-slate-400": ranking === 2,
                "bg-yellow-700": ranking === 3,
                "bg-purple-700":
                  ranking !== 1 && ranking !== 2 && ranking !== 3,
              }
            )}
          >
            {ranking}
          </div>
          <p className="text-lg font-bold">{playerState.name}</p>
        </div>

        <div className="relative w-fit h-fit">
          <Star className="w-14 h-14" />

          <p className="absolute font-bold -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            {playerState.totalStars}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-1 p-1.5 rounded bg-gradient-to-r from-[#4895ef]/5 to-[#4cc9f0]/5">
          <h4 className="text-xl font-bold">
            {playerState.destructionPercentageAverage}%
          </h4>
          <div className="flex items-center gap-2">
            <Dot />
            <p className="text-sm text-foreground-700">متوسط التدمير</p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-1 p-2 rounded bg-gradient-to-r from-[#9d4edd]/5 to-[#ff74d4]/5">
          <h4 className="text-xl font-bold">
            {formatSeconds(playerState.attackTimeAverage)}
          </h4>
          <div className="flex items-center gap-2">
            <Dot variant="secondary" />
            <p className="text-sm text-foreground-700">متوسط الوقت</p>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center gap-1 p-1.5 text-sm font-bold text-white bg-red-400 rounded">
          <span>التدمير</span>{" "}
          <span>{playerState.destructionPercentageAverage}%</span>
        </div>

        <div className="flex items-center justify-center gap-1 p-1.5 text-sm font-bold text-white bg-blue-400 rounded">
          <span>الوقت</span>{" "}
          <span>{formatSeconds(playerState.attackTimeAverage)}</span>
        </div> */}
      </div>
    </div>
  );
}

export default LeaderboardCard;
