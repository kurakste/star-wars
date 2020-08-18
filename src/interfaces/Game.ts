interface Game {
  initGame(): Promise<void>;
  clock():void;
  keyboardHandler(e: KeyboardEvent): void;
  addObjectOnField(o: Object): void;
}

export default Game;