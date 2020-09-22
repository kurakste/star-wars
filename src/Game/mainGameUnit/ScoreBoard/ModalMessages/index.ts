class ModalWindow {
  private mySelf: HTMLElement;
  constructor(public name: string, public content: string) {
    this.mySelf = document.createElement('div');
    this.mySelf.classList.add('modal');
    this.mySelf.innerHTML = this.render();
    document.body.appendChild(this.mySelf);
  }

  destroy(): void {
    this.mySelf.remove();
  }

  show(): void {
    this.mySelf.classList.toggle('show-modal');
  }

  hide(): void {
    this.mySelf.classList.toggle('show-modal');
  }

  render(): string {
    /*html*/
    return `
      <div class="modal-content my-text">
        <h1>Coffee break)))</h1>
      </div>
    `
  }
}

export default ModalWindow