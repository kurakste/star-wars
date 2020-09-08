import MainGame from "..";


class GameState {
  public _score: number;
  public _health: number;
  public _level: number;
  public _isPaused: boolean;
  public _isGameOver: boolean;
  private game: MainGame;

  constructor(g: MainGame) {
    this.game = g;
    this._score = 0;
    this._health = 0;
    this._level = 1;
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
    return this._health;
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

  set level(data: number) {
    this._level = data;
    this.updateScoreboard();
  }

  get level(): number {
    return this._level;
  }

  public resetScoreBoard(): void {
    this._score = 0;
    this._health = 0;
    this._level = 1;
    this._isPaused = false;
    this._isGameOver = false;
    this.updateScoreboard();
  }

  private updateScoreboard() {
    console.log('------------>', this);
    this.game.scoreBoard.updateData(this);
  }
}

export default GameState;
