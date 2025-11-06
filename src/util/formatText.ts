export function capitalize(text: string) {
  if (!text) return text;

  return text.slice(0, 1).toUpperCase() + text.slice(1);
}
