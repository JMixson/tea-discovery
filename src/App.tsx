import { Route } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Tea, TeaDetails } from "./types";
import StarterElement from "./components/StarterElement";
import TeaInfoElement from "./components/TeaInfoElement";
import TeaCard from "./components/TeaCard";

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
    <div className="my-14 flex flex-col items-center">
      <div className="bg-brown min-h-80 w-7xl content-center rounded-md">
        <Route path="/" component={StarterElement} />

        <Route path="/tea/:id">
          {(params) => {
            const tea = teas.find((tea: TeaDetails) => tea.id === params.id);

            return <TeaInfoElement {...tea} />;
          }}
        </Route>
      </div>

      <button className="btn mx-auto">Discover a New Tea</button>

      <section className="grid w-7xl grid-cols-4 place-items-center gap-5">
        {teas.map((tea: Tea) => (
          <TeaCard key={tea.id} id={tea.id} name={tea.name} image={tea.image} />
        ))}
      </section>
    </div>
  );
}

export default App;
