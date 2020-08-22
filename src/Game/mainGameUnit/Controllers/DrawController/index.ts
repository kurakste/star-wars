import Controller from '../Controller';
import GameFieldObject from '../../../../interfaces/GameFieldObject';
class DrawController extends Controller {
  private readonly width: number;
  private readonly height: number;
  private ctx: CanvasRenderingContext2D;

  constructor(width: number, height:number) {
    super();
    this.width = width;
    this.height = height;
  }

  public init(can: HTMLCanvasElement) {
    can.width = this.width; 
    can.height = this.height; 
    can.style.background = 'black';
    this.ctx = can.getContext('2d');
    console.log('init', can, this);
  }

  public async draw(): Promise<void> {
    this.ctx.clearRect(0,0, this.width, this.height)
    //console.log('DrawController, draw', this.eventsListeners);
    this.eventsListeners.map(o => o.draw(this.ctx));
  }

  public async drawMap(_map: GameFieldObject[]): Promise<void> {
    _map.map(el => {
      el.draw && el.draw(this.ctx);
    });
    
  }

}

export default DrawController;