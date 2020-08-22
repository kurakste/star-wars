import Game from '../../interfaces/IGame';
import KeyboardController from './Controllers/KeyboardController';
import ClockController from './Controllers/ClockController'
import GameFieldObject from '../../interfaces/GameFieldObject';
import DrawController from './Controllers/DrawController';
import MapController from './Controllers/MapController';
import Events from '../../interfaces/Events';


class MainGame implements Game {
  
  private keyboardController = new KeyboardController();
  private clockController = new ClockController();
  private drawController:DrawController;
  private mapController = new MapController();
  events = Events;
  
  constructor(width: number, height: number) {
    this.drawController = new DrawController(width, height);
  }

  public async initGame(): Promise<void> {
    const can:HTMLCanvasElement = document.createElement('canvas');
    document.body.appendChild(can);
    this.drawController.init(can);
    this.mapController.loadMap();
    console.log('init game done');
  }

  public clock = async () => {
    this.clockController.eventHandler();
    this.drawController.draw();
    //await this.drawController.drawMap(this.mapController.getMap());

  }

  public keyboardHandler(e: KeyboardEvent): void {
    this.keyboardController.eventHandler(e);  
  }


  public addObjectOnField(o: GameFieldObject): void {
    console.log('addObjectOnField', o.subscribes)
    o.subscribes.map(el => this.subscriber(el, o)) 
 }

  private subscriber(el:Events, obj:GameFieldObject){
    console.log('subscriber', el, obj);
    switch(el) {
      case Events.Keyboard:
        this.keyboardController.addNewEventListener(obj);
        break
      case Events.Clock:
        this.clockController.addNewEventListener(obj);
        break;
      case Events.Draw: 
        this.drawController.addNewEventListener(obj);
        break;
    }
  }
}

export default MainGame;