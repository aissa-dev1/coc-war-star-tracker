import Leaderboard from "../components/Leaderboard";
import MainNav from "../components/MainNav";
import ClashofClansBanner from "../components/ClashofClansBanner";
import WarCardsMenu from "../components/WarCardsMenu";

function Home() {
  return (
    <main>
      <MainNav />

      <header className="container flex flex-col gap-6 p-4 mx-auto sm:p-8">
        <ClashofClansBanner />
        <Leaderboard />
        <WarCardsMenu />
      </header>
    </main>
  );
}

export default Home;
