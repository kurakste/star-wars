import Controller from '../Controller';
import GameFieldObject from '../../../../interfaces/GameFieldObject';
class DrawController extends Controller {
  private readonly width: number;
  private readonly height: number;
  private ctx: any;

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
    
  }

  public async drawMap(_map: GameFieldObject[]): Promise<void> {
    _map.map(el => {
      el.draw && el.draw(this.ctx);
    });
    
  }

}

export default DrawController;