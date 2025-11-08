import { useQuery } from "@tanstack/react-query";
import type { TeaDetails } from "../types";

export function useTeas() {
  return useQuery({
    queryKey: ["teaData"],
    queryFn: async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/JMixson/tea-discovery/main/public/data/teas.json",
      );
      return await response.json();
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}

export function useTeaById(id: string) {
  const { data: teas, ...rest } = useTeas();
  const tea = teas?.find((t: TeaDetails) => t.id === id);

  return { tea, ...rest };
}

export function useRandomTeaId() {
  const { data: teas } = useTeas();

  if (!teas || teas.length === 0) return 0;

  const randomNum = Math.floor(Math.random() * teas.length);

  return teas[randomNum].id;
}
