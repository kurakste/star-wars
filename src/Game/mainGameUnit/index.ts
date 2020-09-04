import Game from '../Interfaces/IGame';
import KeyboardController from './Controllers/KeyboardController';
import ClockController from './Controllers/ClockController'
import GameFieldObject from '../Interfaces/IGameFieldObject';
import DrawController from './Controllers/DrawController';
import Events from '../Interfaces/Events';
import GameFlowEngine from './GameFlowEngine';
import Hero from '../Actors/DamageableActors/Hero';
import CollisionController from './Controllers/CollisionsController';
import ScoreBoard from './ScoreBoard';

class MainGame implements Game {
  public readonly height: number;
  public readonly width: number;
  public gameFlowEngine = new GameFlowEngine(this);
  public ScoreBoard = new ScoreBoard()
  private keyboardController = new KeyboardController();
  private clockController = new ClockController();
  protected drawController:DrawController;
  private collisionController = new CollisionController(this);
  events = Events;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.drawController = new DrawController(width, height);
  }

  public async initGame(): Promise<void> {
    this.addVisualElementsOnHtml();
    const main = new Hero(this, 200,800);
    this.addObjectOnField(main);
    this.keyboardController.addGameFlowEngine(this.gameFlowEngine);

    console.log('init game done');
  }

  public clock = async (): Promise<void> => {
    this.gameFlowEngine.gameTic();
    this.collisionController.eventHandler();
    this.clockController.eventHandler();
    this.drawController.draw();
    return
  }


  public keyboardHandler(e: KeyboardEvent): void {
    this.keyboardController.eventHandler(e);  
  }

  public addObjectOnField = (o: GameFieldObject): void => {
    o.subscribes.map(el => this.subscriber(el, o)) 
 }

 public removeObjectFromField(o: GameFieldObject): void {
  o.subscribes.map(el => this.unSubscribe(el, o))
 }

 public gameOver(): void {
   return
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

  private addVisualElementsOnHtml() {
    const can:HTMLCanvasElement = document.createElement('canvas');
    const gameDiv:HTMLElement = document.getElementById('game');
    gameDiv.appendChild(can);
    this.drawController.init(can);
    const scoreDiv: HTMLElement = document.getElementById('score');
    this.ScoreBoard.init(scoreDiv);
  }
}

export default MainGame;