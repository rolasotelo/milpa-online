import { CropAndGoodSlots, Good } from "../../types";
import { Cactus } from "../goods/Cactus/Cactus";
import { Coatlicue } from "../goods/Coatlicue/Coatlicue";
import { Huitlacoche } from "../goods/Huitlacoche/Huitlacoche";
import { Maguey } from "../goods/Maguey/Maguey";
import { Manure } from "../goods/Manure/Manure";
import { Shovel } from "../goods/Shovel/Shovel";
import { Tlaloc } from "../goods/Tlaloc/Tlaloc";

const CACTUS_TOTAL_CARDS = 10;
const COATLICUE_TOTAL_CARDS = 10;
const MAGUEY_TOTAL_CARDS = 10;
const MANURE_TOTAL_CARDS = 5;
const SHOVEL_TOTAL_CARDS = 5;
const HUITLACOCHE_TOTAL_CARDS = 5;
const TLALOC_TOTAL_CARDS = 5;

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

export const shovelCards = (): Good[] => {
  const cards = Array.from(Array(SHOVEL_TOTAL_CARDS), () => {
    return Shovel;
  });
  return cards;
};

export const huitlacocheCards = (): Good[] => {
  const cards = Array.from(Array(HUITLACOCHE_TOTAL_CARDS), () => {
    return Huitlacoche;
  });
  return cards;
};

export const tlalocCards = (): Good[] => {
  const cards = Array.from(Array(TLALOC_TOTAL_CARDS), () => {
    return Tlaloc;
  });
  return cards;
};

export const manureCards = (): Good[] => {
  const cards = Array.from(Array(MANURE_TOTAL_CARDS), () => {
    return Manure;
  });
  return cards;
};

export const emptyGoods = (): CropAndGoodSlots => {
  const cards = Array.from(Array(4), () => {
    return [undefined, undefined, undefined, undefined];
  });
  return cards;
};
