import "./App.css";

import Hero from "./components/Hero";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
