import getNewIndicator from './getNewIndicator';
class ScoreBoard {
  health: HTMLElement;
  score: HTMLElement;
  status: HTMLElement;
  init(div: HTMLElement): void {
    this.health = getNewIndicator(div, 'Health');
    this.score = getNewIndicator(div, 'Score');
    this.score = getNewIndicator(div, 'Status');
  }

  setHeathValue(health: number): void {
    this.health.innerHTML = health.toString();
  }

}

export default ScoreBoard;
