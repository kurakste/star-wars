interface Game {
  initGame(): Promise<void>;
  clock():void;
  keyboardHandler(e: KeyboardEvent): void;
  draw(): Promise<void>
  addObjectOnField(o: Object): void;

}

export default Game;