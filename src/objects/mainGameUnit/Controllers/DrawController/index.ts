import imgPath from '../../../../assets/img/mainHero2.png';
import imageLoader from '../../../../helpers/imageLoader';
import Controller from '../Controller';
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
    const img: any = await imageLoader(imgPath);
    this.ctx.drawImage(img, 0, 0, 312, 312, 20, 20, 90, 90);
  }

  public async drawMap(): Promise<void> {
    const img: any = await imageLoader(imgPath);
    this.ctx.drawImage(img, 0, 0, 312, 312, 20, 20, 90, 90);
  }

}

export default DrawController;