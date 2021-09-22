import { GOODS_SIZE } from "../../constants";
import { Good } from "../../types";
import { Maguey } from "../goods/Maguey/Maguey";

const MAGUEY_TOTAL_CARDS = 50;

export const magueyCards = (): Good[] => {
  const cards = Array(MAGUEY_TOTAL_CARDS).map(() => {
    return Maguey;
  });
  return cards;
};

export const emptyGoods = (): string[][] => {
  const cards = Array(GOODS_SIZE / 4).map(() => {
    return ["", "", "", ""];
  });
  return cards;
};
