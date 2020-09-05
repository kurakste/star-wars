
class ScoreBoard {
  health: HTMLElement;
  score: HTMLElement
  init(div: HTMLElement): void {
    const divWrap = document.createElement('div');
    divWrap.style.width = '100%'
    const healthCapture = document.createElement('div');
    healthCapture.innerHTML = "health:";
    healthCapture.style.width = '50%';
    healthCapture.style.float = 'left';
    const healthValue = document.createElement('div');
    healthValue.innerHTML = "-";
    healthValue.style.float = 'left';
    healthValue.style.width = '40%';

    divWrap.appendChild(healthCapture);
    divWrap.appendChild(healthValue)
    div.appendChild(divWrap);
    this.health = healthValue;
  }

  setHeathValue(health: number): void {
    this.health.innerHTML = health.toString();
  }

}

export default ScoreBoard;
