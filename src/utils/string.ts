// import { snakeCase as baseSnakeCase } from "snake-case";

export const kebab = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

// export const slugify = (str: string): string => {};

export const camel = (str: string): string => {
  return str
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const sentence = (str: string | null): string => {
  if (!str) {
    return "";
  }
  return str.replaceAll("-", " ").replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// export const snakeCase = baseSnakeCase;

export const isNumeric = (n: string): boolean => {
  return !isNaN(parseFloat(n)) && isFinite(parseFloat(n));
};
