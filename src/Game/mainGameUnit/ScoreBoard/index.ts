import getNewIndicator from './getNewIndicator';
class ScoreBoard {
  health: HTMLElement;
  score: HTMLElement;
  status: HTMLElement;
  init(div: HTMLElement): void {
    this.health = getNewIndicator(div, 'Health');
    this.score = getNewIndicator(div, 'Score');
    this.status = getNewIndicator(div, 'Status');
  }

  setHeathValue(health: number): void {
    console.log('_________________', health);
    this.health.innerHTML = health.toString();
  }

  setScoreValue(health: number): void {
    this.score.innerHTML = health.toString();
  }

  setStatusValue(health: string): void {
    this.status.innerHTML = health.toString();
  }

  updateData(data: IGameState): void {
    console.log('+++++++++++', data.health);
    this.setHeathValue(data.health);
    this.setScoreValue(data.score);
    if (data.isPaused) this.setStatusValue('paused');
    if (data.isGameOver) this.setStatusValue('game over');
    if (!(data.isPaused || data.isGameOver)) this.setStatusValue('game');
  }

}

export default ScoreBoard;
