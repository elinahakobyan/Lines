export const ModelEvents = Object.freeze({
  BallModel: {
    TypeUpdate: 'BallModelTypeUpdate',
  },
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
    ActiveCellUpdate: 'BoardModelActiveCellUpdate',
    SelectedCellUpdate: 'BoardModelSelectedCellUpdate',
  },
  CellModel: {
    RowUpdate: 'CellModelRowUpdate',
    ColUpdate: 'CellModelColUpdate',
    BallUpdate: 'CellModelBallUpdate',
    IsEmptyUpdate: 'CellModelIsEmptyUpdate',
    IsSelectedUpdate: 'CellModelIsSelectedUpdate',
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
