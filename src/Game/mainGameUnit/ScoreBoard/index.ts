import getNewIndicator from './getNewIndicator';

class ScoreBoard {
  health: HTMLElement;
  score: HTMLElement;
  status: HTMLElement;
  level: HTMLElement;
  init(div: HTMLElement): void {
    this.health = getNewIndicator(div, 'Health');
    this.score = getNewIndicator(div, 'Score');
    this.level = getNewIndicator(div, 'Level');
    this.status = getNewIndicator(div, 'Status');
  }

  setDataToScore(name: indicatorsName, data: number | string): void {
    if (name === 'isPaused' || name === 'isGameOver') return;
    this[name].innerHTML = data.toString();
  }

  updateData(data: Partial<IGameState>): void {
    console.log('++++++++++++++++', data);
    if ('health' in data && data.health) this.setDataToScore('health', data.health);
    if ('score' in data && data.score) this.setDataToScore('score', data.score);
    if ('level' in data && data.level!==undefined) this.setDataToScore('level', data.level);
    if ('isPaused' in data) 
      if (data.isPaused) this.setDataToScore('status', 'paused');
    if ('isGameOver' in data) 
      if (data.isGameOver) this.setDataToScore('status', 'game over');
    if ('isPaused' in data && !data.isPaused )  this.setDataToScore('status', 'game');
  }
}

export default ScoreBoard;
