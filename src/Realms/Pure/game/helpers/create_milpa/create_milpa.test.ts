import { create_milpa } from "..";
import { Corn } from "../../cards";

test("should return an array", () => {
  const crop = Corn;
  expect(typeof create_milpa(crop)).toEqual("object");
});
