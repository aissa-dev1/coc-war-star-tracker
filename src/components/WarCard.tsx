import { useMemo } from "react";
import { War } from "../types";
import EarnedStars from "./helpers/EarnedStars";

interface WarCardProps {
  war: War;
}

function WarCard({ war }: WarCardProps) {
  const warStatus = useMemo(() => {
    if (!war.isActive) return "انتهت الحرب";
    if (war.isPreparationDay) return "يوم التجهيزات";
    return "يوم الحرب";
  }, [war]);

  return (
    <div className="flex justify-between p-3 duration-300 bg-white rounded-lg cursor-pointer bg-gradient-to-r hover:from-[#9d4edd]/5 hover:to-[#4895ef]/5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <p className="text-lg font-bold text-blue-500 sm:text-xl font-cairo">{war.clans[0].name}</p>
          <p className="text-base font-semibold sm:text-lg">vs</p>
          <p className="text-lg font-bold text-blue-500 sm:text-xl">{war.clans[1].name}</p>
        </div>

        <div className="flex items-center gap-2">
          {war.isActive && (
            <p className="px-2 py-1 text-sm text-green-500 rounded-lg sm:text-base bg-green-500/20 font-cairo">نشطة</p>
          )}
          <p className="px-2 py-1 text-sm text-blue-500 rounded-lg sm:text-base bg-blue-500/20 font-cairo">
            {warStatus}
          </p>
        </div>
      </div>

      <EarnedStars value={war.totalStars} starClasses="w-14 h-14" contentClasses="pt-0.5 text-base font-bold" />
    </div>
  );
}

export default WarCard;
