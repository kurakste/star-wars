import IGameFieldObject from "./IGameFieldObject.t";
import GameFlowEngine from '../mainGameUnit/GameFlowEngine';
import ScoreBoard from "../mainGameUnit/ScoreBoard";

interface IGame {
  width: number;
  height: number;
  gameFlowEngine: GameFlowEngine;
  scoreBoard: ScoreBoard;
  initGame(): Promise<void>;
  clock():void;
  keyboardHandler(e: KeyboardEvent): void;
  addObjectOnField(o: IGameFieldObject): void;
}

export default IGame;