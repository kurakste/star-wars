interface IGame {
  width: number;
  height: number;
  initGame(): Promise<void>;
  clock():void;
  keyboardHandler(e: KeyboardEvent): void;
  addObjectOnField(o: Object): void;
}

export default IGame;