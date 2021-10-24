export const create_stack_of_copied_cards = <T>(
  card: T,
  total: number
): ReadonlyArray<T> => {
  const cards = Array.from(Array(total), () => {
    return { ...card };
  });
  return cards;
};
