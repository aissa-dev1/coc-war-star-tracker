import { useEffect, useState } from "react";
import { War } from "../types";
import Loader from "./Loader";
import WarCard from "./WarCard";
import SectionTitle from "./helpers/SectionTitle";
import { getClanWars } from "../api/wars/get-clan-wars";

function WarCardsMenu() {
  const [isLoading, setIsLoading] = useState(true);
  const [wars, setWars] = useState<War[]>([]);

  const fetchData = async () => {
    const data = await getClanWars();
    setWars(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <div className="flex items-center gap-6">
        <SectionTitle name="قائمة الحروب" />
        {isLoading && <Loader />}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {wars.map((war) => (
          <WarCard key={war.id} war={war} />
        ))}
      </div>
    </section>
  );
}

export default WarCardsMenu;
