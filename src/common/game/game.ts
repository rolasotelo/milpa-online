import { CROPS_HAND_SIZE, GOODS_HAND_SIZE } from "../constants";
import { Crop, Good, Milpa } from "../types";
import {
  beansCards,
  chilliCards,
  cornCards,
  emptyCrops,
  pupmkinCards,
  quelitesCards,
  tomatilloCards,
  tomatoeCards,
} from "./decks/cropsDeck";
import { shuffleDeck } from "./decks/decks";
import {
  cactusCards,
  coatlicueCards,
  emptyGoods,
  magueyCards,
} from "./decks/goodsDeck";

export const newGame = (): {
  cropsDeck: Crop[];
  goodsDeck: Good[];
  emptyMilpa: Milpa;
} => {
  const cropsDeck = [
    ...beansCards(),
    ...chilliCards(),
    ...cornCards(),
    ...pupmkinCards(),
    ...quelitesCards(),
    ...tomatilloCards(),
    ...tomatoeCards(),
  ];

  const goodsDeck = [...cactusCards(), ...coatlicueCards(), ...magueyCards()];
  shuffleDeck(cropsDeck);
  shuffleDeck(goodsDeck);
  const emptyMilpa: Milpa = { crops: emptyCrops(), goods: emptyGoods() };

  return { cropsDeck, goodsDeck, emptyMilpa };
};

export const dealCropsHand = (
  cropsDeck: Crop[]
): {
  cropsHand: Crop[];
  newCropsDeck: Crop[];
  cardsRemainimg: number;
} => {
  const cropHand = cropsDeck.slice(0, CROPS_HAND_SIZE);
  const newCropsDeck = cropsDeck.slice(-CROPS_HAND_SIZE);
  const cardsRemainimg = newCropsDeck.length;
  return { cropsHand: cropHand, newCropsDeck, cardsRemainimg };
};

export const dealGoodsHand = (
  goodsDeck: Good[]
): {
  goodsHand: Good[];
  newGoodsDeck: Good[];
  cardsRemainimg: number;
} => {
  const goodsHand = goodsDeck.slice(0, GOODS_HAND_SIZE);
  const newGoodsDeck = goodsDeck.slice(-GOODS_HAND_SIZE);
  const cardsRemainimg = newGoodsDeck.length;
  return { goodsHand, newGoodsDeck, cardsRemainimg };
};
