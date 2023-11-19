export function capitalize(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const remainingString = str.substring(1);

  const capitalizedString = firstLetter + remainingString;
  return capitalizedString;
}
