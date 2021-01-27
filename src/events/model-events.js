export const ModelEvents = Object.freeze({
  BallModel: {
    TypeUpdate: 'BallModelTypeUpdate',
  },
  BoardModel: {
    CellsUpdate: 'BoardModelCellsUpdate',
    GameOverUpdate: 'BoardModelGameOverUpdate',
    ActiveCellUpdate: 'BoardModelActiveCellUpdate',
    SelectedCellUpdate: 'BoardModelSelectedCellUpdate',
    ScoreUpdate: 'BoardModelScoreUpdate',
    NextBallsUpdate: 'BoardModelNextBallsUpdate',
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
    NextBallsUpdate: 'GameModelNextBallsUpdate',
  },
  NextBallsModel: {
    BallsUpdate: 'NextBallsModelBallsUpdate',
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
