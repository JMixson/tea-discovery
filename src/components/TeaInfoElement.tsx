import type { TeaDetails } from "../types";

function TeaInfoElement({ name, image }: TeaDetails) {
  return (
    <div className="grid grid-cols-2">
      <p>Tea Info: {name}</p>
      <img className="h-64 rounded-md object-cover" src={image} alt={name} />
    </div>
  );
}

export default TeaInfoElement;
