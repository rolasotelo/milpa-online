import { CropAndGoodSlots, Good } from "../../types";
import { Cricket } from "../goods/Cricket/Cricket";
import { Coatlicue } from "../goods/Coatlicue/Coatlicue";
import { Huitlacoche } from "../goods/Huitlacoche/Huitlacoche";
import { Maguey } from "../goods/Maguey/Maguey";
import { Manure } from "../goods/Manure/Manure";
import { Shovel } from "../goods/Shovel/Shovel";
import { Tlaloc } from "../goods/Tlaloc/Tlaloc";
import { ROW_SIZE } from "../../constants";

const CRICKET_TOTAL_CARDS = 10;
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

export const cricketCards = (): Good[] => {
  const cards = Array.from(Array(CRICKET_TOTAL_CARDS), () => {
    return Cricket;
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
  const cards = Array.from(Array(ROW_SIZE), () => {
    return [Cricket, undefined, Coatlicue, undefined];
  });
  return cards;
};
