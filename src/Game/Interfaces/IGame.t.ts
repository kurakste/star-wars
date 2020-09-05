import IGameFieldObject from "./IGameFieldObject.t";

interface IGame {
  width: number;
  height: number;
  initGame(): Promise<void>;
  clock():void;
  keyboardHandler(e: KeyboardEvent): void;
  addObjectOnField(o: IGameFieldObject): void;
}

export default IGame;