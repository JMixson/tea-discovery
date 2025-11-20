import { useRoute, useLocation } from "wouter";
import StarterElement from "./components/StarterElement";
import TeaInfoElement from "./components/TeaInfoElement";
import ScrollToTop from "./components/ScrollToTop";
import TeaList from "./components/TeaList";
import { useRandomTeaId } from "./hooks/useTeas";

function App() {
  const [isHome] = useRoute("/");
  const [isTeaDetails, params] = useRoute("/tea/:id");
  const [location, navigate] = useLocation();
  const randomTea = useRandomTeaId();

  function handleClick() {
    const randomRoute = `/tea/${randomTea}`;

    if (randomTea !== location) {
      navigate(randomRoute, { replace: true });
    }
  }

  if (!randomTea) navigate("/");

  return (
    <div className="flex flex-col items-center p-3 lg:my-14">
      <ScrollToTop />
      <div className="bg-brown w-full max-w-7xl content-center rounded-md sm:min-h-80">
        {isHome && <StarterElement />}

        {isTeaDetails && <TeaInfoElement id={params.id} />}
      </div>

      <button onClick={handleClick} className="btn mx-auto">
        Discover a New Tea
      </button>

      <TeaList />

      <footer className="m-10">
        All images and tea content are sourced from{" "}
        <a href="https://www.wikipedia.org" target="_blank">
          Wikimedia Foundation
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
