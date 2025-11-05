import { useQuery } from "@tanstack/react-query";
import StarterElement from "./components/StarterElement";
import type { Tea } from "./types";

function App() {
  const {
    data: teas,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["teaData"],
    queryFn: async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/JMixson/tea-discovery/main/public/data/teas.json",
      );
      return await response.json();
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mt-14 flex flex-col items-center">
      <div className="bg-brown min-h-80 w-7xl content-center rounded-md">
        <StarterElement />
      </div>

      <button className="btn mx-auto">Discover a New Tea</button>

      <div className="grid w-full grid-cols-3 place-items-center gap-3">
        {teas.map((tea: Tea) => (
          <div key={tea.id}>{tea.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
