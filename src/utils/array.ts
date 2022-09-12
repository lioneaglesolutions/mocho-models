export const arrayUnique = <T>(array: T[]): T[] => {
  const uniqueFn = (value: T, index: number, self: T[]) => {
    return self.indexOf(value) === index;
  };

  return array.filter(uniqueFn);
};
