import { ChevronsDown } from "lucide-react";

function App() {
  return (
    <div className="mt-14 flex flex-col items-center">
      <div className="bg-brown min-h-80 w-7xl content-center rounded-md">
        <h1 className="text-center text-4xl">
          Discover a new taste with an exciting new tea!
        </h1>
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
