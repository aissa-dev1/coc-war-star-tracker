import { War } from "../types";
import EarnedStars from "./helpers/EarnedStars";

interface WarCardProps {
  war: War;
}

function WarCard({ war }: WarCardProps) {
  return (
    <div className="flex flex-row justify-between p-2 text-black bg-white border rounded">
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold">{war.clans[0].name}</p>
        <div className="flex items-center gap-3">
          <EarnedStars value={war.totalStars} starClasses="w-9 h-9" contentClasses="text-sm font-bold" />
        </div>
        {/* // Give Classes
        // Cool
        // Comments rahom fsite hhhhhhhhhhhh */}
        {/*
          we put it in the default *font-bold*
          ya
           its already bold. No.
           why ?
           Yes true. 
           Go to EarnedStars
          */}
      </div>

      <div>
        <p className="text-lg font-bold">{war.clans[1].name}</p>
      </div>
    </div>
  );
}

export default WarCard;
