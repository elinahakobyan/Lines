export const ModelEvents = Object.freeze({
  BallModel: {
    TypeUpdate: 'BallModelTypeUpdate',
  },
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
    ActiveCellUpdate: 'BoardModelActiveCellUpdate',
  },
  CellModel: {
    RowUpdate: 'CellModelRowUpdate',
    ColUpdate: 'CellModelColUpdate',
    BallUpdate: 'CellModelBallUpdate',
    IsEmptyUpdate: 'CellModelIsEmptyUpdate',
    IsActiveUpdate: 'CellModelIsActiveUpdate',
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
