import AboutMe from "./view/AboutMe";
import AosInitializer from "./components/AosInitializer";
import Footer from "./components/Footer";
import Hero from "./view/Hero";
import MailingList from "./view/MailingList";
import MainNavigation from "./components/MainNavigation";
import Remix from "./view/Remix";
import Videos from "./view/Videos";

function App() {
  return (
    <AosInitializer>
      <>
        <MainNavigation />
        <main>
          <Hero />
          <Remix />
          <Videos />
          <AboutMe />
          <MailingList />
        </main>
        <Footer />
      </>
    </AosInitializer>
  );
}

export default App;
