export const ModelEvents = Object.freeze({
  BallModel: {
    TypeUpdate: 'BallModelTypeUpdate',
  },
  BgModel: {
    TextUpdate: 'BgModelTextUpdate',
  },
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
    ActiveCellUpdate: 'BoardModelActiveCellUpdate',
    SelectedCellUpdate: 'BoardModelSelectedCellUpdate',
    ScoreUpdate: 'BoardModelScoreUpdate',
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
  ScoreBoxModel: {
    BgUpdate: 'ScoreBoxModelBgUpdate',
  },
  Store: {
    GameUpdate: 'StoreGameUpdate',
    ScoreBoxUpdate: 'StoreScoreBoxUpdate',
  },
  TextModel: {
    TypeUpdate: 'TextModelTypeUpdate',
  },
});
