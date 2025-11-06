import { ChevronsDown } from "lucide-react";

function StarterElement() {
  return (
    <>
      <h1 className="text-center text-4xl">
        Discover a new taste with an exciting new tea!
      </h1>
      <ChevronsDown className="mx-auto mt-10 block animate-bounce" size={48} />
    </>
  );
}

export default StarterElement;
