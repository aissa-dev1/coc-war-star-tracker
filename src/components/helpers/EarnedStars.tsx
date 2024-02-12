import { cn } from "../../utils/cn";
import Star from "../icons/Star";

interface EarnedStarsProps {
  value: number;
  starClasses?: string;
  contentClasses?: string;
}

function EarnedStars({ value, starClasses = "", contentClasses = "" }: EarnedStarsProps) {
  return (
    <div className="relative w-fit h-fit">
      <Star className={cn("w-14 h-14", { [starClasses]: Boolean(starClasses) })} />

      <p
        className={cn("absolute font-bold -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2", {
          [contentClasses]: Boolean(contentClasses),
        })}
      >
        {value}
      </p>
    </div>
  );
}

export default EarnedStars;
