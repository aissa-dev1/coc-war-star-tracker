import Leaderboard from "../components/Leaderboard";
import MainFooter from "../components/MainFooter";
import MainNav from "../components/MainNav";
import ClashofClansBanner from "../components/ClashofClansBanner";
import WarCardsMenu from "../components/WarCardsMenu";

function Home() {
  return (
    <main className="pb-footer">
      <MainNav />

      <header className="container flex flex-col gap-6 p-4 mx-auto sm:p-6">
        <ClashofClansBanner />
        <Leaderboard />
        <WarCardsMenu />
      </header>

      <MainFooter />
    </main>
  );
}

export default Home;
