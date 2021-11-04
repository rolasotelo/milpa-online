export const transpose_matrix = <T>(matrix: T[][]) => {
  let [row] = matrix.slice();
  return row.map((value, column) => matrix.map((row) => row[column]));
};
