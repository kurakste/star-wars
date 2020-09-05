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
  public events = Events;
  public readonly height: number;
  public readonly width: number;
  public readonly canvasOnHtml: HTMLCanvasElement;
  public gameLevel: number;
  public gameFlowEngine = new GameFlowEngine(this);
  public ScoreBoard = new ScoreBoard()
  private keyboardController = new KeyboardController();
  private clockController = new ClockController();
  protected drawController:DrawController;
  private collisionController = new CollisionController(this);
  
  constructor(width: number, height: number) {
    try {
      this.width = width;
      this.height = height;
      this.canvasOnHtml = document.createElement('canvas'); 
      const gameDiv:HTMLElement|null= document.getElementById('game');
      if (!gameDiv) throw new Error('Cant find element #game in html');
      gameDiv.appendChild(this.canvasOnHtml);
      this.drawController = new DrawController(width, height);
      const scoreDiv: HTMLElement | null = document.getElementById('score');
      if (!scoreDiv) throw new Error('Cant find element #score in html');
      this.ScoreBoard.init(scoreDiv);

    } catch(e) {
      console.log(e);
    }
  }

  public async initGame(): Promise<void> {
    this.drawController.init(this.canvasOnHtml);
    this.startGame();
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
   (async function(ctx) {
     ctx.resetGame();
     await ctx.initGame()
     ctx.startGame();
   })(this);
 }

 private startGame() {
  //this.initGame();
  this.keyboardController.addGameFlowEngine(this.gameFlowEngine);
  const main = new Hero(this, 200,800);
  this.addObjectOnField(main);
 }

 private resetGame() {
  this.gameFlowEngine = new GameFlowEngine(this);
  this.drawController = new DrawController(this.width, this.height);
  // this.ScoreBoard = new ScoreBoard()
  this.keyboardController = new KeyboardController();
  this.clockController = new ClockController();
  this.collisionController = new CollisionController(this);
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