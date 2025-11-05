import type { Tea } from "../types";

function TeaCard({ id, name, image }: Tea) {
  return (
    <article className="w-full rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-none">
      <a href={`/?tea=${id}`}>
        <img
          className="h-64 w-full rounded-t-md object-cover"
          src={image}
          alt={name}
        />
        <div className="p-4">
          <h3 className="text-center text-xl font-bold">{name}</h3>
        </div>
      </a>
    </article>
  );
}

export default TeaCard;
