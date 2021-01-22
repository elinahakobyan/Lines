export const findHorizontal = (matrix, row, col, type, group, minLength = 5) => {
  const cell = matrix[row][col + 1];

  if (cell && cell.ball && cell.ball.type === type) {
    group.push(cell);

    return findHorizontal(matrix, row, col + 1, type, group);
  } else {
    return group.length >= minLength ? group : null;
  }
};

export const findVertical = (matrix, row, col, type, group, minLength = 5) => {
  const cell = row + 1 < matrix.length ? matrix[row + 1][col] : null;

  if (cell && cell.ball && cell.ball.type === type) {
    group.push(cell);

    return findVertical(matrix, row + 1, col, type, group);
  } else {
    return group.length >= minLength ? group : null;
  }
};

export const findMainDiagonal = (matrix, row, col, type, group, minLength = 5) => {
  const cell = row + 1 < matrix.length ? matrix[row + 1][col + 1] : null;

  if (cell && cell.ball && cell.ball.type === type) {
    group.push(cell);

    return findMainDiagonal(matrix, row + 1, col + 1, type, group);
  } else {
    return group.length >= minLength ? group : null;
  }
};

export const findSecondaryDiagonal = (matrix, row, col, type, group, minLength = 5) => {
  const cell = row + 1 < matrix.length ? matrix[row + 1][col - 1] : null;

  if (cell && cell.ball && cell.ball.type === type) {
    group.push(cell);

    return findSecondaryDiagonal(matrix, row + 1, col - 1, type, group);
  } else {
    return group.length >= minLength ? group : null;
  }
};
