import AboutMe from "./components/view/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/view/Hero";
import MailingList from "./components/view/MailingList";
import MainNavigation from "./components/MainNavigation";
import Remix from "./components/view/Remix";
import Videos from "./components/view/Videos";

function App() {
  return (
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
  );
}

export default App;
