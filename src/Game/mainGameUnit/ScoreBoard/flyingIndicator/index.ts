class FlyingIndicator {
  parent: HTMLElement;
  selfHtmlElement: HTMLElement | null;
  wrapperHtml: HTMLElement | null;
  counter = 10;
  setIntervalId: any;
  info: string;
  maxYOffset: number;
  type: string; // info, danger, good 
  constructor(parentDiv: HTMLElement, info: string, type = 'info', MaxYOffset = 600) {
    this.type = type;
    this.info = info;
    const div = document.createElement('div');
    this.maxYOffset = MaxYOffset;
    div.style.width = '100%';
    div.innerHTML = this.renderHTML();
    parentDiv.appendChild(div);
    this.wrapperHtml = div;
    this.selfHtmlElement = div.firstElementChild as HTMLElement;
    this.selfHtmlElement.style.bottom = '10px';
    const xpos = this.getXPosForIndicator();
    this.selfHtmlElement.style.left = `${xpos}px`;

    if (!this.selfHtmlElement) throw new Error('FlyingIndicator element was not found.');
    this.setCounter();
  }

  incCounter(): void {
    ++this.counter;

    const opacity = (this.counter / this.maxYOffset < 0.9)
      ? 1
      : (1 - 10 * (this.counter / this.maxYOffset - 0.9)).toFixed(2);

    if (this.selfHtmlElement) {
      this.selfHtmlElement.style.bottom = `${this.counter + 10}px`
      this.selfHtmlElement.style.opacity = `${opacity}`;
    }
    if (this.counter >= this.maxYOffset) {
      clearInterval(this.setIntervalId)
      this.wrapperHtml?.remove();
    }
  }

  setCounter(): void {
    this.setIntervalId = setInterval(this.incCounter.bind(this), 15);
  }

  renderHTML(): string {
    /*html*/
    return `
      <div class="FlyingIndicator ${this.type}">
        <p>${this.info}
      </div>
    `
  }

  getXPosForIndicator(): number {
    let xpos: number;
    const windowWidth = window.innerWidth;
    if (windowWidth <= 620) {
      xpos = 620 + 120 * Math.random() - 120;
    } else if (windowWidth >= 740) {
      xpos = 740 + 120 * Math.random() - 120
    } else {
      xpos = windowWidth + 120 * Math.random() - 120;
    }

    return xpos;
  }
}

export default FlyingIndicator;