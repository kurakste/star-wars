import Controller from '../Controller';
import GameFieldObject from '../../../Interfaces/IGameFieldObject';
class DrawController extends Controller {
  private readonly width: number;
  private readonly height: number;
  private ctx: CanvasRenderingContext2D;

  constructor(width: number, height:number) {
    super();
    this.width = width;
    this.height = height;
  }

  public init(can: HTMLCanvasElement):void {
    try {
      can.width = this.width; 
      can.height = this.height; 
      can.style.background = 'black';
      const ctx = can.getContext('2d');
      if (!ctx) throw new Error('Something went wrong with getContext in DrawController');
      this.ctx = ctx;
      console.log('init', can, this);
    } catch(e) {
      console.log(e);
    }
  }

  public async draw(): Promise<void> {
    this.ctx.clearRect(0,0, this.width, this.height)
    this.eventsListeners.map(o => {
      o.draw && o.draw(this.ctx);
    });
  }

  public async drawMap(_map: GameFieldObject[]): Promise<void> {
    _map.map(el => {
      el.draw && el.draw(this.ctx);
    });
    
  }

}

export default DrawController;