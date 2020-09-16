import MainGame from "..";


class GameState {
  public _score: number;
  public _health: number;
  public _level: TGameLevel;
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
    this.calculateGameLevel(data);
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

  set level(data: TGameLevel) {
    this._level = data;
    this.updateScoreboard('level', data);
  }

  get level(): TGameLevel {
    return this._level;
  }

  public resetScoreBoard(): void {
    this._score = 0;
    this._health = 0;
    this._level = 1;
    this._isPaused = false;
    this._isGameOver = false;
    const data = { score: 0, health: 0, level: 0, isPaused: false, isGameOver: false };
    this.game.scoreBoard.updateData(data);
  }

  private updateScoreboard(indicator: indicatorsName, value: string | number | boolean) {
    const data = { [indicator]: value };
    this.game.scoreBoard.updateData(data);
  }

  private calculateGameLevel(score: number): void {
    const scoreToLevelNumber = (sc: number): number => {
      if (sc >= 200 * this.level) return this.level + 1
      return this.level;
    };
    const levelAsNUmber = scoreToLevelNumber(score);
    if (levelAsNUmber === this.level) return;    

    switch(scoreToLevelNumber(score)) {
      case 0: 
        this.level = 0;
        break;
      case 1: 
        this.level = 1;
        break;
      case 2: 
        this.level = 2;
        break;
      case 3: 
        this.level = 3;
        break;
      case 4: 
        this.level = 4;
        break;
      case 5: 
        this.level = 5;
        break;
      case 6: 
        this.level = 6;
        break;
      case 7: 
        this.level = 7;
        break;
      case 8: 
        this.level = 7;
        break;
    }
  }
}

export default GameState;
