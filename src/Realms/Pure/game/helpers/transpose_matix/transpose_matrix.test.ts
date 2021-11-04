import { transpose_matrix } from "..";

describe("Transpose matrix", () => {
  describe("When matrix is provided", () => {
    const initialMatrix = [
      ["a", "b", "c", "d"],
      ["a", "b", "c", "d"],
      ["a", "b", "c", "d"],
      ["a", "b", "c", "d"],
    ];
    const transposedMatrix = [
      ["a", "a", "a", "a"],
      ["b", "b", "b", "b"],
      ["c", "c", "c", "c"],
      ["d", "d", "d", "d"],
    ];
    test("then it should return transposed matrix", () => {
      expect(transpose_matrix(initialMatrix)).toEqual(transposedMatrix);
      expect(initialMatrix[0][1]).toEqual("b");
    });
  });
});
