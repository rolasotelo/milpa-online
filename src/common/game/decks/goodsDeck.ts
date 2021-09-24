import { GOODS_SIZE } from "../../constants";
import { CropAndGoodSlots, Good } from "../../types";
import { Cactus } from "../goods/Cactus/Cactus";
import { Coatlicue } from "../goods/Coatlicue/Coatlicue";
import { Maguey } from "../goods/Maguey/Maguey";

const CACTUS_TOTAL_CARDS = 10;
const COATLICUE_TOTAL_CARDS = 20;
const MAGUEY_TOTAL_CARDS = 20;

export const magueyCards = (): Good[] => {
  const cards = Array.from(Array(MAGUEY_TOTAL_CARDS), () => {
    return Maguey;
  });
  return cards;
};

export const cactusCards = (): Good[] => {
  const cards = Array.from(Array(CACTUS_TOTAL_CARDS), () => {
    return Cactus;
  });
  return cards;
};

export const coatlicueCards = (): Good[] => {
  const cards = Array.from(Array(COATLICUE_TOTAL_CARDS), () => {
    return Coatlicue;
  });
  return cards;
};

export const emptyGoods = (): CropAndGoodSlots => {
  const cards = Array.from(Array(4), () => {
    return [undefined, undefined, undefined, undefined];
  });
  return cards;
};
