import { CROPS_SIZE } from "../../constants";
import { Crop } from "../../types";
import { Beans } from "../crops/Beans/Beans";
import { Chilli } from "../crops/Chilli/Chilli";
import { Corn } from "../crops/Corn/Corn";
import { Pumpkin } from "../crops/Pumpkin/Pumpkin";
import { Quelites } from "../crops/Quelites/Quelites";
import { Tomatillo } from "../crops/Tomatillo/Tomatillo";
import { Tomatoe } from "../crops/Tomatoe/Tomatoe";

const BEANS_TOTAL_CARDS = 6;
const CHILLI_TOTAL_CARDS = 6;
const CORN_TOTAL_CARDS = 16;
const PUMPKIN_TOTAL_CARDS = 5;
const QUELITES_TOTAL_CARDS = 5;
const TOMATILLO_TOTAL_CARDS = 6;
const TOMATOE_TOTAL_CARDS = 6;

export const beansCards = (): Crop[] => {
  const cards = Array.from(Array(BEANS_TOTAL_CARDS), () => {
    return Beans;
  });
  return cards;
};

export const chilliCards = (): Crop[] => {
  const cards = Array.from(Array(CHILLI_TOTAL_CARDS), () => {
    return Chilli;
  });
  return cards;
};

export const cornCards = (): Crop[] => {
  const cards = Array.from(Array(CORN_TOTAL_CARDS), () => {
    return Corn;
  });
  return cards;
};

export const pupmkinCards = (): Crop[] => {
  const cards = Array.from(Array(PUMPKIN_TOTAL_CARDS), () => {
    return Pumpkin;
  });
  return cards;
};

export const quelitesCards = (): Crop[] => {
  const cards = Array.from(Array(QUELITES_TOTAL_CARDS), () => {
    return Quelites;
  });
  return cards;
};

export const tomatilloCards = (): Crop[] => {
  const cards = Array.from(Array(TOMATILLO_TOTAL_CARDS), () => {
    return Tomatillo;
  });
  return cards;
};

export const tomatoeCards = (): Crop[] => {
  const cards = Array.from(Array(TOMATOE_TOTAL_CARDS), () => {
    return Tomatoe;
  });
  return cards;
};

export const emptyCrops = (): string[][] => {
  const cards = Array(CROPS_SIZE / 4).map(() => {
    return ["", "", "", ""];
  });
  return cards;
};