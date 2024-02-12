import CurrentWarStatus from "../components/CurrentWarStatus";
import Leaderboard from "../components/Leaderboard";
import MainFooter from "../components/MainFooter";
import MainNav from "../components/MainNav";
import WelcomeMessage from "../components/WelcomeMessage";

function Root() {
  return (
    <main>
      <MainNav />

      <header className="container mx-auto mt-0 sm:mt-1">
        <WelcomeMessage />
      </header>

      <header className="container flex flex-col gap-2 p-2 mx-auto mt-1 text-white bg-purple-700 overflow-y-auto max-h-[calc(100vh-150px)] sm:max-h-[calc(100vh-160px)]">
        <CurrentWarStatus />

        <Leaderboard />
      </header>

      <MainFooter />
    </main>
  );
}

export default Root;
