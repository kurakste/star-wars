import getNewIndicator from './getNewIndicator';
import Indicators from './Indicators';
import FlyingIndicator from './flyingIndicator'
import ModalWindow from './ModalMessages';

class ScoreBoard {
  health: HTMLElement;
  score: HTMLElement;
  status: HTMLElement;
  level: HTMLElement;
  new: Indicators;
  rootDiv: HTMLElement;
  pauseModalMessage: ModalWindow;
  init(div: HTMLElement): void {
    this.rootDiv = div;
    this.health = getNewIndicator(div, 'Health');
    this.score = getNewIndicator(div, 'Score');
    this.level = getNewIndicator(div, 'Level');
    this.status = getNewIndicator(div, 'Status');
    this.new = new Indicators(div, 'Health');
    this.sendFlyingMessage();
    this.pauseModalMessage = new ModalWindow('Нажата пауза', 'Нажата пауза');
    

  }

  updateIndicator(name: indicatorsName, data: number | string): void {
    if (name === 'isPaused' || name === 'isGameOver') return;
    this[name].innerHTML = data.toString();
  }

  updateData(data: Partial<IGameState>): void {
    if ('health' in data && data.health) this.updateIndicator('health', data.health);
    if ('health' in data && data.health) this.new.value = data.health / 900;
    if ('score' in data && data.score) this.updateIndicator('score', data.score);
    if ('level' in data && data.level !== undefined) this.updateIndicator('level', data.level);
    if ('isPaused' in data)
      if (data.isPaused) this.updateIndicator('status', 'paused');
    if ('isGameOver' in data)
      if (data.isGameOver) this.updateIndicator('status', 'game over');
    if ('isPaused' in data && !data.isPaused) this.updateIndicator('status', 'game');
  }

  sendFlyingMessage(msg = 'Go Go Go!', type = 'info'):void {
    new FlyingIndicator(this.rootDiv, msg, type);
  }
}

export default ScoreBoard;
