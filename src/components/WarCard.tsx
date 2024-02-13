import { War } from "../types";
import EarnedStars from "./helpers/EarnedStars";
import { cn } from "../utils/cn";

function createWarStatus(war: War): WarStatusProps {
  if (!war.isActive) {
    return {
      content: "انتهت الحرب",
      classes: "text-red-500 bg-red-500/10",
    };
  }
  if (war.isPreparationDay) {
    return {
      content: "يوم التجهيزات",
      classes: "text-green-500 bg-green-500/10",
    };
  }
  return {
    content: "يوم الحرب",
    classes: "text-blue-500 bg-blue-500/10",
  };
}

interface WarStatusProps {
  content: string;
  classes: string;
}

interface WarCardProps {
  war: War;
}

function WarCard({ war }: WarCardProps) {
  const warStatus = createWarStatus(war);

  return (
    <div className="flex border flex-col justify-between p-4 gap-4 duration-300 bg-white rounded-lg cursor-pointer bg-gradient-to-r hover:from-[#9d4edd]/5 hover:to-[#4895ef]/5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-bold sm:text-xl font-cairo">
          {war.clans[0].name}
        </p>
        <p className="text-base font-semibold text-blue-500 sm:text-lg">vs</p>
        <p className="text-lg font-bold sm:text-xl">{war.clans[1].name}</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <EarnedStars
          value={war.totalStars}
          starClasses="w-14 h-14"
          contentClasses="pt-0.5 text-base font-bold"
        />
        <div className="flex items-center gap-4">
          {war.isActive && (
            <p className="px-4 py-2 text-sm text-green-500 rounded-lg sm:text-base bg-green-500/20 font-cairo">
              نشطة
            </p>
          )}
          <p
            className={cn(
              "px-4 py-2 text-sm rounded-lg sm:text-base font-cairo",
              { [warStatus.classes]: true }
            )}
          >
            {warStatus.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WarCard;
