import { War } from "../types";

interface WarCardProps {
  war: War;
}

function WarCard({ war }: WarCardProps) {
  return <div>{war.totalStars}</div>;
}

export default WarCard;
