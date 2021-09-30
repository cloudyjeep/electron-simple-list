export const getAlias = (name) => {
  return String(name)
    .split(" ")
    .map((v) => v[0].toUpperCase())
    .splice(0, 2)
    .join("");
};
