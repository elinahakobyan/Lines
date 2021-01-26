export const ModelEvents = Object.freeze({
  BallModel: {
    TypeUpdate: 'BallModelTypeUpdate',
  },
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
    ActiveCellUpdate: 'BoardModelActiveCellUpdate',
    SelectedCellUpdate: 'BoardModelSelectedCellUpdate',
    ScoreUpdate: 'BoardModelScoreUpdate',
    GameOverUpdate: 'BoardModelGameOverUpdate',
  },
  CellModel: {
    RowUpdate: 'CellModelRowUpdate',
    ColUpdate: 'CellModelColUpdate',
    BallUpdate: 'CellModelBallUpdate',
    IsEmptyUpdate: 'CellModelIsEmptyUpdate',
    IsSelectedUpdate: 'CellModelIsSelectedUpdate',
    FakeBallUpdate: 'CellModelFakeBallUpdate',
  },
  GameModel: {
    BoardUpdate: 'GameModelBoardUpdate',
    ScoreBoxUpdate: 'GameModelScoreBoxUpdate',
  },
  ObservableModel: {
    UuidUpdate: 'ObservableModelUuidUpdate',
  },
  ScoreBoxModel: {
    TextUpdate: 'ScoreBoxModelTextUpdate',
  },
  Store: {
    GameUpdate: 'StoreGameUpdate',
    ScoreBoxUpdate: 'StoreScoreBoxUpdate',
  },
  TextModel: {
    TypeUpdate: 'TextModelTypeUpdate',
  },
});
