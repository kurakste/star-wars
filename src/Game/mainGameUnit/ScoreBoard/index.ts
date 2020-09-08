import getNewIndicator from './getNewIndicator';
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

  setHeathValue(health: number): void {
    this.health.innerHTML = health.toString();
  }

  setScoreValue(health: number): void {
    this.score.innerHTML = health.toString();
  }

  setStatusValue(health: string): void {
    this.status.innerHTML = health;
  }

  setLevelValue(data: number): void {
    console.log('>>>>>>>>>>>', data);
    this.level.innerHTML = data.toString();
  }

  updateData(data: IGameState): void {
    this.setHeathValue(data.health);
    this.setScoreValue(data.score);
    this.setLevelValue(data.level);
    if (data.isPaused) this.setStatusValue('paused');
    if (data.isGameOver) this.setStatusValue('game over');
    if (!(data.isPaused || data.isGameOver)) this.setStatusValue('game');
  }

}

export default ScoreBoard;
