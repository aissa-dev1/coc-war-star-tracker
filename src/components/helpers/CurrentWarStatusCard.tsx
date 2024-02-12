import { CurrentWarStatusCardProps } from "./types";

function CurrentWarStatusCard({ myClan, name, stars, totalDestruction }: CurrentWarStatusCardProps) {
  return (
    <div className="p-2 text-black bg-white rounded">
      <p className="text-lg font-medium font-cairo">{myClan ? "قبيلتي" : "قبيلة العدو"}</p>

      <div className="flex flex-col gap-1 mt-2">
        <p className="font-medium font-cairo">
          الاسم: <span className="text-sm font-bold">{name}</span>
        </p>

        <p className="font-medium font-cairo">
          النجوم: <span className="text-sm font-bold">{stars}</span>
        </p>

        <p className="font-medium font-cairo">
          الدمار: <span className="text-sm font-bold">{totalDestruction}%</span>
        </p>
      </div>
    </div>
  );
}

export default CurrentWarStatusCard;
