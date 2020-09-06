import MainGame from "..";


class GameState {
  public _score: number;
  public _health: number;
  public _isPaused: boolean;
  public _isGameOver: boolean;
  private game: MainGame;

  constructor(g: MainGame) {
    this.game = g;
    this._score = 0;
    this._health = 0;
    this._isPaused = false;
    this._isGameOver = false;
  }

  set score(data: number) {
    this._score = data;
    this.updateScoreboard();
  }

  get score(): number {
    return this._score;
  }

  set health(data: number) {
    this._health = data;
    this.updateScoreboard();
  }

  get health(): number {
    return this._score;
  }

  set isPaused(data: boolean) {
    this._isPaused = data;
    this.updateScoreboard();
  }

  get isPaused(): boolean {
    return this._isPaused;
  }

  set isGameOver(data: boolean) {
    this._isGameOver = data;
    this.updateScoreboard();
  }

  get isGameOver(): boolean {
    return this._isGameOver;
  }

  private updateScoreboard() {
    this.game.scoreBoard.updateData(this);
  }

}

export default GameState;
