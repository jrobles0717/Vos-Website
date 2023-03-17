import "./App.css";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import MailingList from "./components/MailingList";
import MainNavigation from "./components/MainNavigation";
import Videos from "./components/Videos";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Hero />
        <Videos />
        <AboutMe />
        <MailingList />
      </main>
    </>
  );
}

export default App;
