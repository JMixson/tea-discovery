import { ChevronsDown } from "lucide-react";

function StarterElement() {
  return (
    <>
      <h1 className="p-5 text-center text-2xl md:text-4xl">
        Discover a new taste with an exciting new tea!
      </h1>
      <ChevronsDown className="mx-auto my-5 block animate-bounce" size={48} />
    </>
  );
}

export default StarterElement;
