import classNames from "classnames";
import { LeaderboardCardProps } from "./types";

function LeaderboardCard({ ranking, name, stars }: LeaderboardCardProps) {
  return (
    <div className="flex flex-row justify-between items-center bg-[#f5f5f5] text-black py-4 px-2 rounded">
      <div className="flex flex-row items-center gap-2">
        <p
          className={classNames("flex justify-center items-center w-6 h-6 text-white", {
            "bg-yellow-300": ranking === 1,
            "bg-slate-400": ranking === 2,
            "bg-yellow-800": ranking === 3,
            "bg-purple-700": ranking !== 1 && ranking !== 2 && ranking !== 3,
          })}
        >
          {ranking}
        </p>

        <p className="font-bold">{name}</p>
      </div>

      <p className="text-sm font-bold font-cairo">
        {stars} {stars > 1 ? "نجوم" : "نجمة"}
      </p>
    </div>
  );
}

export default LeaderboardCard;
