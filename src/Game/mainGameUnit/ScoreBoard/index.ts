import getNewIndicator from './getNewIndicator';

type indicatorsName  = 'health' | 'score' | 'status' | 'level';

class ScoreBoard {
  health: HTMLElement;
  score: HTMLElement;
  status: HTMLElement;
  level: HTMLElement;
  init(div: HTMLElement): void {
    this.health = getNewIndicator(div, 'Health');
    this.score = getNewIndicator(div, 'Score');
    this.status = getNewIndicator(div, 'Status');
    this.level = getNewIndicator(div, 'Level');
  }

  setDataToScore(name: indicatorsName, data: number | string): void {
    this[name].innerHTML = data.toString();
  }

  updateData(data: IGameState): void {
    this.setDataToScore('health', data.health);
    this.setDataToScore('score', data.score);
    this.setDataToScore('level', data.level);
    if (data.isPaused) this.setDataToScore('status', 'paused');
    if (data.isGameOver) this.setDataToScore('status', 'game over');
    if (!(data.isPaused || data.isGameOver)) this.setDataToScore('status', 'game');
  }
}

export default ScoreBoard;
