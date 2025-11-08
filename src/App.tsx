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

  return (
    <div className="my-14 flex flex-col items-center">
      <ScrollToTop />
      <div className="bg-brown min-h-80 w-7xl content-center rounded-md">
        {isHome && <StarterElement />}

        {isTeaDetails && <TeaInfoElement id={params.id} />}
      </div>

      <button onClick={handleClick} className="btn mx-auto">
        Discover a New Tea
      </button>

      <TeaList />
    </div>
  );
}

export default App;
