class Indicators {
  parent: HTMLElement;
  capture: string;
  _value: number;
  private full:HTMLElement | null;
  private blank: HTMLElement | null; 
  constructor(parentDiv: HTMLElement, capture: string){
    this._value = 0;
    this.capture = capture;
    this.parent = parentDiv;
    const div = document.createElement('div');
    div.style.width ='100%';
    div.innerHTML = this.renderHTML();
    // TODO: here is a problem with type;
    this.full = div.getElementsByClassName('full').item(0) as HTMLElement; 
    this.blank = div.getElementsByClassName('blank').item(0) as HTMLElement;
    this.parent.appendChild(div);
    if (!this.full) throw new Error('div full was not found');
    if (!this.blank) throw new Error('div blank was not found');
    this.full.style.width = '100%'
    this.blank.style.width ='0%';
    this._value = 1;
  }

  set value(data: number) {
    if (data > 1) throw new Error('Value of the indicator has to be less then 1');
    this._value = data;
    const fval = Math.round(data*100);
    if (this.full) this.full.style.width = `${fval}%`;
    if (this.blank) this.blank.style.width = `${100 - fval}%`;
  }

  get value(): number {
    return this._value
  }

  renderHTML(): string {
    /*html*/
    return `
      <div class="indicatorWrapper" id ="${this.capture}">
        <div class="full">.</div>
        <div class="blank">.</div>
      </div>
    `
  }


}


export default Indicators;