import Controller from '../Controller';
import GameFieldObject from '../../../Interfaces/IGameFieldObject.t';
import Actors from '../../../Actors/Actors';
import IActorViewObject from '../../../Interfaces/IActorViewObject';

class DrawController extends Controller {
  private readonly width: number;
  private readonly height: number;
  private ctx: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  public init(can: HTMLCanvasElement): void {
    try {
      can.width = this.width;
      can.height = this.height;
      can.style.background = 'black';
      const ctx = can.getContext('2d');
      if (!ctx) throw new Error('Something went wrong with getContext in DrawController');
      this.ctx = ctx;
      console.log('init', can, this);
    } catch (e) {
      console.log(e);
    }
  }

  public async draw(): Promise<void> {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.eventsListeners.map(o => {
      this.drawObject(o.getActorViewObject());
    });
  }

  public async drawObject(o: IActorViewObject): Promise<void> {
    this.ctx.drawImage(
      Actors.spritesImg,
      o.spriteXOffset,
      o.spriteYOffset,
      o.spriteWidth,
      o.spriteHeight,
      o.xpos,
      o.ypos,
      o.imageWidth,
      o.imageHeight
    );
  }

  public async drawMap(_map: GameFieldObject[]): Promise<void> {
    _map.map(el => {
      el.draw && el.draw(this.ctx);
    });

  }

}

export default DrawController;