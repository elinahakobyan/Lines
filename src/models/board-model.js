import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';
import { BALLS, BoardDimension, entryBallsCount } from '../constants';
import sampleSize from 'lodash.samplesize';
import sample from 'lodash.sample';
import { findHorizontal, findMainDiagonal, findSecondaryDiagonal, findVertical, contains } from '../utils';
import chunk from 'lodash.chunk';
import { store } from './store';

export class BoardModel extends ObservableModel {
  constructor(config) {
    super('BoardModel');
    this.config = config;
    this._cells = null;
    this._combinations = [];
    this._score = 0;
    this._gameOver = false;
    this._nextBalls = false;
    this.makeObservable();
  }

  get cells() {
    return this._cells;
  }

  get gameOver() {
    return this._gameOver;
  }

  get activeCell() {
    return this._cells.find((cell) => cell.isActive);
  }

  get selectedCell() {
    return this._cells.find((cell) => cell.isSelected);
  }

  get score() {
    return this._score;
  }

  get nextBalls() {
    return this._nextBalls;
  }

  getEmptyCells(count) {
    const emptyCells = sampleSize(
      this._cells.filter((cell) => cell.isEmpty),
      count
    );

    return emptyCells;
  }

  getCellByUuid(uuid) {
    return this._cells.find((cell) => cell.uuid === uuid);
  }

  setBallsIntoCells(count) {
    const emptyCells = this.getEmptyCells(count);
    emptyCells.forEach((cell) => {
      cell.addBall(sample(BALLS));
    });
    this.checkMatch();
  }

  setNextBallsIntoCells(balls) {
    const emptyCells = this.getEmptyCells(balls.length);
    emptyCells.forEach((cell, index) => {
      cell.addBall(balls[index]);
      this._nextBalls = !this._nextBalls;
    });
    this.checkMatch();
  }

  initialize() {
    const { entryBallsCount } = this.config;
    this._initCells();
    this.setBallsIntoCells(entryBallsCount);
  }

  _initCells() {
    const cells = [];
    const { boardDimension } = this.config;
    const gap = 10;
    for (let i = 0; i < boardDimension; i++) {
      for (let j = 0; j < boardDimension; j++) {
        const cell = new CellModel(i, j);
        cells.push(cell);
      }
    }
    this._cells = cells;
  }

  checkMatch() {
    this._updateCombinations();
    if (this._combinations.length) {
      this._destroyBalls();
    }
    this.checkForGameOver();
  }

  _updateCombinations() {
    const { boardDimension } = this.config;

    this._combinations.length = 0;
    this.cells2D = chunk(this._cells, boardDimension);
    for (let i = 0; i < this.cells2D.length; i++) {
      for (let j = 0; j < this.cells2D[i].length; j++) {
        const cell = this.cells2D[i][j];

        if (cell.ball) {
          const md = findMainDiagonal(this.cells2D, i, j, cell.ball.type, [cell]);
          if (md) {
            if (!this._comboAlreadyExists(md)) {
              this._combinations.push(md);
            }
          }

          const sd = findSecondaryDiagonal(this.cells2D, i, j, cell.ball.type, [cell]);
          if (sd) {
            if (!this._comboAlreadyExists(sd)) {
              this._combinations.push(sd);
            }
          }

          const h = findHorizontal(this.cells2D, i, j, cell.ball.type, [cell]);
          if (h) {
            if (!this._comboAlreadyExists(h)) {
              this._combinations.push(h);
            }
          }

          const v = findVertical(this.cells2D, i, j, cell.ball.type, [cell]);
          if (v) {
            if (!this._comboAlreadyExists(v)) {
              this._combinations.push(v);
            }
          }
        }
      }
    }
  }

  _comboAlreadyExists(combo) {
    const comboString = combo.map((cell) => `${cell.row}.${cell.col}`);
    for (let i = 0; i < this._combinations.length; i++) {
      const c = this._combinations[i].map((cell) => `${cell.row}.${cell.col}`);
      if (contains(c, comboString)) {
        return true;
      }
    }

    return false;
  }

  _checkSecondaryDiagonalCombos() {
    const { boardDimension } = this.config;
    this.cells2D = chunk(this._cells, boardDimension);

    for (let i = 0; i < this.cells2D.length; i++) {
      for (let j = 0; j < this.cells2D[i].length; j++) {
        const cell = this.cells2D[i][j];

        if (cell.ball) {
          const { group } = findSecondaryDiagonal(this.cells2D, i, j, cell.ball.type, [cell]);
          if (group) {
            this._combinations.push(group);
          }
        }
      }
    }
  }

  _destroyBalls() {
    this._combinations.forEach((combo) => {
      combo.forEach((cell, index) => {
        setTimeout(() => {
          cell.removeBall();
          this._score += 10;
        }, index * 80 + 300);
      });
    });
  }

  moveBall(from, to, resolve) {
    const { boardDimension, spawnBallsCount } = this.config;
    this.cells2D = chunk(this._cells, boardDimension);

    const path = this._getPath(from, to);

    if (path.length > 0) {
      let i = 1;
      const ball = from.removeBall();

      const interval = setInterval(() => {
        const cell = this.cells2D[path[i][0]][path[i][1]];
        if ([path[i - 1]]) {
          const prevcell = this.cells2D[path[i - 1][0]][path[i - 1][1]];
          prevcell.deleteBall();
        }
        cell.setBall(ball.type);

        i++;
        if (i >= path.length) {
          to.deleteBall();
          to.addBall(ball.type);
          clearInterval(interval);
          this.checkForGameOver();
          resolve();
        }
      }, 100);
    }
    if (path.length === 0) {
    }
  }

  _getMatrix() {
    const { boardDimension } = this.config;
    this.cells2D = chunk(this._cells, boardDimension);

    const matrix = [];

    for (let i = 0; i < boardDimension; i++) {
      matrix[i] = [];
      for (let j = 0; j < boardDimension; j++) {
        if (this.cells2D[j][i].ball) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  }

  _getPath(from, to) {
    const { row: fromRow, col: fromCol } = from;
    const { row: toRow, col: toCol } = to;

    const matrix = this._getMatrix();

    var PF = require('pathfinding');

    let grid = new PF.Grid(matrix);
    let finder = new PF.AStarFinder();
    let path = finder.findPath(fromRow, fromCol, toRow, toCol, grid);

    return path;
  }

  checkForGameOver() {
    const cells = this.cells.filter((cell) => cell.isEmpty);
    // console.warn(cells);
    if (cells.length === 0) {
      this._gameOver = true;
    }
  }
}
