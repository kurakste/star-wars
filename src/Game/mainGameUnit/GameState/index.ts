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
    if (data >= 200 * this.level) ++this.level;
    this.updateScoreboard('score', data);
  }

  get score(): number {
    return this._score;
  }

  set health(data: number) {
    this._health = data;
    this.updateScoreboard('health', data);
  }

  get health(): number {
    return this._health;
  }

  set isPaused(data: boolean) {
    this._isPaused = data;
    this.updateScoreboard('isPaused', data);
  }

  get isPaused(): boolean {
    return this._isPaused;
  }

  set isGameOver(data: boolean) {
    this._isGameOver = data;
    this.updateScoreboard('isGameOver', data);
  }

  get isGameOver(): boolean {
    return this._isGameOver;
  }

  set level(data: number) {
    this._level = data;
    this.updateScoreboard('level', data);
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
    const data = { score: 0, health: 0, level: 0, isPaused: false, isGameOver: false };
    console.log('--------------------:', data);
    this.game.scoreBoard.updateData(data);
  }

  private updateScoreboard(indicator: indicatorsName, value: string | number | boolean) {
    console.log('------------>', this);
    const data = { [indicator]: value };
    this.game.scoreBoard.updateData(data);
  }
}

export default GameState;
