import { useQuery } from "@tanstack/react-query";
import { ChevronsDown } from "lucide-react";

function App() {
  const { data, error, isLoading } = useQuery({
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
        <h1 className="text-center text-4xl">
          Discover a new taste with an exciting new tea!
        </h1>
        {/* <h2>{data}</h2> */}
        <ChevronsDown
          className="mx-auto mt-10 block animate-bounce"
          size={48}
        />
      </div>

      <button className="btn mx-auto">Discover a New Tea</button>

      <div className="grid w-full grid-cols-3 place-items-center gap-3">
        <div>word</div>
        <div>word</div>
        <div>word</div>
        <div>word</div>
        <div>word</div>
        <div>word</div>
      </div>
    </div>
  );
}

export default App;
