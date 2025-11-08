import { memo } from "react";
import type { Tea } from "../types";
import { Link } from "wouter";

function TeaCard({ id, name, image }: Tea) {
  return (
    <article className="w-full rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-none">
      <Link href={`/tea/${id}`}>
        <img
          className="block h-64 w-full rounded-t-md object-cover"
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
        />
        <div className="p-4">
          <h3 className="text-center text-xl font-bold">{name}</h3>
        </div>
      </Link>
    </article>
  );
}

export default memo(TeaCard);
