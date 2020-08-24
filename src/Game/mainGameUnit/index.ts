import Game from '../../interfaces/IGame';
import KeyboardController from './Controllers/KeyboardController';
import ClockController from './Controllers/ClockController'
import GameFieldObject from '../../interfaces/GameFieldObject';
import DrawController from './Controllers/DrawController';
import MapController from './Controllers/MapController';
import Events from '../../interfaces/Events';
import GameFlowEngine from './GameFlowEngine';
import Hero from '../Actors/Hero';
import CollisionController from './Controllers/CollisionsController';

class MainGame implements Game {
  public readonly height: number;
  public readonly width: number;
  private keyboardController = new KeyboardController();
  private clockController = new ClockController();
  protected drawController:DrawController;
  private mapController = new MapController();
  private gameFlowEngine = new GameFlowEngine();
  private collisionController = new CollisionController(this);
  events = Events;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.drawController = new DrawController(width, height);
  }

  public async initGame(): Promise<void> {
    const can:HTMLCanvasElement = document.createElement('canvas');
    document.body.appendChild(can);
    this.drawController.init(can);
    this.mapController.loadMap();
    const main = new Hero(this, 200,800);
    this.addObjectOnField(main);
    console.log('init game done');
  }

  public clock = async () => {
    this.gameFlowEngine.gameTic(this.addObjectOnField);
    this.collisionController.eventHandler();
    this.clockController.eventHandler();
    this.drawController.draw();
    //await this.drawController.drawMap(this.mapController.getMap());
  }

  public keyboardHandler(e: KeyboardEvent): void {
    this.keyboardController.eventHandler(e);  
  }

  public addObjectOnField = (o: GameFieldObject): void => {
    console.log('addObjectOnField', o.subscribes)
    o.subscribes.map(el => this.subscriber(el, o)) 
 }

 public removeObjectFromField(o: GameFieldObject) {
  console.log('removeObjectFromField', o.subscribes)
  o.subscribes.map(el => this.unSubscribe(el, o))
 }

 private unSubscribe(el: Events, obj: GameFieldObject) {
  const switcher = {
     [Events.Keyboard]: () => this.keyboardController.removeEventListener(obj),
     [Events.Draw]: () => this.drawController.removeEventListener(obj),
     [Events.Clock]: () =>  this.clockController.removeEventListener(obj),
     [Events.Collision]: () => this.collisionController.removeEventListener(obj),
   }
  switcher[el]();
 }

  private subscriber(el:Events, obj:GameFieldObject){
    console.log('subscriber', el, obj);
    const switcher = {
      [Events.Keyboard]: () => this.keyboardController.addNewEventListener(obj),
      [Events.Draw]: () => this.drawController.addNewEventListener(obj),
      [Events.Clock]: () =>  this.clockController.addNewEventListener(obj),
      [Events.Collision]: () => this.collisionController.addNewEventListener(obj),
    }
   switcher[el]();
  }
}

export default MainGame;