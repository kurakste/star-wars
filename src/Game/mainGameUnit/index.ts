import Game from '../Interfaces/IGame.t';
import KeyboardController from './Controllers/KeyboardController';
import ClockController from './Controllers/ClockController'
import GameFieldObject from '../Interfaces/IGameFieldObject.t';
import DrawController from './Controllers/DrawController';
import Events from '../Interfaces/Events';
import GameFlowEngine from './GameFlowEngine';
import Hero from '../Actors/DamageableActors/Hero';
import CollisionController from './Controllers/CollisionsController';
import ScoreBoard from './ScoreBoard';
import GameState from './GameState';
class MainGame implements Game {
  public mainHeroInstance: Hero;
  public events = Events;
  public readonly height: number;
  public readonly width: number;
  public readonly canvasOnHtml: HTMLCanvasElement;
  public gameLevel: number; //TODO: is it useful?
  public gameFlowEngine = new GameFlowEngine(this);
  public gameState = new GameState(this);
  public scoreBoard = new ScoreBoard();
  private keyboardController = new KeyboardController();
  private clockController = new ClockController();
  protected drawController: DrawController;
  private collisionController = new CollisionController(this);

  constructor(width: number, height: number) {
    try {
      this.width = width
      this.height = height;
      this.canvasOnHtml = document.createElement('canvas');
      const gameDiv: HTMLElement | null = document.getElementById('game');
      if (!gameDiv) throw new Error('Cant find element #game in html');
      gameDiv.appendChild(this.canvasOnHtml);
      this.drawController = new DrawController(width, height);
      const scoreDiv: HTMLElement | null = document.getElementById('score');
      if (!scoreDiv) throw new Error('Cant find element #score in html');
      this.scoreBoard.init(scoreDiv);
    } catch (e) {
      console.log(e);
    }
  }

  public async initGame(): Promise<void> {
    this.drawController.init(this.canvasOnHtml);
    this.startGame();
    console.log('init game done');
  }

  public clock = async (): Promise<void> => {
    if (this.gameState.isPaused) return;
    this.gameFlowEngine.gameTic();
    this.collisionController.eventHandler();
    this.clockController.eventHandler();
    this.drawController.draw();
    return
  }

  public keyboardHandler(e: KeyboardEvent): void {
    if (e.type === 'keyup' && e.key === 'p') this.gamePauseSwitch();
    this.keyboardController.eventHandler(e);
  }

  public addObjectOnField = (o: GameFieldObject): void => {
    o.subscribes.map(el => this.subscriber(el, o))
  }

  public removeObjectFromField(o: GameFieldObject): void {
    o.subscribes.map(el => this.unSubscribe(el, o))
  }

  public newGame(): void {
    this.resetGame();
    this.startGame();
  }

  public gamePauseSwitch(): void {
    this.gameState.isPaused =!this.gameState.isPaused
  }

  private startGame() {
    this.keyboardController.addGameFlowEngine(this.gameFlowEngine);
    const hero = new Hero(this, 200, 800);
    this.gameState.resetScoreBoard();
    this.addObjectOnField(hero);
    this.mainHeroInstance = hero;
  }

  private resetGame() {
    this.drawController.clear();
    this.keyboardController.clear();
    this.clockController.clear();
    this.collisionController.clear();
    this.gameState.resetScoreBoard();
  }

  private unSubscribe(el: Events, obj: GameFieldObject) {
    const switcher = {
      [Events.Keyboard]: () => this.keyboardController.removeEventListener(obj),
      [Events.Draw]: () => this.drawController.removeEventListener(obj),
      [Events.Clock]: () => this.clockController.removeEventListener(obj),
      [Events.Collision]: () => this.collisionController.removeEventListener(obj),
    }
    switcher[el]();
  }

  private subscriber(el: Events, obj: GameFieldObject) {
    const switcher = {
      [Events.Keyboard]: () => this.keyboardController.addNewEventListener(obj),
      [Events.Draw]: () => this.drawController.addNewEventListener(obj),
      [Events.Clock]: () => this.clockController.addNewEventListener(obj),
      [Events.Collision]: () => this.collisionController.addNewEventListener(obj),
    }
    switcher[el]();
  }
}

export default MainGame;