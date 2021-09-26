import { CROPS_HAND_SIZE, GOODS_HAND_SIZE } from "../constants";
import { Crop, Good, Milpa } from "../types";
import {
  beansCards,
  blueCornCards,
  chilliCards,
  cornCards,
  emptyCrops,
  pupmkinCards,
  quelitesCards,
  redCornCards,
  sampleCrops,
  tomatilloCards,
  tomatoeCards,
} from "./decks/cropsDeck";
import { shuffleDeck } from "./decks/decks";
import {
  cricketCards,
  coatlicueCards,
  emptyGoods,
  huitlacocheCards,
  magueyCards,
  manureCards,
  shovelCards,
  tlalocCards,
  sampleGoods,
} from "./decks/goodsDeck";

export const newGame = (): {
  cropsDeck: Crop[];
  goodsDeck: Good[];
  emptyMilpa: Milpa;
  sampleMilpa: Milpa;
} => {
  const cropsDeck = [
    ...beansCards(),
    ...chilliCards(),
    ...cornCards(),
    ...pupmkinCards(),
    ...quelitesCards(),
    ...tomatilloCards(),
    ...tomatoeCards(),
    ...blueCornCards(),
    ...redCornCards(),
  ];

  const goodsDeck = [
    ...cricketCards(),
    ...coatlicueCards(),
    ...magueyCards(),
    ...shovelCards(),
    ...huitlacocheCards(),
    ...tlalocCards(),
    ...manureCards(),
  ];
  shuffleDeck(cropsDeck);
  shuffleDeck(goodsDeck);
  const emptyMilpa: Milpa = { crops: emptyCrops(), goods: emptyGoods() };
  const sampleMilpa: Milpa = { crops: sampleCrops(), goods: sampleGoods() };

  return { cropsDeck, goodsDeck, emptyMilpa, sampleMilpa };
};

export const dealCropsHand = (
  cropsDeck: Crop[]
): {
  cropsHand: Crop[];
  newCropsDeck: Crop[];
  cardsRemainimg: number;
} => {
  const cropHand = cropsDeck.slice(0, CROPS_HAND_SIZE);
  const newCropsDeck = cropsDeck.slice(-cropsDeck.length + CROPS_HAND_SIZE);
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
  const newGoodsDeck = goodsDeck.slice(-goodsDeck.length + GOODS_HAND_SIZE);
  const cardsRemainimg = newGoodsDeck.length;
  return { goodsHand, newGoodsDeck, cardsRemainimg };
};
