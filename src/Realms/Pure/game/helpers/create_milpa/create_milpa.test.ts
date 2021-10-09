import { create_milpa } from "..";
import { Corn } from "../../cards";

test("should return empty array when no parameter is provided", () => {
  const crop = Corn;
  expect(create_milpa()).toEqual([]);
});

test("should return an array filled with one crop", () => {
  const crop = Corn;
  const milpa = create_milpa(crop);
  expect(milpa[0]).toEqual(crop);
  expect(milpa[15]).toEqual(crop);
});
