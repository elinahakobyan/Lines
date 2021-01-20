export const ModelEvents = Object.freeze({
  BallModel: {
    TypeUpdate: 'BallModelTypeUpdate',
  },
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
  },
  CellModel: {
    RowUpdate: 'CellModelRowUpdate',
    ColUpdate: 'CellModelColUpdate',
    BallUpdate: 'CellModelBallUpdate',
    IsEmptyUpdate: 'CellModelIsEmptyUpdate',
  },
  GameModel: {
    BoardUpdate: 'GameModelBoardUpdate',
  },
  ObservableModel: {
    UuidUpdate: 'ObservableModelUuidUpdate',
  },
  Store: {
    GameUpdate: 'StoreGameUpdate',
  },
});
