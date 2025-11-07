import { useTeas } from "../hooks/useTeas";
import TeaCard from "./TeaCard";
import type { Tea } from "../types";

function TeaList() {
  const { data: teas, error, isLoading } = useTeas();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <section className="grid w-7xl grid-cols-4 place-items-center gap-5">
        {teas.map((tea: Tea) => (
          <TeaCard key={tea.id} id={tea.id} name={tea.name} image={tea.image} />
        ))}
      </section>
    </>
  );
}

export default TeaList;
