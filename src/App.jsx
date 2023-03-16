import "./App.css";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
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
      </main>
    </>
  );
}

export default App;
