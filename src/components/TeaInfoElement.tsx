import { useTeaById } from "../hooks/useTeas";
import { capitalize } from "../util/formatText";

function TeaInfoElement({ id }: { id: string }) {
  const { tea, error, isLoading } = useTeaById(id);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2">
      <h1 className="text-4xl">{tea.name}</h1>
      <h2 className="text-2xl sm:justify-self-end">Origin: {tea.origin}</h2>

      <img
        className="h-96 w-full rounded-md object-cover"
        src={tea.image}
        alt={tea.name}
      />

      <div className="self-center text-xl">
        <p className="mb-2">
          <strong>Description:</strong> {tea.description}
        </p>
        <p className="mb-2">
          <strong>Taste:</strong> {capitalize(tea.tasteDescription)}
        </p>
        <p className="mb-2">
          <strong>Tea Type:</strong> {capitalize(tea.type)}
        </p>
        <p className="mb-2">
          <strong>Caffeine Amount:</strong> {tea.caffeine} (
          {capitalize(tea.caffeineLevel)})
        </p>
        <p className="mb-2">
          <strong>Main Ingredients:</strong> {capitalize(tea.mainIngredients)}
        </p>
        <p className="mb-2">
          <strong>Color:</strong> {capitalize(tea.colorDescription)}
        </p>
      </div>

      <p>
        <strong>Source:</strong>{" "}
        <a
          className="underline hover:no-underline"
          href={tea.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tea.source}
        </a>
      </p>
    </div>
  );
}

export default TeaInfoElement;
