class Indicators {
  parent: HTMLElement;
  constructor(parentDiv: HTMLElement){
    this.parent = parentDiv;
  }

  renderHTML(): string {
    /*html*/
    return `
      <div class="indicatorWrapper">

      </div>
    `
  }

}


export default Indicators;