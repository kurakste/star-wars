
import imageLoader from '../helpers/imageLoader';
import imgPath from '../assets/img/mainHero2.png';

class mainGame {
  width: number;
  height: number;
  ctx: any;

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }

  async initGame(): Promise<void> {
    const canvas: HTMLCanvasElement = this._addCanvasElement();
    this.ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    console.log('init game done');
  }

  async draw(): Promise<void> {
    const img: any = await imageLoader(imgPath);
    this.ctx.drawImage(img, 0, 0, 312, 312, 20, 20, 90, 90);
  }

  _addCanvasElement():HTMLCanvasElement {
    const can:HTMLCanvasElement = document.createElement('canvas');
    can.width = this.width;
    can.height = this.height;
    can.style.background = 'black';
    return can;
  }

}

export default mainGame;