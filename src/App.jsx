import "./App.css";

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
      </main>
    </>
  );
}

export default App;
