import Game from '../Interfaces/IGame';
import KeyboardController from './Controllers/KeyboardController';
import ClockController from './Controllers/ClockController'
import GameFieldObject from '../Interfaces/GameFieldObject';
import DrawController from './Controllers/DrawController';
import Events from '../Interfaces/Events';
import GameFlowEngine from './GameFlowEngine';
import Hero from '../Actors/DamageableActors/Hero';
import CollisionController from './Controllers/CollisionsController';
import ScoreBoard from './ScoreBoard';

class MainGame implements Game {
  public readonly height: number;
  public readonly width: number;
  private keyboardController = new KeyboardController();
  private clockController = new ClockController();
  protected drawController:DrawController;
  private gameFlowEngine = new GameFlowEngine(this);
  private collisionController = new CollisionController(this);
  public ScoreBoard = new ScoreBoard()
  events = Events;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.drawController = new DrawController(width, height);
  }

  public async initGame(): Promise<void> {
    const can:HTMLCanvasElement = document.createElement('canvas');
    const gameDiv:HTMLElement = document.getElementById('game');
    gameDiv.appendChild(can);
    //document.body.appendChild(can);
    this.drawController.init(can);
    const scoreDiv: HTMLElement = document.getElementById('score');
    this.ScoreBoard.init(scoreDiv);
    const main = new Hero(this, 200,800);
    this.addObjectOnField(main);
    console.log('init game done');
  }

  public clock = async (): Promise<void> => {
    this.gameFlowEngine.gameTic(this.addObjectOnField);
    this.collisionController.eventHandler();
    this.clockController.eventHandler();
    this.drawController.draw();
    return
    //await this.drawController.drawMap(this.mapController.getMap());
  }

  public keyboardHandler(e: KeyboardEvent): void {
    this.keyboardController.eventHandler(e);  
  }

  public addObjectOnField = (o: GameFieldObject): void => {
    // console.log('addObjectOnField', o.subscribes)
    o.subscribes.map(el => this.subscriber(el, o)) 
 }

 public removeObjectFromField(o: GameFieldObject): void {
  // console.log('removeObjectFromField', o.subscribes)
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
    // console.log('subscriber', el, obj);
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