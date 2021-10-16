import { chain, times } from "underscore";
import { create_stack_of_copied_cards } from "..";
import { DeckDefinition } from "../../../types";

export const create_deck = <T>(
  deckdefinition: ReadonlyArray<DeckDefinition<T>>
): ReadonlyArray<T> => {
  const unflattenedDeck = times(deckdefinition.length, (iteration) => {
    const index = iteration;
    const card = deckdefinition[index].card;
    const total = deckdefinition[index].total;
    return create_stack_of_copied_cards(card, total);
  });
  const deck = chain(unflattenedDeck).flatten().shuffle().value();
  return deck;
};
